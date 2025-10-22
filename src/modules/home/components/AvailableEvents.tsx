import { alertBanners, EventCard } from '../../../components';
import Loader from '../../../components/Loader';
import { usePublicEvents } from '../hooks/usePublicEvents';

const AvailableEvents = () => {
  const availablePublicEvents = usePublicEvents();
  // TODO: implementar paginacion con scroll infinito
  return (
    <>
      <div className="mx-auto mt-5">
        <h4 className="m-4 text-black dark:text-white font-bold text-2xl ">
          Eventos en tendencia en tu zona:
        </h4>
      </div>
      <section className="mt-4 mb-20">
        {availablePublicEvents.publicEvents?.data.items.length === 0 && (
          <div>No hay eventos publicados actualmente...</div>
        )}
        {availablePublicEvents.publicEvents && (
          <div className="m-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {availablePublicEvents.publicEvents.data.items.map(
              (event, indx) => (
                <EventCard eventData={event} key={indx} />
              ),
            )}
          </div>
        )}
        {availablePublicEvents.isLoading && <Loader />}
        {availablePublicEvents.isError &&
          alertBanners.showErrorBanner({
            title: 'Error al cargar eventos disponibles',
          })}
        {/* {availablePublicEvents.publicEvents?.hasNextPage && (
          <div className="w-full flex justify-center my-10">
            <RoundedOutlineButton
              text="Cargar mas eventos"
              onClick={handleClickPaginate}
            />
          </div>
        )} */}
      </section>
    </>
  );
};

export { AvailableEvents };
