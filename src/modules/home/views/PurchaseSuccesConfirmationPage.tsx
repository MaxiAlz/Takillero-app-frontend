import HomeLayaut from '../../../layout/HomeLayaut';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { RoundedFilledButton, RoundedOutlineButton } from '../../../components';
import {
  MdHome,
  MdInfoOutline,
  MdOutlineEmail,
  MdSearch,
} from 'react-icons/md';
import { IoCheckmarkCircle } from 'react-icons/io5';

const PurchaseSuccesConfirmationPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const collectionId = searchParams.get('collection_id');
  const paymentId = searchParams.get('payment_id');
  const merchantOrderId = searchParams.get('merchant_order_id');

  return (
    <HomeLayaut>
      <section className="lg:mx-40 px-4  min-h-screen">
        <div className="text-center mb-8">
          <IoCheckmarkCircle color="green" size={64} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            ¡Compra realizada con éxito!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tu pago ha sido procesado correctamente
          </p>
        </div>

        <div className=" dark:bg-graydark border border-primary rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <MdOutlineEmail className="text-primary" size={25} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Tickets enviados por email
            </h2>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
            Tus tickets han sido enviados a la casilla de correo electrónico con
            la que relizaste la compra.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
            Revisa tu bandeja de entrada y carpeta de spam.
          </p>
        </div>

        {(collectionId || paymentId || merchantOrderId) && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 px-20 border">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Detalles de la transacción
            </h3>
            <div className="space-y-2 text-sm">
              {merchantOrderId && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    ID de orden:
                  </span>
                  <span className="font-mono text-gray-900 dark:text-white">
                    {merchantOrderId}
                  </span>
                </div>
              )}
              {paymentId && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    ID de pago:
                  </span>
                  <span className="font-mono text-gray-900 dark:text-white">
                    {paymentId}
                  </span>
                </div>
              )}
              {collectionId && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    ID de colección:
                  </span>
                  <span className="font-mono text-gray-900 dark:text-white">
                    {collectionId}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="rounded-xl p-6 mb-8 border brodergray-200 dark:border-gray-700 flex flex-col items-center">
          <div className="flex items-center justify-center mb-3">
            <MdInfoOutline className="text-primary" size={25} />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              ¿No recibiste tus tickets?
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Si necesitas que se reenvíen tus tickets, puedes usar nuestro
            buscador con el email y DNI que ingresaste en la compra.
          </p>
          <RoundedFilledButton
            text="Buscar mis tickets"
            icon={<MdSearch size={25} />}
            onClick={() => {}}
          />
        </div>

        <div className=" w-full flex justify-center gap-2 my-5">
          <RoundedOutlineButton
            text="Volver al inicio"
            icon={MdHome}
            onClick={() => {
              navigate('/', {
                replace: true, // Reemplaza la entrada actual en el historial
                state: {}, // Limpia el estado
              });
            }}
          />
        </div>

        <div className="flex lg:flex-row  flex-col items-center justify-center gap-4 my-10">
          <h3 className="text-xl font-semibold ">¿Necesitas ayuda?</h3>
          <a
            href="mailto:contacto@eventos.com"
            className="text-primary hover:underline flex items-center gap-2"
          >
            contacto@eventos.com
          </a>

          <a
            href="https://wa.me/50683333333"
            className="text-primary hover:underline flex items-center gap-2"
          >
            +506 83333333
          </a>
        </div>
      </section>
    </HomeLayaut>
  );
};

export { PurchaseSuccesConfirmationPage };
