"use client"

interface OrderItem {
  name: string
  qty: number
  price: number
}

interface OrderCardProps {
  table: string
  orderNumber: string
  items: OrderItem[]
  onEdit?: () => void
  onDelete?: () => void
}

export default function OrderCard({
  table,
  orderNumber,
  items,
  onEdit,
  onDelete,
}: OrderCardProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="w-full max-w-sm mx-auto bg-fondoS rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      <div className="bg-fondoS text-white text-center py-3">
        <h2 className="text-lg font-bold">Cola de Pedidos</h2>
      </div>

     <div className="p-4 space-y-3 bg-fondoP rounded-xl mx-4 my-4">
        <div>
          <h3 className="text-lg font-semibold">{table}</h3>
          <p className="text-gray-500 text-sm">Pedido #{orderNumber}</p>
        </div>

        <div className="space-y-1">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>{item.qty}x {item.name}</span>
              <span className="font-medium">S/{item.price}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center border-t pt-3">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-xl font-bold">S/{total}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            className="bg-black text-white py-2 rounded-xl hover:opacity-90 transition"
            onClick={onEdit}
          >
            Modificar
          </button>

          <button
            className="bg-red-600 text-white py-2 rounded-xl hover:opacity-90 transition"
            onClick={onDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
