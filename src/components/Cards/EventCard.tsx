import {
  MdDateRange,
  MdLocationOn,
} from 'react-icons/md';

import { RoundedFilledButton } from '../Buttons';
import { EventItem } from '../../modules/home/types/homeTypes';
import { useNavigate } from 'react-router-dom';
import { formatUrlToString } from '../../helpers';
import { formatSpanishDate } from '../../helpers/formatDate';

interface EventCardProps {
  eventData: EventItem;
}


const EventCard = ({ eventData }: EventCardProps) => {
  const navigate = useNavigate();

  const handleClick = (eventName: string, eventId: number) => {
    const nameFormated = formatUrlToString(eventName);
    navigate(`/${nameFormated}/${eventId}`);
  };

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-1 md:max-w-sm dark:bg-boxdark-2 bg-slate-200 rounded-lg border shadow-md shadow-black hover:shadow-primary overflow-hidden transition-shadow"
      key={eventData.id}
    >
      {/* Imagen */}
      <div
        className="relative w-full aspect-square bg-slate-300 dark:bg-slate-600 hover:cursor-pointer flex items-center justify-center"
        onClick={() => handleClick(eventData.name, eventData.id)}
      >
        <img
          src={eventData.photo || '/placeholder.svg'}
          alt={`${eventData.name} photo`}
          className="max-w-full max-h-full object-contain"
        />
        {eventData.state && (
          <span className="absolute top-2 left-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white shadow-md">
            {eventData.state}
          </span>
        )}
      </div>
      {/* Detalles */}

      <div
        className="p-3 md:p-4 flex flex-col justify-between hover:cursor-pointer"
        onClick={() => handleClick(eventData.name, eventData.id)}
      >
        {/* Contenido arriba */}
        <div className="grid grid-cols-1 gap-2">
          <h6 className="text-sm md:text-lg font-bold text-black dark:text-white line-clamp-2">
            {eventData.name}
          </h6>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 md:gap-2">
              <MdDateRange
                size={16}
                className="md:w-[18px] md:h-[18px] flex-shrink-0 text-primary"
              />
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 truncate">
                {formatSpanishDate(eventData.date)}
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <MdLocationOn
                size={16}
                className="md:w-[18px] md:h-[18px] flex-shrink-0 text-primary"
              />
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 truncate">
                {eventData.venue}
              </p>
            </div>
          </div>
        </div>

        {/* Botones siempre abajo */}
        <div className="grid gap-1 md:gap-2 mt-2">
          <RoundedFilledButton
            className="text-xs md:text-base"
            text={
              eventData.minimumPrice === 0
                ? '¡Evento Gratis!'
                : `Desde: $${eventData.minimumPrice}`
            }
            onClick={() => handleClick(eventData.name, eventData.id)}
          />
        </div>
      </div>
    </div>
  );
};

export { EventCard };
