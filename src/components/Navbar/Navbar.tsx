import { Link } from 'react-router-dom';
import DropdownUser from '../Header/DropdownUser';
import DarkModeSwitcher from '../Header/DarkModeSwitcher';
import { APP_TEXT } from '../../common/text';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { AuthStatus } from '../../modules/Auth/types/authTypes';

interface NavbarPorps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const Navbar = (props: NavbarPorps) => {
  const { user, status } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
        <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
          <div className="flex items-center gap-2 sm:gap-4 md:hidden">
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && '!w-full delay-300'
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && 'delay-400 !w-full'
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && '!w-full delay-500'
                    }`}
                  ></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && '!h-0 !delay-[0]'
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && '!h-0 !delay-200'
                    }`}
                  ></span>
                </span>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}

            <Link to={'/'} className="text-primary font-semibold uppercase ">
              {APP_TEXT.app_name}
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="relative flex">
              <div className="flex">
                <Link
                  to={'/'}
                  className="text-primary font-semibold uppercase mx-2"
                >
                  {APP_TEXT.app_name}
                </Link>
                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="/eventos"
                      className="text-gray-800 hover:text-primary"
                    >
                      Eventos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contacto"
                      className="text-gray-800 hover:text-primary"
                    >
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
            </div>
          </div>

          <div className="flex items-center gap-3 2xsm:gap-7">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              {/* <!-- Dark Mode Toggler --> */}
              <DarkModeSwitcher />
              {/* <!-- Dark Mode Toggler --> */}
            </ul>

            {/* <!-- User Area --> */}
            {!!user && status === AuthStatus.AUTHENTICATED && <DropdownUser />}
            {/* <!-- User Area --> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
