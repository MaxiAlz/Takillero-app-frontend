import React, { ReactNode } from 'react';
import {
  MdOutlineLocationCity,
  MdDateRange,
  MdAccessTime,
  MdLocationOn,
} from 'react-icons/md';
import { formatDatoToLong, formatTime } from '../../helpers/formatDate';
import { RoundedFilledButton } from '../Buttons';
import { Card } from 'flowbite-react';
import { IoIosRocket } from 'react-icons/io';

interface EventHorizontalCardProps {
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

const EventHorizontalCard: React.FC<EventHorizontalCardProps> = ({
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
  return (
    <Card className="dark:bg-black w-full">
      <section className="flex flex-col md:flex-row gap-4">
        <div className="w-1/3">
          <img
            src={photo}
            alt="Foto Event"
            className="rounded-lg w-full h-full max-h-90 max-w-90 object-contain"
          />
        </div>

        {/* Información del Evento */}
        <div className="flex-1 ml-4">
          <div>
            <h1 className="font-semibold text-2xl text-black dark:text-white mb-2">
              {name}
            </h1>
            <p>{subtitle}</p>
          </div>

          <div className="mt-2">
            <div className="flex items-center text-primary mb-2">
              <IoIosRocket size={25} />
              <h2 className="font-semibold text-xl ">¿Cuando?</h2>
            </div>
            <div className="flex items-center ml-2">
              <MdDateRange size={18} />
              <p className="  text-gray-700 dark:text-gray-400 mr-2">
                {formatDatoToLong(date as Date)}
              </p>
            </div>
            <div className="flex items-center ml-2">
              <MdAccessTime size={18} />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Apertura de Puertas {formatTime(date)} Hs
              </p>
            </div>
          </div>

          <div className="mt-2">
            <h2 className="font-semibold text-xl text-primary mb-2">¿Donde?</h2>
            <div className="flex">
              <MdOutlineLocationCity size={25} />

              <p className="text-gray-700  dark:text-gray-400">
                Establecimiento: <span className="font-bold">{venue}</span>
              </p>
            </div>

            <div className="flex ">
              <MdLocationOn size={25} />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Dereccion: <span className="font-bold">{location} </span>
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

export { EventHorizontalCard };
