
import Header from "../components/header";
import OrderCard from "../components/orderCards";

export default function Page() {
  const items = [
    { name: "1/2 Pollo", qty: 1, price: 35 },
    { name: "1/8 Pollo", qty: 2, price: 18 },
    { name: "Inca Cola", qty: 1, price: 10 },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* HEADER ARRIBA */}
      <div className="w-full">
        <Header role="Administrador" />
      </div>

      {/* CONTENEDOR DE LAS CARDS */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <OrderCard
          table="Mesa 1"
          orderNumber="0000"
          items={items}
        />
      </div>
    </div>
  );
}
