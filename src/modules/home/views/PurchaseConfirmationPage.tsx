import HomeLayaut from '../../../layout/HomeLayaut';
import { useLocation, useNavigate } from 'react-router-dom';

import { GiConfirmed } from 'react-icons/gi';
import { Card } from 'flowbite-react';
import { RoundedFilledButton } from '../../../components';
import { MdHome } from 'react-icons/md';
import ErrorConfirm from '../components/ErrorConfirm';

const PurchaseConfirmationPage = () => {
  const location = useLocation();
  const { purchaseDetails, eventId, valueResponse } = location.state || {};
  const navigate = useNavigate();

  console.log('location.state', location);

  if (!purchaseDetails) {
    return (
      <HomeLayaut>
        <ErrorConfirm />
      </HomeLayaut>
    );
  }

  return (
    <HomeLayaut>
      <section className="container mx-auto px-4  min-h-screen">
        {/* Encabezado de confirmación */}
        <div className="text-center mb-8">
          <GiConfirmed color="green" size={64} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            ¡Compra realizada con éxito!
          </h2>
        </div>

        {/* Tarjeta de detalles */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="dark:bg-boxdark">
            <h2 className="font-bold text-2xl dark:text-white">
              Detalles de la Compra
            </h2>
            <div className="border-t border-gray-200 dark:border-gray-700 mb-4"></div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="col-span-2 md:col-span-1">
                <span className="block text-gray-600 dark:text-gray-400">
                  Evento
                </span>
                <strong className="text-lg">
                  {valueResponse.eventName || 'N/A'}
                </strong>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-gray-600 dark:text-gray-400">
                  Identificador evento:
                </span>
                <strong className="text-lg">{eventId}</strong>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-gray-600 dark:text-gray-400">
                  Total
                </span>
                <strong className="text-lg">${valueResponse.total || 0}</strong>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-gray-600 dark:text-gray-400">
                  Número de Transacción
                </span>
                <strong className="text-lg">
                  #{valueResponse.transactionId || 'N/A'}
                </strong>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-meta-4 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-bold text-primary">
                  Aviso Importante:
                </span>{' '}
                Los detalles de tu compra han sido enviados a tu correo
                electrónico. Si no los has recibido, puedes solicitar un reenvío
                aquí:{' '}
                <a
                  href={`/solicitar-tickets`}
                  className="text-primary hover:underline font-medium"
                >
                  Reenviar tickets
                </a>
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Inicia sesion o crea tu cuenta con este email para acceder a
              beneficios exclusivos, ver tus compras y mucho mas{' '}
              <a href={`/auth/login`} className=" hover:underline font-medium">
                haciendo click aqui.
              </a>
            </p>
          </Card>

          <div className=" w-full flex justify-center gap-2 my-5">
            <RoundedFilledButton
              text="Volver al inicio"
              icon={<MdHome size={25} />}
              onClick={() => {
                navigate('/', {
                  replace: true, // Reemplaza la entrada actual en el historial
                  state: {}, // Limpia el estado
                });
              }}
            />
          </div>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-row items-center justify-center gap-4">
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

        {/* Enlace a tickets */}
      </section>
    </HomeLayaut>
  );
};

export { PurchaseConfirmationPage };
