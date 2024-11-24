import { useEffect, useState } from "react";
import { TicketItem } from "../../../../hooks/useCardTicketStorage";
import { alertBanners } from "../../../../components";

interface PaymentMethodFormProps {
  selectedProductsCart: TicketItem[];
}
export const PaymentMethodForm = ({
  selectedProductsCart,
}: PaymentMethodFormProps) => {
  const availablePayMethots = [
    { name: 'Gratis', value: 'free', paymentMethodKey: 0 },
    { name: 'Efectivo', value: 'cash', paymentMethodKey: 0 },
    { name: 'Tarjeta', value: 'card', paymentMethodKey: 1 },
  ];
  const [paymentMethod, setPaymentMethod] = useState<string>('free');

  // TODO: Eliminar el boton de gratis siguiendo el siguiente criterio:
  // TODO: si el los tickets de evento son gratis, no se debe mostrar el formulario de pago. y se debe mostrar un banner de info
  // TODO: si el alguno de los tickets son de pago, se debe mostrar el formulario de pago. con los botones de efectivo y tarjeta.
  
  useEffect(() => {
    if (selectedProductsCart.some((item) => item.price === 0)) {
      setPaymentMethod('free');
    }
  }, [selectedProductsCart]);

  return (
    <div className="border border-black rounded-lg mb-5 bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Método de Pago
      </h2>

      <div className="flex gap-4 mb-6">
        {availablePayMethots.map((paymentMethodItem) => (
          <button
            key={paymentMethodItem.paymentMethodKey}
            className={`px-4 py-2 rounded-lg border  ${
              paymentMethodItem.value === paymentMethod
                ? 'bg-primary text-white font-semibold border-hidden'
                : 'border  '
            }`}
            onClick={() => setPaymentMethod(paymentMethodItem.value)}
          >
            {paymentMethodItem.name}
          </button>
        ))}
      </div>

      {paymentMethod === 'free' &&
        alertBanners.showInfoBanner({
          title: 'Este evento es gratis',
          message:
            'No es necesario realizar ningun pago para acceder a este evento. Recibiras un correo con los detalles de acceso al evento y tus tickets.',
        })}

      {paymentMethod === 'cash' &&
        alertBanners.showWarningBanner({
          title: 'Pago en boleteria',
          message:
            'Realizaras el pago en efectivo. Procura obtener la informacion necesaria para la validacion de la identidad en el ingreso y la ubicacion de estos puntos de venta.',
        })}

      {paymentMethod === 'card' && (
        <div className="space-y-4">
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