import { useEffect, useState } from 'react';
import {
  alertBanners,
  EventCard,
  RoundedOutlineButton,
} from '../../../components';
import Loader from '../../../components/Loader';
import { usePublicEvents } from '../hooks/usePublicEvents';

const AvailableEvents = () => {
  const [page, setPage] = useState(1);
  const [allEvents, setAllEvents] = useState<any[]>([]);

  const { publicEvents, isLoading, isError, isFetching } =
    usePublicEvents(page);

  useEffect(() => {
    if (publicEvents?.data?.items) {
      setAllEvents((prev) => [...prev, ...publicEvents.data.items]);
    }
  }, [publicEvents]);

  const handleLoadMore = () => {
    if (publicEvents?.data?.hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="mx-auto mt-5">
        <h4 className="m-4 text-black dark:text-white font-bold text-2xl ">
          Eventos en tendencia en tu zona:
        </h4>
      </div>
      <section className="mt-4 mb-20">
        {allEvents.length === 0 && !isLoading && (
          <div>No hay eventos publicados actualmente...</div>
        )}

        <div className="m-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {allEvents.map((event, indx) => (
            <EventCard eventData={event} key={indx} />
          ))}
        </div>

        {(isLoading || isFetching) && <Loader />}

        {isError &&
          alertBanners.showErrorBanner({
            title: 'Error al cargar eventos disponibles',
          })}

        {publicEvents?.data?.hasNextPage ? (
          <div className="w-full flex justify-center my-10">
            <RoundedOutlineButton
              text={isFetching ? 'Cargando...' : 'Cargar más eventos'}
              onClick={handleLoadMore}
            />
          </div>
        ) : (
          allEvents.length > 0 && (
            <div className="text-center my-10 text-gray-500">
              Has llegado al final de la lista de eventos.
            </div>
          )
        )}
      </section>
    </>
  );
};

export { AvailableEvents };
