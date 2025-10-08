import { usePurchaseFormik } from '../formiks/usePoruchaseFormik';

export const PourchaseUserInformationForm = ({
  purchaseFormik,
}: {
  purchaseFormik: ReturnType<typeof usePurchaseFormik>;
}) => {
  return (
    <>
      <div className="border border-black rounded-lg mb-5 bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
          Datos del Comprador
        </h2>
        <div className="border-b border-gray-200 dark:border-gray-700 my-4"></div>
        <div className="my-5">
          <label className="mt-1 text-xl block text-black dark:text-white ">
            Nombre Completo
          </label>
          <input
            type="text"
            name="name"
            placeholder="Juan Perez"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={purchaseFormik.handleChange}
            onBlur={purchaseFormik.handleBlur}
            value={purchaseFormik.values.name}
          />
          {purchaseFormik.touched.name && purchaseFormik.errors.name && (
            <p className="text-error">{purchaseFormik.errors.name}</p>
          )}

          <label className="mt-1 block text-xl text-black  dark:text-white ">
            Correo Electronico
          </label>
          <p>Este email sera usado para enviar los tickets de compra.</p>
          <input
            type="email"
            name="email"
            placeholder="juan.perez@email.com"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={purchaseFormik.handleChange}
            onBlur={purchaseFormik.handleBlur}
            value={purchaseFormik.values.email}
          />
          {purchaseFormik.touched.email && purchaseFormik.errors.email && (
            <p className="text-error">{purchaseFormik.errors.email}</p>
          )}

          <label className="mt-1 block text-xl  text-black dark:text-white ">
            Confirmar Correo Electronico
          </label>
          <input
            type="email"
            name="confirmEmail"
            placeholder="juan.perez@email.com"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={purchaseFormik.handleChange}
            onBlur={purchaseFormik.handleBlur}
            value={purchaseFormik.values.confirmEmail}
          />
          {purchaseFormik.touched.confirmEmail &&
            purchaseFormik.errors.confirmEmail && (
              <p className="text-error">{purchaseFormik.errors.confirmEmail}</p>
            )}

          <label className="mt-1 block text-xl text-black dark:text-white ">
            DNI o Pasaporte
          </label>
          <p>
            Este DNI o Pasaporte sera usado para la validacion de la identidad
            en el ingreso al evento.
          </p>
          <input
            type="text"
            name="dni"
            placeholder="12345678"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={purchaseFormik.handleChange}
            onBlur={purchaseFormik.handleBlur}
            value={purchaseFormik.values.dni}
          />
          {purchaseFormik.touched.dni && purchaseFormik.errors.dni && (
            <p className="text-error">{purchaseFormik.errors.dni}</p>
          )}
        </div>
      </div>
    </>
  );
};
