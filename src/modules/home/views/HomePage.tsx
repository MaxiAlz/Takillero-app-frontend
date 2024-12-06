import { Banner, Card } from 'flowbite-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  RoundedFilledButton,
  RoundedOutlineDarckButton,
} from '../../../components/Buttons';
import { PageTitle } from '../../../components';
import HomeLayaut from '../../../layout/HomeLayaut';
import { FilterSection } from '../components/FilterSection';
import { CarrouselSection } from '../components/CarrouselSection';
import { AvailableEvents } from '../components/AvailableEvents';

const HomePage = () => {
  return (
    <>
      <PageTitle title="Inicio" />
      <HomeLayaut>
        <main className="">
          <section className="lg:mx-20 md:mx-5">
          <CarrouselSection />
            <FilterSection />
            <AvailableEvents />
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
              <div className="m-5" key={index}>
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
        </main>
      </HomeLayaut>
    </>
  );
};

export { HomePage };
