import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { RoundedFilledButton, RoundedOutlineButton } from '../Buttons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { AuthStatus } from '../../modules/Auth/types/authTypes';

const Navbar = () => {
  const { user, status } = useSelector((state: RootState) => state.auth);

  console.log('userData', user);
  console.log('status', status);

  const navbar = useRef<any>(null);
  return (
    <nav ref={navbar} className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Sección izquierda: Logo, buscador, y items */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-lg font-bold">
            <Link to={'/'} className="text-primary font-semibold uppercase ">
              ShowBenefy
            </Link>
          </div>

          {/* Items de navegación */}
          <ul className="flex space-x-6">
            <li>
              <a href="/eventos" className="text-gray-800 hover:text-primary">
                Eventos
              </a>
            </li>
            <li>
              <a href="/contacto" className="text-gray-800 hover:text-primary">
                Contacto
              </a>
            </li>
            <li>
              <a
                href="/sobre-nosotros"
                className="text-gray-800 hover:text-primary"
              >
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </div>

        {/* Sección derecha: Botones de registro e ingreso */}

        {status == AuthStatus.AUTHENTICATED ? (
          <span className="text-white uppercase font-bold">
            usuario: {user?.name}
          </span>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to={'auth/register'}>
              <RoundedOutlineButton text="Registrarse" />
            </Link>
            <Link to={'auth/login'}>
              <RoundedFilledButton text="Iniciar sesion" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
