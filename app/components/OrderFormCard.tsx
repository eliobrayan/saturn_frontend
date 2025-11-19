// "use client";

// import { useState } from "react";

// export default function RegisterOrderCard({ onCancel, onSubmit }: any) {
//   const [form, setForm] = useState({
//     mesa: "",
//     tipo: "",
//     mesero: "",
//     total: 0,
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (onSubmit) onSubmit(form);
//   };

//   return (
//     <div className="mt-6 bg-fondoS text-textoN rounded-2xl p-6 w-80 sm:w-120 shadow-lg flex flex-col items-center">
//       <h2 className="text-center text-2xl font-bold mb-4">Registrar Pedido</h2>

//       {/* Número de mesa */}
//       <label className="flex items-center justify-between mb-3">
//         <span className="font-bold w-60">Número de mesa:</span>
//         <input
//           type="text"
//           name="mesa"
//           value={form.mesa}
//           onChange={handleChange}
//           className="mt-1 w-full rounded-md px-3 py-1 bg-white outline-none"
//         />
//       </label>

//       {/* Tipo de pedido */}
//       <label className="flex items-center justify-between mb-3">
//         <span className="font-bold w-60">Tipo de pedido:</span>
//         <input
//           type="text"
//           name="tipo"
//           value={form.tipo}
//           onChange={handleChange}
//           className="mt-1 w-full rounded-md px-3 py-1 bg-white outline-none"
//         />
//       </label>

//       {/* Mesero asignado */}
//       <label className="flex items-center justify-between mb-3">
//         <span className="font-bold w-60">Mesero asignado:</span>
//         <input
//           type="text"
//           name="mesero"
//           value={form.mesero}
//           onChange={handleChange}
//           className="mt-1 w-full rounded-md px-3 py-1 bg-white outline-none"
//         />
//       </label>

//       {/* Total */}
//       <div className="flex justify-between items-center font-bold font-xl my-4">
//         <span>Total de pedido:  </span>
//         <span> S/ {form.total}</span>
//       </div>

//       {/* Botones */}
//       <div className="flex gap-4 mt-4">
//         <button
//           onClick={handleSubmit}
//           className="flex-1 bg-textoN text-textoB py-3 px-10 rounded-md hover:bg-gray-700 transition"
//         >
//           Registrar
//         </button>

//         <button
//           onClick={onCancel}
//           className="flex-1 bg-textoN text-textoB py-3 px-10 rounded-md hover:bg-gray-700 transition"
//         >
//           Cancelar
//         </button>
//       </div>
//     </div>
//   );
// }

// app/components/OrderFormCard.tsx
// app/components/OrderFormCard.tsx
"use client";

import { useState } from "react";

type OrderFormValues = {
  mesa: string;
  tipo: string;
  mesero: string;
  total: number;
};

type OrderFormProps = {
  title: string;
  submitText: string;
  initialValues: OrderFormValues;
  onSubmit: (data: OrderFormValues) => void;
  onCancel: () => void;
};

export default function OrderFormCard({
  title,
  submitText,
  initialValues,
  onSubmit,
  onCancel,
}: OrderFormProps) {
  const [form, setForm] = useState<OrderFormValues>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "total" ? parseFloat(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="mt-6 bg-fondoS text-textoB rounded-2xl p-6 w-80 sm:w-[34rem] shadow-lg flex flex-col items-center">
      
      <h2 className="text-3xl text-textoB font-bold mb-5">{title}</h2>

  <form onSubmit={handleSubmit} className="space-y-4 p-6">

  {/* Mesa */}
  <div className="flex items-center gap-4">
    <label className="w-40 font-bold text-textoN text-left">Número de Mesa:</label>
    <input
      type="text"
      name="mesa"
      value={form.mesa}
      onChange={handleChange}
      className="flex-1 rounded-md px-3 py-1 bg-fondoP outline-none"
    />
  </div>

  {/* Tipo */}
  <div className="flex items-center gap-4">
    <label className="w-40 font-bold text-textoN text-left">Tipo de Pedido:</label>
    <select
      name="tipo"
      value={form.tipo}
      onChange={handleChange}
      className="flex-1 rounded-md px-3 py-1 bg-fondoP outline-none"
    >
      <option value="local">Local</option>
      <option value="delivery">Delivery</option>
    </select>
  </div>

  {/* Mesero */}
  <div className="flex items-center gap-4">
    <label className="w-40 font-bold text-textoN text-left">Mesero asignado:</label>
    <input
      type="text"
      name="mesero"
      value={form.mesero}
      onChange={handleChange}
      className="flex-1 rounded-md px-3 py-1 bg-fondoP outline-none"
    />
  </div>

  {/* Total */}
  <div className="flex items-center gap-4">
    <label className="w-40 font-bold text-textoN text-left">Total de Pedido:</label>
    <input
      type="number"
      name="total"
      step="0.01"
      value={form.total}
      onChange={handleChange}
      className="flex-1 rounded-md px-3 py-1 bg-fondoP outline-none"
    />
  </div>

  {/* Botones */}
  <div className="flex justify-end gap-3 pt-4">
    <button
      type="button"
      className="px-4 py-2 w-50 bg-textoN text-textoB rounded-lg"
      onClick={onCancel}
    >
      Cancelar
    </button>

    <button
      type="submit"
      className="px-4 py-2 w-50 bg-textoN text-textoB rounded-lg"
    >
      {submitText}
    </button>
  </div>

</form>

    </div>
  );
}
