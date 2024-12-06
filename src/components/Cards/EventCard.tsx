import {
  MdAccessTime,
  MdDateRange,
  MdLocationOn,
  MdOutlineLocationCity,
  MdShare,
} from 'react-icons/md';

import { formatDate, formatTime } from '../../helpers/formatDate';
import { RoundedFilledButton } from '../Buttons';
import { EventItem } from '../../modules/home/types/homeTypes';
import { useNavigate } from 'react-router-dom';
import { formatUrlToString } from '../../helpers';
import { useCopyLinkToClipboard } from '../../hooks/useCopyLinkToClipboard';
import FavoriteButton from '../Buttons/FaovoriteButton';

interface EventCardProps {
  eventData: EventItem;
}
const EventCard = ({ eventData }: EventCardProps) => {
  const navigate = useNavigate();
  const { copyLink } = useCopyLinkToClipboard();

  const handleClick = (eventName: string, eventId: number) => {
    const nameFormated = formatUrlToString(eventName);
    navigate(`/${nameFormated}/${eventId}`);
  };

  return (
    <div
      className="grid grid-cols-1 dark:bg-boxdark-2 bg-slate-200 rounded-lg border shadow-md shadow-black hover:shadow-primary overflow-hidden transition-shadow"
      key={eventData.id}
    >
      {/* Imagen */}
      <div
        className="relative w-full aspect-square bg-slate-500 hover:cursor-pointer"
        onClick={() => handleClick(eventData.name, eventData.id)}
      >
        <img
          src={eventData.photo}
          alt={`${eventData.name} photo`}
          className="absolute inset-0 object-contain w-full h-full bg-gray-100"
        />
      </div>
      {/* Detalles */}
      <div
        className="p-4 flex flex-col gap-2 hover:cursor-pointer"
        onClick={() => handleClick(eventData.name, eventData.id)}
      >
        <h6 className="text-lg font-bold text-black dark:text-white">
          {eventData.name}
        </h6>
        {/* <p className="text-sm text-gray-700 dark:text-gray-400 hidden md:block">
          {eventData.subtitle}
        </p> */}

        <div className="mt-2 flex flex-col gap-1">
          {/* Fecha y hora */}
          <div className="flex items-center gap-2">
            <MdDateRange size={18} />
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {formatDate(eventData.date)}
            </p>
            <MdAccessTime size={18} />
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {formatTime(eventData.date)}
            </p>
          </div>
          {/* Lugar */}
          <div className="flex items-center gap-2">
            <MdOutlineLocationCity size={18} />
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {eventData.venue}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationOn size={18} />
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {eventData.location}
            </p>
          </div>
        </div>
      </div>
      {/* Botones */}
      <div className="flex items-center gap-2 mb-2 ml-2">
        <RoundedFilledButton
          text={
            eventData.minimumPrice === 0
              ? 'Evento ¡Gratuito!'
              : `Desde $${eventData.minimumPrice}`
          }
          onClick={() => handleClick(eventData.name, eventData.id)}
        />
        <div className="flex items-center gap-1">
          <FavoriteButton />
          <button
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:text-primary"
            onClick={copyLink}
          >
            <MdShare size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export { EventCard };
