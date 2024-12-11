import { GiCardExchange, GiReceiveMoney, GiTicket } from 'react-icons/gi';
import { PageTitle } from '../../../components';
import { APP_TEXT } from '../../../constants/text';
import HomeLayaut from '../../../layout/HomeLayaut';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import {
  MdCalendarMonth,
  MdOutlineInsertComment,
  MdPeopleAlt,
} from 'react-icons/md';
import { IoMdGlobe } from 'react-icons/io';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { CgSmartphoneChip } from 'react-icons/cg';

const AboutUs = () => {
  return (
    <>
      <PageTitle title="Sobre Nosotros" />
      <HomeLayaut>
        <HearoSectionDos />
        <InfoSection />
        <StatsSection />
        <KeyFeatures />
        <BannerToSellers />
      </HomeLayaut>
    </>
  );
};

export { AboutUs };

const HearoSectionDos = () => {
  const navigate = useNavigate();
  return (
    <section className="dark:bg-boxdark-2 h-full  dark:bg-gray-900 m-5">
      <div className="flex justify-evenly items-center">
        <div className="">
          <div className="flex items-center justify-start gap-3 mb-2">
            <BsFillRocketTakeoffFill size={40} className="text-primary" />
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              {APP_TEXT.app_name}
            </h2>
          </div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-boxdark md:text-5xl xl:text-6xl dark:text-white">
            Una Ventana a Todas tus Pasiones
          </h1>
          <p className="max-w-2xl  font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
            No vuelvas a perder nunca mas una oportunidad. Tus experiencias
            están a un clic de distancia.
          </p>
          <p className="font-bold text-primary mt-2 text-xl">
            ¡Descubre, accede y disfruta!
          </p>

          <button
            className="px-6 py-3 flex items-center mt-4 bg-black text-primary-900 font-semibold rounded-lg shadow-md hover:bg-primary  border-gray-300 border border-gray"
            onClick={() => navigate('/')}
          >
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

        <div className="w-80 hidden md:block">
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

const InfoSection = () => {
  return (
    <div
      className="relative p-5 h-full bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-evenly">
        {/* Imagen de la izquierda */}
        <section className="mb-8 lg:mb-0 lg:mr-8">
          <div className="w-80 mx-auto lg:w-full">
            <img
              src="https://images.pexels.com/photos/8680074/pexels-photo-8680074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="mockup"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Sección de texto e información */}
        <section className="flex flex-col items-center lg:items-start space-y-6 max-w-xl">
          {/* Título principal */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center lg:text-left">
            Más que Eventos, Una Experiencia Completa
          </h2>
          {/* Descripción principal */}
          <p className="text-center lg:text-left">
            Estamos transformando la manera en que te conectas con los eventos
            que realmente te importan. Nuestra misión es asegurarnos de que
            nunca te pierdas una experiencia inolvidable, gracias a una
            plataforma que combina innovación, personalización y accesibilidad.
          </p>
          {/* Cards de información */}
          <div className="space-y-6 w-full">
            {/* Card 1 */}
            <div className="dark:bg-boxdark shadow-md rounded-lg p-6 border hover:shadow-lg hover:cursor-pointer hover:border-primary hover:bg-gray-100">
              <h3 className="text-xl font-semibold text-primary">
                ¿Qué es {APP_TEXT.app_name}?
              </h3>
              <p>
                Somos tu compañero ideal para descubrir, planificar y disfrutar
                experiencias únicas. Desde conciertos y festivales hasta eventos
                deportivos y culturales, te ayudamos a encontrar lo que más te
                gusta, con recomendaciones hechas a tu medida.
              </p>
            </div>
            {/* Card 2 */}
            <div className="dark:bg-boxdark shadow-md rounded-lg p-6 border hover:shadow-lg hover:cursor-pointer hover:border-primary hover:bg-gray-100">
              <h3 className="text-xl font-semibold text-primary">
                Compromiso continuo
              </h3>
              <p>
                Escuchamos tus necesidades y mejoramos constantemente nuestra
                plataforma para ofrecerte la mejor experiencia.
              </p>
            </div>
            {/* Card 3 */}
            <div className="dark:bg-boxdark shadow-md rounded-lg p-6 border hover:shadow-lg hover:cursor-pointer hover:border-primary hover:bg-gray-100">
              <h3 className="text-xl font-semibold text-primary">
                Entendemos que cada persona y comunidad es única
              </h3>
              <p>
                Nos destacamos por ser un puente entre asistentes y
                organizadores, fomentando conexiones valiosas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      name: 'Eventos Publicados',
      value: '150+',
      icon: <MdCalendarMonth size={50} />,
    },
    {
      name: 'Usuarios Activos',
      value: '10,000+',
      icon: <MdPeopleAlt size={50} />,
    },
    {
      name: 'E-Tickets Otorgados',
      value: '50,000+',
      icon: <GiTicket size={50} />,
    },
    {
      name: 'Provincias Activas',
      value: '23',
      icon: <IoMdGlobe size={50} />,
    },
  ];

  return (
    <section className="w-full my-20 bg-gray-100  ">
      <div className="px-4 md:px-6">
        <h2 className="text-center my-12 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
          Nuestras Estadísticas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div className="flex flex-col items-center ">
              {stat.icon}
              <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
              <p className="text-xl text-muted-foreground text-center ">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KeyFeatures: React.FC = () => {
  const features = [
    {
      title: 'Recomendaciones Inteligentes',
      description:
        'Un algoritmo que analiza los gustos, intereses y ubicación del usuario para sugerir eventos relevantes.',
      example:
        'Un algoritmo que analiza los gustos, intereses y ubicación del usuario para sugerir eventos relevantes.',
      icon: CgSmartphoneChip,
    },
    {
      title: 'Agenda Personalizada',
      description: `Guarda los eventos que mas te interesan en una agenda dentro de ${APP_TEXT.app_name}`,
      example:
        ' "Agendaste el Concierto de Jazz el 15 de diciembre. ¡Recuerda que las puertas abren a las 19:00!"',
      icon: MdCalendarMonth,
    },
    {
      title: 'Gana Recompensas',
      description: `Acumula puntos y gana creditos para canjear en cada salida`,
      example:
        ' "Agendaste el Concierto de Jazz el 15 de diciembre. ¡Recuerda que las puertas abren a las 19:00!"',
      icon: GiReceiveMoney,
    },
    {
      title: 'Compra de E-tickets de manera Simplificada',
      description:
        'Compra entradas en pocos pasos y guárdalas en un lugar seguro dentro de la app.',
      example:
        'Tu entrada para el Teatro Colón está lista. Muéstrala en tu móvil al ingresar.',
      icon: GiTicket,
    },
    {
      title: '¿No puedes asistir o quieres hacer un regalo?',
      description:
        'Tranferí y regala E-tickes de manera simplificada con simples datos',
      example: 'Hey! Alguien te a tranferido una entrada',
      icon: GiCardExchange,
    },
    {
      title: 'Comparte y Da valor a nuestra comunidad',
      description:
        'Comparte reseñas y fotos de tu experiencia en los eventos que asistes, ayuda a los productores a mejorar constantemente',
      example: 'Hey! Alguien te a tranferido una entrada',
      icon: MdOutlineInsertComment,
    },
    {
      title: 'Pagos seguro',
      description:
        'Compra productos dentro de un evento a precios promocionales, y usa tu billetera integrada',
      example: 'Mearchandasing para este evento disponible',
      icon: MdOutlineInsertComment,
    },
    {
      title: 'Una billetera dentro de tu evento',
      description:
        'Carga credito en tu billetera integrada, descubre, accede y disfruta',
      example:
        'Has cargado dinero en tu cuenta, ya puedes comprar dentro del eventos',
      icon: MdOutlineInsertComment,
    },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Funcionalidades Clave
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="dark:bg-boxdark p-4 shadow-md rounded-lg"
            >
              <section className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center justify-center">
                  <feature.icon size={60} />
                </div>
                <div className="col-span-3">
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </section>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const BannerToSellers = () => {
  return (
    <div
      className="relative  h-full bg-cover bg-center text-white p-10"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/9493039/pexels-photo-9493039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <h1 className=" max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-boxdark md:text-5xl xl:text-6xl dark:text-white">
          ¿Eres productor de eventos?
        </h1>
        <p className="max-w-2xl  font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
          Creamos herramientas digitales para eventos, descubre como podemos
          trabajar juntos.
        </p>
        <p className="font-bold text-primary mt-2 text-xl">
          ¡Crea, trabaja y disfruta!
        </p>

        <button
          className="px-6 py-3 flex items-center mt-4 bg-black text-primary-900 font-semibold rounded-lg shadow-md hover:bg-primary  border-gray-300 border border-gray"
          // onClick={() => navigate('/')}
        >
          Quiero saber los beneficios para productores
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
    </div>
  );
};
