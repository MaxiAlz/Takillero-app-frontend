import { Banner, Card, Carousel } from 'flowbite-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import {
  IconRoundedOutlineButton,
  RoundedFilledButton,
  RoundedOutlineDarckButton,
} from '../../../components/Buttons';
import FooterCustom from '../../../components/Navbar/Footer';
import { PageTitle } from '../../../components';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeLayaut from '../../../layout/HomeLayaut';
// import { useEvents } from '../../events';

const HomePage = () => {
  // const { isLoading, avents, error, isFetching } = useEvents();

  // console.log('events', avents.items);
  return (
    <>
      <PageTitle title="Inicio | Bobby Hub " />
      <HomeLayaut>
        <main className="dark:bg-boxdark">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-5 mx-5 ">
            <Carousel pauseOnHover>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>

          {/* <div>
            {isLoading && <span>Cargando eventos de verdad...</span>}
            <div>
              Eventos disponibles:
              {avents.length}
            </div>
          </div> */}
          <div className="flex items-center justify-evenly">
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
          {/* Carrusell de categorias */}
          <div className="flex h-20">
            <Carousel indicators={false} leftControl="<" rightControl={' '}>
              <div className="flex w-full  px-20 justify-evenly">
                <RoundedOutlineDarckButton text="Musica" />
                <RoundedOutlineDarckButton text="Networking" />
                <RoundedOutlineDarckButton text="Gastronomia" />
                <RoundedOutlineDarckButton text="Teatro" />
                <RoundedOutlineDarckButton text="Cine" />
                <RoundedOutlineDarckButton text="Empresas" />
                <RoundedOutlineDarckButton text="Deportes" />
                <RoundedOutlineDarckButton text="Musica" />
                <RoundedOutlineDarckButton text="Empresas" />
                <RoundedOutlineDarckButton text="Deportes" />
                <RoundedOutlineDarckButton text="Musica" />
              </div>
              <div className="flex w-full  px-20 justify-evenly">
                <RoundedOutlineDarckButton text="Musica" />
                <RoundedOutlineDarckButton text="Networking" />
                <RoundedOutlineDarckButton text="Gastronomia" />
                <RoundedOutlineDarckButton text="Teatro" />
                <RoundedOutlineDarckButton text="Cine" />
                <RoundedOutlineDarckButton text="Empresas" />
                <RoundedOutlineDarckButton text="Deportes" />
                <RoundedOutlineDarckButton text="Musica" />
                <RoundedOutlineDarckButton text="Empresas" />
                <RoundedOutlineDarckButton text="Deportes" />
                <RoundedOutlineDarckButton text="Musica" />
              </div>
            </Carousel>
          </div>
          {/* Titulo de coso */}
          <div className="flex ml-20 my-5">
            <h4 className=" text-black dark:text-white font-bold text-2xl ">
              Eventos en tendencia en tu zona:
            </h4>
            <h4 className=" text-primary font-bold text-2xl">
              Ubicacion del usuario
            </h4>
          </div>
          {/* cards */}
          <section className="flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center">
              {[100, 200, 100, 100, 100, 100, 551].map((element, index) => (
                <div className="m-5 " key={index}>
                  <Card
                    className="max-w-xs p-2 gap-0 dark:bg-boxdark-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://imagenes.alpogo.com/eventos/alta_evento_1725450908_66d84a9c15273.jpg"
                  >
                    <h6 className="text-xl font-bold tracking-tight text-black-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h6>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <div>
                      <IconRoundedOutlineButton icon={<FavoriteBorderIcon />} />
                      <IconRoundedOutlineButton icon={<ShareIcon />} />
                      <RoundedFilledButton text={`comprar por $ ${element}`} />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>
          <Banner className="mx-20 my-10 shadow-lg border  rounded-xl">
            <div className="flex w-full flex-col justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 md:flex-row">
              <div className="mb-4 md:mb-0 md:mr-4">
                <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                  Queremos conocerte, para personalizar tus busquedas
                </h2>
                <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  Seleccioná tus intereses para recibir sugerencias de eventos
                  basadas en lo que más te gusta
                </p>
              </div>
              <div>
                <RoundedFilledButton
                  text="Agrear a mi perfil"
                  icon={<ArrowForwardIcon />}
                />
              </div>
            </div>
            <div className="m-5">
              <RoundedOutlineDarckButton text="Musica" />
              <RoundedOutlineDarckButton text="Networking" />
              <RoundedOutlineDarckButton text="Gastronomia" />
              <RoundedOutlineDarckButton text="Teatro" />
              <RoundedOutlineDarckButton text="Cine" />
              <RoundedOutlineDarckButton text="Empresas" />
              <RoundedOutlineDarckButton text="Deportes" />
              <RoundedOutlineDarckButton text="Musica" />
              <RoundedOutlineDarckButton text="Empresas" />
              <RoundedOutlineDarckButton text="Deportes" />
              <RoundedOutlineDarckButton text="Musica" />
              <RoundedOutlineDarckButton text="Musica" />
              <RoundedOutlineDarckButton text="Networking" />
              <RoundedOutlineDarckButton text="Gastronomia" />
              <RoundedOutlineDarckButton text="Teatro" />
              <RoundedOutlineDarckButton text="Cine" />
              <RoundedOutlineDarckButton text="Empresas" />
              <RoundedOutlineDarckButton text="Deportes" />
              <RoundedOutlineDarckButton text="Musica" />
              <RoundedOutlineDarckButton text="Empresas" />
              <RoundedOutlineDarckButton text="Deportes" />
              <RoundedOutlineDarckButton text="Musica" />
            </div>
          </Banner>

          <div className="flex ml-20 my-5">
            <h4 className=" text-black font-bold text-2xl ">Descuentos</h4>
            <h4 className=" text-primary font-bold text-2xl">
              Exclusivos para clientes
            </h4>
          </div>
          <div className="flex justify-center flex-wrap">
            {[100, 200, 100, 100, 100, 100, 551].map((element, index) => (
              <div className="m-5 " key={index}>
                <Card
                  className="max-w-xs p-2 gap-0 dark:bg-boxdark-2"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="https://norteticket.com/media/imagenes_eventos/home/2024/08/1080_x_1080_13_Septiembre_Gualeguaych%C3%BA_copia_1.jpg"
                >
                  <h6 className="text-xl font-bold tracking-tight text-black-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h6>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <RoundedFilledButton text={`comprar por $ ${element}`} />
                </Card>
              </div>
            ))}
          </div>
          <FooterCustom />
        </main>
      </HomeLayaut>
    </>
  );
};

export default HomePage;
