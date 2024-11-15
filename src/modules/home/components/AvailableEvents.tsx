import { Card } from 'flowbite-react';
import {
  IconRoundedOutlineButton,
  RoundedFilledButton,
} from '../../../components';
import {
  MdAccessTime,
  MdDateRange,
  MdFavoriteBorder,
  MdLocationOn,
  MdOutlineLocationCity,
  MdShare,
} from 'react-icons/md';
import { usePublicEvents } from '../hooks/usePublicEvents';
import { formatDate, formatTime } from '../../../helpers/formatDate';

const AvailableEvents = () => {
  const availablePublicEvents = usePublicEvents();

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
      <section className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          {availablePublicEvents.publicEvents?.items.map((event, index) => (
            <div className="m-5 " key={index}>
              <Card
                className="max-w-xs p-2 gap-0 dark:bg-boxdark-2"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={event.photo}
              >
                <h6 className="text-xl font-bold tracking-tight text-black-900 dark:text-white">
                  {event.name}
                </h6>
                <div className="flex items-center">
                  <MdDateRange size={18} />
                  <p className="font-normal text-gray-700 dark:text-gray-400 mr-2">
                    {formatDate(event.date)}
                  </p>
                  <MdAccessTime size={18} />
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {formatTime(event.date)}
                  </p>
                </div>
                <div className="flex items-center">
                  <MdOutlineLocationCity size={18} />
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Club Paraguay
                  </p>
                </div>

                <div className="flex items-center">
                  <MdLocationOn size={18} />
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Av. MArcelo T de Alvear 1523
                  </p>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {event.description}
                </p>
                <div className="flex items-center justify-around">
                  <RoundedFilledButton
                    text={
                      event.minimumPrice === 0
                        ? 'Evento ¡Gratuito!'
                        : `comprar por $ ${event.minimumPrice}`
                    }
                  />
                  <IconRoundedOutlineButton
                    icon={<MdFavoriteBorder size={20} color="orange" />}
                  />
                  <IconRoundedOutlineButton
                    icon={<MdShare size={20} color="orange" />}
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export { AvailableEvents };
