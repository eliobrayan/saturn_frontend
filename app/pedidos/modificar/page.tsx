"use client";
import OrderFormCard from "@/app/components/OrderFormCard";
import Header from "@/app/components/header";
const pedidoExistente = {
  mesa: "12",
  tipo: "local",
  mesero: "Juan",
  total: 35.5,
};

export default function Page() {
  return (
    <div className="min-h-screen bg-fondoP  flex flex-col items-center">
        <Header role="Administrador" />
      <OrderFormCard
        title="Modificar Pedido"
        submitText="Guardar"
        initialValues={pedidoExistente}
        onSubmit={(data) => console.log("Pedido modificado:", data)}
        onCancel={() => window.history.back()}
      />
    </div>
  );
}
