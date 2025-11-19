import React from "react";
import { Star, FileCheckCorner, UtensilsCrossed, CircleDollarSign } from "lucide-react";
import Header from "../components/header";
const PolleriaMenuAdmin: React.FC = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-fondoP p-10">
    <div className="min-h-screen bg-fondoP  flex flex-col items-center">
        <Header role="Administrador" />
      {/* <div className="bg-fondoS text-textoB rounded-2xl p-6 w-80 sm:w-96 shadow-lg flex flex-col items-center"> */}
      <div className="mt-6 bg-fondoS text-textoB rounded-2xl p-6 w-80 sm:w-96 shadow-lg flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center uppercase tracking-wide">
          Pollería Benito
        </h1>

        <p className="text-sm sm:text-base mb-6 text-center opacity-90">
          Selecciona una opción para continuar
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button
            id="btn-ventasDia"
            className="bg-fondoP text-textoN rounded-xl flex flex-col items-center justify-center py-3 shadow hover:bg-gray-200 transition duration-200"
          >
             <CircleDollarSign size={70} />
             <span className="mt-1 text-sm sm:text-base font-semibold">
              Ventas del dia
            </span>
          </button>

          <button
            id="btn-pedidosC"
            className="bg-fondoP text-textoN rounded-xl flex flex-col items-center justify-center py-3 shadow hover:bg-gray-200 transition duration-200"
          >
            <FileCheckCorner size={70} />
            <span className="mt-1 text-sm sm:text-base font-semibold">
              Pedidos Completados
            </span>
          </button>

          <button
            id="btn-productoE"
            className="bg-fondoP text-textoN rounded-xl flex flex-col items-center justify-center py-3 shadow hover:bg-gray-200 transition duration-200"
          >
             <Star size={70} />
             <span className="mt-1 text-sm sm:text-base font-semibold">
              Producto Estrella
            </span>
          </button>

          <button
            id="btn-mesasO"
            className="bg-fondoP text-textoN rounded-xl flex flex-col items-center justify-center py-3 shadow hover:bg-gray-200 transition duration-200"
          >
            <UtensilsCrossed size={70} />
            <span className="mt-1 text-sm sm:text-base font-semibold">
              Mesas Ocupadas
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolleriaMenuAdmin;
