import React, { ReactNode } from 'react';
import {
  MdOutlineLocationCity,
  MdDateRange,
  MdAccessTime,
  MdLocationOn,
} from 'react-icons/md';
import { formatDate, formatTime } from '../../helpers/formatDate';
import { RoundedFilledButton } from '../Buttons';
import { Card } from 'flowbite-react';

interface EventCardProps {
  photo: string;
  name: string;
  subtitle: string;
  venue: string;
  date: Date | string;
  location: string;
  onEdit?: () => void;
  textButton?: string;
  iconButton?: ReactNode;
}

const EventCard: React.FC<EventCardProps> = ({
  photo,
  name,
  subtitle,
  venue,
  date,
  location,
  onEdit,
  textButton,
  iconButton,
}) => {
  // const navigate = useNavigate();

  return (
    <Card className="dark:bg-black">
      <section className="flex flex-col md:flex-row gap-4">
        <div className="w-1/3">
          <img src={photo} alt="Foto Event" className="rounded-lg" />
        </div>

        {/* Información del Evento */}
        <div className="flex-1 ml-4">
          <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 my-2">
              {subtitle}
            </p>
          </div>

          <div>
            <div className="flex items-center">
              <MdOutlineLocationCity size={18} />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {venue}
              </p>
            </div>
            <div className="flex items-center">
              <MdDateRange size={18} />
              <p className="font-normal text-gray-700 dark:text-gray-400 mr-2">
                {formatDate(date)}
              </p>
              <MdAccessTime size={18} />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {formatTime(date)}
              </p>
            </div>
            <div className="flex items-center">
              <MdLocationOn size={18} />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {location}
              </p>
            </div>
          </div>

          {onEdit && (
            <div className="flex w-full justify-end mt-4">
              <RoundedFilledButton
                onClick={onEdit}
                text={textButton}
                icon={iconButton}
              />
            </div>
          )}
        </div>
      </section>
    </Card>
  );
};

export default EventCard;
