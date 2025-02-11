import HomeLayaut from '../../../layout/HomeLayaut';
import { useNavigate, useParams } from 'react-router-dom';
import { GiConfirmed } from 'react-icons/gi';

import ErrorConfirm from '../components/ErrorConfirm';
import { RoundedFilledButton, TicketQrBuyed } from '../../../components';
import { MdHome } from 'react-icons/md';
import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const PurchaseConfirmationPage = () => {
  // const location = useLocation();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const purchaseState = useSelector((state: RootState) => state.purchase);

  if (!purchaseState.tickets.length) {
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
                  {purchaseState.eventData.name || 'N/A'}
                </strong>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-gray-600 dark:text-gray-400">
                  Identificador evento: N°{eventId}
                </span>
                {/* <strong className="text-lg">{purchaseState.eventData.}</strong> */}
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-gray-600 dark:text-gray-400">
                  Total
                </span>
                <strong className="text-lg">
                  {/* ${valuePoruchaseResponse.total || 0} */}
                </strong>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-gray-600 dark:text-gray-400">
                  Número de Transacción
                </span>
                <strong className="text-lg">
                  {/* #{valuePoruchaseResponse.transactionId || 'N/A'} */}
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
        </div>

        <section className="w-full  flex flex-col justify-center items-center">
          {purchaseState.tickets.map((ticket) => (
            <TicketQrBuyed
              key={ticket.code}
              eventData={purchaseState.eventData}
              personaData={purchaseState.personaData}
              ticket={ticket}
            />
          ))}
        </section>

        {/* Información de contacto */}

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

        {/* Enlace a tickets */}
        <div className="flex flex-row items-center justify-center gap-4 my-10">
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

export { PurchaseConfirmationPage };

// {
//   "message": "Se realizo la compra exitosamente",
//   "data": {
//       "eventData": {
//           "name": "OEISIS (TRIBUTO A OASIS) - KNEBWORTH NIGHT",
//           "date": "2025-01-25T23:30:00Z",
//           "location": "Federico Lacroze 3455, CABA"
//       },
//       "personaData": {
//           "name": "Gustavo",
//           "dni": "123123123"
//       },
//       "tickets": [
//           {
//               "code": "c03437a3-d569-4fd3-962a-ace7a95dc9e5",
//               "type": "Entrada general - Preventa 1"
//           }
//       ]
//   }
// }
