import { useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { RoundedFilledButton, RoundedOutlineButton } from '../Buttons';

const Navbar = () => {
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

          {/* Buscador */}
          <div className="relative flex items-center space-x-2">
            {/* Input de ubicación */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <span className="material-icons">
                  <LocationOnIcon />
                </span>
              </span>
              <input
                type="text"
                placeholder="Ubicación"
                className="pl-10 border border-gray-300 rounded-full py-2 px-4 w-48 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-primary"
              />
            </div>

            {/* Input de búsqueda */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <span className="material-symbols-outlined">
                  <SearchIcon />
                </span>
              </span>
              <input
                type="text"
                placeholder="Buscar entradas"
                className="pl-10 border border-gray-300 rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-primary"
              />
            </div>
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
        <div className="flex items-center space-x-4">
          <Link to="">
            <RoundedOutlineButton text="Registrarse" />
          </Link>
          <Link to={'/login'}>
            <RoundedFilledButton text="Iniciar sesion" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
