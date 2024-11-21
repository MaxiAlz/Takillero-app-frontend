import {
  alertBanners,
  EventCard,
  RoundedOutlineButton,
} from '../../../components';
import Loader from '../../../components/Loader';
import { usePublicEvents } from '../hooks/usePublicEvents';

const AvailableEvents = () => {
  const availablePublicEvents = usePublicEvents();

  const handleClickPaginate = () => {};
  console.log('availablePublicEvents :>> ', availablePublicEvents);
  return (
    <>
      <div className="flex ml-20 my-5">
        <h4 className=" text-black dark:text-white font-bold text-2xl ">
          Eventos en tendencia en tu zona:
        </h4>
        <h4 className=" text-primary font-bold text-2xl">
          Ubicacion del usuario
        </h4>
      </div>
      <section className="my-auto">
        {availablePublicEvents.publicEvents && (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center">
            {availablePublicEvents.publicEvents?.items.map((event, indx) => (
              <EventCard eventData={event} key={indx} />
            ))}
          </div>
        )}
        {availablePublicEvents.isLoading && <Loader />}
        {availablePublicEvents.isError &&
          alertBanners.showErrorBanner({
            title: 'Error al cargar eventos disponibles',
          })}
        <div className="w-full flex justify-center">
          <RoundedOutlineButton
            text="Cargar mas eventos"
            onClick={handleClickPaginate}
          />
        </div>
      </section>
    </>
  );
};

export { AvailableEvents };
