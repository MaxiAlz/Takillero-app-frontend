import { PageTitle, RoundedFilledButton } from '../../../components';
import { APP_TEXT } from '../../../constants/text';
import HomeLayaut from '../../../layout/HomeLayaut';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
const AboutUs = () => {
  return (
    <>
      <PageTitle title="Sobre Nosotros" />
      <HomeLayaut>
        <HearoSectionDos />
        <div className="bg-gray-50 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Sobre Nosotros
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                En{' '}
                <span className="font-semibold text-primary">
                  {APP_TEXT.app_name}
                </span>
                , redefinimos cómo las personas descubren, acceden y disfrutan
                de eventos en su zona.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="dark:bg-boxdark shadow-md rounded-lg p-6 border hover:shadow-lg hover:cursor-pointer hover:border-primary hover:bg-gray-100">
                <h3 className="text-xl font-semibold text-primary">
                  ¿Qué es {APP_TEXT.app_name}?
                </h3>
                <p className="mt-2 text-gray-600">
                  {APP_TEXT.app_name} es una plataforma que centraliza
                  información de eventos y brinda a los usuarios acceso a
                  beneficios exclusivos, convirtiendo cada compra en una
                  experiencia única.
                </p>
              </div>
              <div className="dark:bg-boxdark shadow-md rounded-lg p-6 border hover:shadow-lg hover:cursor-pointer hover:border-primary hover:bg-gray-100">
                <h3 className="text-xl font-semibold text-primary">
                  Características Principales
                </h3>
                <ul className="list-disc ml-4 mt-2 text-gray-600">
                  <li>Descubrimiento local de eventos.</li>
                  <li>Compra rápida y almacenamiento de entradas.</li>
                  <li>Descuentos y promociones exclusivas.</li>
                  <li>Notificaciones para eventos favoritos.</li>
                </ul>
              </div>
              <div className="dark:bg-boxdark shadow-md rounded-lg p-6 border hover:shadow-lg hover:cursor-pointer hover:border-primary hover:bg-gray-100">
                <h3 className="text-xl font-semibold text-primary">
                  Beneficios para Organizadores
                </h3>
                <p className="mt-2 text-gray-600">
                  Proveemos herramientas de marketing que ayudan a los
                  organizadores a maximizar la visibilidad de sus eventos y
                  atraer más público con promociones exclusivas.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="bg-primary text-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold">
                  ¿Por qué elegir {APP_TEXT.app_name}?
                </h2>
                <ul className="list-disc mt-4 ml-6 text-lg">
                  <li>
                    Centralización de experiencias: eventos, descuentos y
                    beneficios en un solo lugar.
                  </li>
                  <li>Fidelización a través de promociones y recompensas.</li>
                  <li>Expansión de alcance para organizadores.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Únete a nosotros y vive una experiencia única
              </h2>
              <p className="mt-4 text-gray-600">
                Descubre lo mejor de los eventos en tu zona con{' '}
                <span className="text-primary font-semibold">
                  {APP_TEXT.app_name}
                </span>
                .
              </p>
              <div className="mt-6 flex justify-center">
                <RoundedFilledButton text=" Más Información" />
              </div>
            </div>
          </div>
        </div>
      </HomeLayaut>
    </>
  );
};

export { AboutUs };

const HearoSectionDos = () => {
  return (
    <section className="dark:bg-boxdark-2 h-full bg-white dark:bg-gray-900">
      <div className="flex justify-evenly items-center">
        <div className=" ">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
            <BsFillRocketTakeoffFill size={40} className="text-primary" />
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              {APP_TEXT.app_name}
            </h2>
          </div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {/* Plataforma Lider para gestion de eventos */}
            Herramientas digitales para eventos
          </h1>
          <p className="max-w-2xl  font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
            No vuelvas a perder nunca mas una oportunidad. Tus experiencias
            están a un clic de distancia.
          </p>
          <p className="font-bold text-primary mt-2 text-xl">
            ¡Descubre, accede y disfruta!
          </p>

          <button className="px-6 py-3 flex items-center mt-4 bg-black text-primary-900 font-semibold rounded-lg shadow-md hover:bg-primary  border-gray-300 border border-gray">
            Descubrir Eventos
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="w-80">
          {/* <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          /> */}
          <img
            src="https://images.pexels.com/photos/8973480/pexels-photo-8973480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-boxdark to-primary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Logo e Información */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <BsFillRocketTakeoffFill size={40} className="text-primary" />
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              {APP_TEXT.app_name}
            </h1>
          </div>
          <p className="mt-6 text-lg sm:text-xl text-gray-200">
            Descubre, accede y disfruta de eventos como nunca antes. Con{' '}
            <span className="font-bold text-xl text-boxdark-2">
              {APP_TEXT.app_name}
            </span>
            , tus experiencias están a un clic de distancia.
          </p>
          <ul className="mt-6 text-lg sm:text-xl list-disc list-inside text-gray-200">
            <li>Compra rápida y sencilla de entradas.</li>
            <li>Beneficios exclusivos y descuentos únicos.</li>
            <li>Acceso digital seguro y sin complicaciones.</li>
          </ul>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 bg-black text-primary-900 font-semibold rounded-lg shadow-md hover:bg-primary">
              Explorar Eventos
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary">
              Más Información
            </button>
          </div>
        </div>

        {/* Imagen o Ilustración */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-primary rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-10 -right-10 w-80 h-80 bg-primary rounded-full blur-3xl opacity-50"></div>
          <img
            src="https://img.freepik.com/vector-gratis/composicion-cohete-moderno-dibujado-mano_23-2147900237.jpg?t=st=1733181000~exp=1733184600~hmac=feb13053fe3d97688ea875aa0334e5bc157e0462fd986810c408bbeedb9b2713&w=740" // Reemplaza por la imagen deseada
            alt="Ilustración de eventos"
            className="relative z-10 w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
