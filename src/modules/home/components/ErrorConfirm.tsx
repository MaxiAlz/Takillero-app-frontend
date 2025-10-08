import { RoundedFilledButton, RoundedOutlineButton } from '../../../components';
import { MdHome } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ErrorConfirm = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
            Esta Pantalla no Esta Disponible :(
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Lo sentimos, no se puede acceder directamente a esta página.
          </p>
        </div>
        <div className="my-2">
          <p>
            Si lo que necesitas es{' '}
            <span className="text-primary ">acceder a tus tickes</span>, puedes
            encontrarlos{' '}
            <span className="text-primary hover:underline hover:cursor-pointer" onClick={()=>navigate('/iniciarsesionpibe')}>
              iniciando sesion
            </span>{' '}
            en tu perfil con en mismo email que hiciste la compra. Tambien
            puedes usar nuestro buscador de tickets para volver a enviarlos a tu
            correo.
          </p>
        </div>

        <div className="p-6 bg-gray-100 dark:bg-meta-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">¿Necesitas ayuda?</h3>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              Contáctanos a través de:
            </p>
            <div className="flex justify-center gap-4">
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
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center mt-8">
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
          <RoundedOutlineButton
            text="Buscar Tickets"
            icon={MdSearch}
            onClick={() => {
              navigate(`/solicitar-ticket`);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorConfirm;
