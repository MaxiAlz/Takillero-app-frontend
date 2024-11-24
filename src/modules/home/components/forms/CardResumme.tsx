const CardResume = () => (
  <div className="border border-black rounded-lg mb-5 w-full bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-white dark:bg-boxdark sm:px-7.5">
    <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
      Resumen de Compra
    </h2>

    <div className="flex justify-between mb-2">
      <span className="text-gray-600 dark:text-gray-400">
        Cantidad de tickets:
      </span>
      <span className="font-semibold text-black dark:text-white">10</span>
    </div>

    <div className="flex justify-between mb-4">
      <span className="text-gray-600 dark:text-gray-400">Total a pagar:</span>
      <span className="font-semibold text-black dark:text-white">$1000</span>
    </div>

    <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80 transition-colors">
      Proceder al pago
    </button>
  </div>
);

export { CardResume };
