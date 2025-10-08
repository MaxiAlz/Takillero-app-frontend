import { Label, TextInput } from 'flowbite-react';
import HomeLayaut from '../../../layout/HomeLayaut';
import { HiMail, HiIdentification, HiTicket, HiPhone } from 'react-icons/hi';
import { RoundedFilledButton, RoundedOutlineButton } from '../../../components';
import { MdOutlineLogin } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SearchUserTickets = () => {
  const navigate = useNavigate();
  return (
    <HomeLayaut>
      <div className="container mx-auto px-4 py-8 dark:bg-gray-800">
        <div className="dark:bg-boxdark border border-stroke rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Columna del formulario */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Buscar mis tickets
              </h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="email" value="Email" />
                  <TextInput
                    id="email"
                    type="email"
                    icon={HiMail}
                    placeholder="nombre@ejemplo.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="dni" value="DNI" />
                  <TextInput
                    id="dni"
                    type="text"
                    icon={HiIdentification}
                    placeholder="Ingresa tu DNI"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="transaction"
                    value="Número de transacción (opcional)"
                  />
                  <TextInput
                    id="transaction"
                    type="text"
                    icon={HiTicket}
                    placeholder="Ej: TRX-123456"
                  />
                </div>
                <div className=" w-full">
                  <RoundedFilledButton
                    text="Buscar Tickets"
                    className="w-full"
                  />
                </div>
              </form>
            </div>

            {/* Columna de información */}
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Información</h2>
              <div className="prose prose-sm">
                <p className="text-gray-600">
                  <span className="font-bold">¿No encontrás tus tickets?</span>{' '}
                  Completá el formulario y los reenviaremos a tu correo. Nuestro
                  equipo de soporte está disponible para ayudarte.
                </p>

                <p className="mt-4">
                  También podés iniciar sesión o con tu correo de compra.
                  haciendo{' '}
                  <a href="#" className="text-primary hover:underline">
                    {' '}
                    click aquí
                  </a>
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <HiPhone className="text-primary-600 text-xl" />
                      <span>+51 123 456 789</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiMail className="text-primary-600 text-xl" />
                      <span>soporte@ejemplo.com</span>
                    </div>
                    <RoundedOutlineButton
                      text="Ingresar a mi cuenta"
                      className="w-full"
                      icon={MdOutlineLogin}
                      onClick={() => {
                        navigate('/auth/login');
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayaut>
  );
};

export { SearchUserTickets };
