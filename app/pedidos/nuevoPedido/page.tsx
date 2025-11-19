"use client";
import OrderFormCard from "@/app/components/OrderFormCard";
import Header from "@/app/components/header";
const pedidoInicial = {
  mesa: "",
  tipo: "local",
  mesero: "",
  total: 0,
};

export default function Page() {
  return (
    <div className="min-h-screen bg-fondoP  flex flex-col items-center">
        <Header role="Administrador" />
      <OrderFormCard
        title="Registrar Pedido"
        submitText="Registrar"
        initialValues={pedidoInicial}
        onSubmit={(data) => console.log("Nuevo pedido:", data)}
        onCancel={() => window.history.back()}
      />
    </div>
  );
}
