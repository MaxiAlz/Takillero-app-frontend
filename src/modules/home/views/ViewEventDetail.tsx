import { useParams } from 'react-router-dom';
import { alertBanners, PageTitle } from '../../../components';
import HomeLayaut from '../../../layout/HomeLayaut';
import { useGetPublicEventById } from '../hooks/useGetPublicEventById';
import Loader from '../../../components/Loader';
import { TicketsPourchaseTable } from '../components/TicketsPourchaseTable';
import { Avatar, Card } from 'flowbite-react';
import { MdLocationOn, MdOutlineLocationCity } from 'react-icons/md';
import { INFO_MESSAGES } from '../../../constants';
import EventInfoBanner from '../components/EventInfoBanner';

const ViewEventDetail = () => {
  const { eventId } = useParams();
  const { eventData, isLoading, isError } = useGetPublicEventById(+eventId!);


  console.log('eventData', eventData)
  return (
    <>
      <PageTitle title="Ver Evento | Bobby Hub " />
      <HomeLayaut>
        <main className="mx-auto px-4">
          {isLoading && <Loader />}
          {isError &&
            alertBanners.showErrorBanner({
              title: 'Error al cargar eventos disponibles',
            })}

          {eventData && (
            <>
              <section>
                <div className="w-full">
                  <img
                    src={eventData.verticalPhoto}
                    alt={`${eventData.verticalPhoto} banner cover`}
                    className="hidden sm:block inset-0 object-cover w-full h-100"
                  />
                  <img
                    src={eventData.photo}
                    alt={`${eventData.photo} banner cover`}
                    className="block sm:hidden inset-0 object-cover w-full h-100"
                  />
                </div>
              </section>
             
              <EventInfoBanner eventData={eventData} />

              <section className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-10 ">
                {/* Columna de izquierda */}
                <div className="col-span-2">
                  <TicketsPourchaseTable tickets={eventData.ticketTypes} />
                  <Card className="w-full dark:bg-boxdark">
                    <h2 className="font-bold text-xl ">Descripción General:</h2>
                    <p>{eventData.description}</p>
                    <div>
                      <div className="mt-4 p-4 bg-gray-100 dark:bg-meta-4 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Aviso Importante:</span>{' '}
                          {INFO_MESSAGES.DESCRIPCTION_WARNING_TEXT}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="w-full mt-5 dark:bg-boxdark">
                    <h2 className="font-bold text-xl mb-2">
                      Mapa de ubicación:
                    </h2>
                    <div className="">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0921302555444!2d-65.78878902475475!3d-28.476771960362957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9424295c6a04f6c3%3A0xea849c1fd25961a2!2sNodo%20tecnol%C3%B3gico-%20Catamarca%20Capital!5e0!3m2!1ses!2sar!4v1732314167397!5m2!1ses!2sar"
                        className="w-full h-[300px]"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </Card>
                </div>
                {/* Columna de derecha */}
                <div className="hidden lg:block">
                  <Card className="max-w-sm dark:bg-boxdark">
                    <h2 className="font-semibold text-xl text-primary">
                      Donde se realiza este evento:
                    </h2>
                    <div className="flex">
                      <MdOutlineLocationCity size={30} />

                      <p className="text-gray-700  dark:text-gray-400">
                        Establecimiento:{' '}
                        <span className="font-bold">{eventData.venue}</span>
                      </p>
                    </div>

                    <div className="flex ">
                      <MdLocationOn size={30} />
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Dereccion:{' '}
                        <span className="font-bold">{eventData.location} </span>
                      </p>
                    </div>
                  </Card>

                  <Card className="max-w-sm dark:bg-boxdark mt-5">
                    <h2 className="font-semibold text-xl">
                      Productor del Evento
                    </h2>
                    <div className="flex flex-col items-center justify-center ">
                      <div className=" rounded-full bg-gray-300  ">
                        <Avatar rounded className="w-full" />
                      </div>
                      <p className="text-lg font-semibold text-gray-700 mt-5 dark:text-gray-200 mb-4">
                        {'Nombre de usuario productor'}
                      </p>
                      <button className="text-primary px-4 py-2 rounded-lg hover:text-opacity-80 transition-colors">
                        Ver más eventos de este productor
                      </button>
                    </div>
                  </Card>
                </div>
              </section>

              <section></section>
            </>
          )}
        </main>
      </HomeLayaut>
    </>
  );
};

export { ViewEventDetail };
