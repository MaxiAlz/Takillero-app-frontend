import { useSearchParams } from 'react-router-dom';

const PurchasePendingConfirmationPage = () => {
  const [searchParams] = useSearchParams();

  const collectionId = searchParams.get('collection_id');
  const paymentId = searchParams.get('payment_id');
  const merchantOrderId = searchParams.get('merchant_order_id');
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 text-center">
        {/* Icono de pendiente */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-yellow-600 dark:text-yellow-400 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6l4 2"
              />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Pago en proceso
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Estamos verificando tu transacción
          </p>
        </div>

        {/* Información del proceso */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              ¿Qué está pasando?
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Tu pago está siendo procesado por el banco. Este proceso puede tomar
            algunos minutos.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div
                className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Procesando transacción...
            </p>
          </div>
        </div>

        {/* Información sobre notificación */}
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center mb-3">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Te notificaremos por email
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Una vez que se confirme el pago, enviaremos tus tickets a:
          </p>
          <p className="text-lg font-medium text-blue-700 dark:text-blue-300 bg-white dark:bg-gray-800 rounded-lg py-2 px-4 inline-block">
            tu email registrado
          </p>
        </div>

        {/* Detalles de la transacción */}
        {(collectionId || paymentId || merchantOrderId) && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
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

        {/* Información importante */}
        <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center mb-3">
            <svg
              className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Importante
            </h3>
          </div>
          <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              No cierres esta ventana hasta recibir confirmación
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              El proceso puede tomar hasta 10 minutos
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              Recibirás un email con el resultado final
            </li>
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Verificar estado
          </button>
          <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Volver al inicio
          </button>
        </div>

        {/* Información de contacto */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ¿Tienes dudas sobre tu transacción?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contacto@eventos.com"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              contacto@eventos.com
            </a>
            <a
              href="https://wa.me/50683333333"
              className="text-green-600 dark:text-green-400 hover:underline flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
              </svg>
              +506 83333333
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PurchasePendingConfirmationPage };
