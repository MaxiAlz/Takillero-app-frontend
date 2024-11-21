import { useParams } from 'react-router-dom';
import { alertBanners, PageTitle } from '../../../components';
import HomeLayaut from '../../../layout/HomeLayaut';
import { useGetPublicEventById } from '../hooks/useGetPublicEventById';
import Loader from '../../../components/Loader';
import { TicketsPourchaseTable } from '../components/TicketsPourchaseTable';
import { Card } from 'flowbite-react';
import {
  MdAccessTime,
  MdDateRange,
  MdLocationOn,
  MdOutlineLocationCity,
} from 'react-icons/md';
import { formatDate, formatTime } from '../../../helpers';
import { formatDatoToLong } from '../../../helpers/formatDate';

const ViewEventDetail = () => {
  const { eventId } = useParams();
  const { eventData, isLoading, isError } = useGetPublicEventById(+eventId!);

  console.log('eventData :>> ', eventData);
  return (
    <>
      <PageTitle title="Ver Evento | Bobby Hub " />
      <HomeLayaut>
        <main>
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
                    className=" inset-0 object-contain w-full h-full "
                  />
                </div>
              </section>

              <section className="w-full grid grid-cols-3 border my-5 p-5 rounded-xl">
                <div className="">
                  <h1 className="font-semibold text-2xl text-black dark:text-white">
                    {eventData.name}
                  </h1>
                  <p>{eventData.subtitle}</p>
                </div>

                {/* Información del Evento */}
                <div className="">
                  <h2 className="font-semibold text-xl text-black dark:text-white">
                    Activa esta fecha
                  </h2>
                  <div className="flex items-center">
                    <MdDateRange size={18} />
                    <p className="  text-gray-700 dark:text-gray-400 mr-2">
                      {formatDatoToLong(eventData.date)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <MdAccessTime size={18} />
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Apertura de Puertas {formatTime(eventData.date)} Hs
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-xl text-black dark:text-white">
                    En este lugar:
                  </h2>
                  <div className="flex items-center">
                    <MdOutlineLocationCity size={30} />
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {eventData.venue}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <MdLocationOn size={30} />
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {eventData.location}
                    </p>
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-2 gap-4">
                <TicketsPourchaseTable tickets={eventData.ticketTypes} />
                <Card href="#" className="max-w-sm">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </section>
            </>
          )}
        </main>
      </HomeLayaut>
    </>
  );
};

export { ViewEventDetail };
