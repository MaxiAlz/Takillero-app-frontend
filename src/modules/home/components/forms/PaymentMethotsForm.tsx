import { useEffect, useState } from 'react';
import { TicketItem } from '../../../../hooks/useCardTicketStorage';
import { alertBanners } from '../../../../components';
import { usePurchaseFormik } from '../../formiks/usePoruchaseFormik';

interface PaymentMethodFormProps {
  selectedProductsCart: TicketItem[];
  hasPaidProducts: boolean;
  purchaseFormik: ReturnType<typeof usePurchaseFormik>;
}

interface PaymentMethod {
  name: string;
  value: string;
  paymentMethodKey: number;
}

const availablePayMethots: PaymentMethod[] = [
  // { name: 'Gratis', value: 'free', paymentMethodKey: 0 },
  { name: 'Efectivo', value: 'cash', paymentMethodKey: 0 },
  { name: 'Tarjeta', value: 'card', paymentMethodKey: 1 },
];

export const PaymentMethodForm = ({
  selectedProductsCart,
  hasPaidProducts,
  purchaseFormik,
}: PaymentMethodFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    availablePayMethots[0],
  );

  useEffect(() => {
    if (selectedProductsCart.some((item) => item.price === 0)) {
      setPaymentMethod(availablePayMethots[0]);
    }
    purchaseFormik.setFieldValue(
      'paymentMethod',
      paymentMethod.paymentMethodKey,
    );
  }, [selectedProductsCart]);

  // const areAllTicketsFree = (tickets: TicketItem[]) => {
  //   return tickets.every((ticket) => ticket.price === 0);
  // };

  // const hasPaidTickets = (tickets: TicketItem[]) => {
  //   return tickets.some((ticket) => ticket.price > 0);
  // };

  return (
    <div className="border p-4 border-black rounded-lg py-4 mb-5 bg-white shadow-lg dark:border-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Método de Pago
      </h2>

      <div className="flex gap-4 mb-6">
        {hasPaidProducts &&
          availablePayMethots.map((paymentMethodItem) => (
            <button
              key={paymentMethodItem.paymentMethodKey}
              className={`px-4 py-2 rounded-lg border  ${
                paymentMethodItem.value === paymentMethod.value
                  ? 'bg-primary text-white font-semibold border-hidden'
                  : 'border  '
              }`}
              onClick={() => setPaymentMethod(paymentMethodItem)}
            >
              {paymentMethodItem.name}
            </button>
          ))}
      </div>
      <div className="mb-4">
        {!hasPaidProducts &&
          alertBanners.showInfoBanner({
            title: 'Este evento es gratis',
            message:
              'Este evento no tiene costo de entrada ni productos de pago seleccionados. Recibiras tus tickets en el email que registraste.',
          })}

        {hasPaidProducts &&
          paymentMethod.value === 'cash' &&
          alertBanners.showWarningBanner({
            title: 'Pago en boleteria',
            message:
              'Realizaras el pago en efectivo. Procura obtener la informacion necesaria para la validacion de la identidad en el ingreso y la ubicacion de estos puntos de venta.',
          })}
      </div>

      {hasPaidProducts && paymentMethod.value === 'card' && (
        <div className="py-4">
          <div>
            <label className="block text-black dark:text-white mb-2">
              Número de Tarjeta
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black dark:text-white mb-2">
                Fecha de Vencimiento
              </label>
              <input
                type="text"
                placeholder="MM/AA"
                className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-black dark:text-white mb-2">
                Código de Seguridad
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-black dark:text-white mb-2">
              Nombre en la Tarjeta
            </label>
            <input
              type="text"
              placeholder="JUAN PEREZ"
              className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};
