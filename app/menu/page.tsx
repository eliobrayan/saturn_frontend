import React from "react";

const PolleriaMenu: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-fondoP p-10">
      <div className="bg-fondoS text-textoB rounded-2xl p-6 w-80 sm:w-96 shadow-lg flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center uppercase tracking-wide">
          Pollería Benito
        </h1>

        <p className="text-sm sm:text-base mb-6 text-center opacity-90">
          Selecciona una opción para continuar
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button
            id="btn-registrar"
            className="bg-fondoP text-textoN rounded-xl flex flex-col items-center justify-center py-3 shadow hover:bg-gray-200 transition duration-200"
          >
            <span className="text-3xl">📝</span>
            <span className="mt-1 text-sm sm:text-base font-semibold">
              Registrar
            </span>
          </button>

          <button
            id="btn-ver"
            className="bg-fondoP text-textoN rounded-xl flex flex-col items-center justify-center py-3 shadow hover:bg-gray-200 transition duration-200"
          >
            <span className="text-3xl">📋</span>
            <span className="mt-1 text-sm sm:text-base font-semibold">
              Ver Pedido
            </span>
          </button>

          <button
            id="btn-modificar"
            className="bg-fondoP text-textoN rounded-xl flex flex-col items-center justify-center py-3 shadow hover:bg-gray-200 transition duration-200"
          >
            <span className="text-3xl">✏️</span>
            <span className="mt-1 text-sm sm:text-base font-semibold">
              Modificar
            </span>
          </button>

          <button
            id="btn-eliminar"
            className="bg-fondoP text-textoN rounded-xl flex flex-col items-center justify-center py-3 shadow hover:bg-gray-200 transition duration-200"
          >
            <span className="text-3xl">🗑️</span>
            <span className="mt-1 text-sm sm:text-base font-semibold">
              Eliminar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolleriaMenu;
