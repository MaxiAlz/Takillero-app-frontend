import { Card } from 'flowbite-react';
import { formatDateShortWithMonth } from '../../helpers/formatDate';
import {
  MdDateRange,
  MdEventAvailable,
  MdLocationOn,
  MdOutlineMotionPhotosPaused,
  MdSell,
} from 'react-icons/md';
import { CardDataStats } from './CardDataStats';
import { EventDashboardData } from '../../modules/events';

interface CardHeaderTicketsProps {
  photo: string;
  name: string;
  subtitle: string;
  date: Date | string;
  location: string;
  ticketsInfo: EventDashboardData;
}
const CardHeaderTickets = ({
  photo,
  name,
  subtitle,
  date,
  location,
  ticketsInfo,
}: CardHeaderTicketsProps) => {
  return (
    <Card className="dark:bg-black w-full">
      <section className="flex flex-col md:flex-row gap-4">
        {/* Imagen */}
        <div className="flex-shrink-0 md:w-1/3">
          <img
            src={photo}
            alt="Foto Event"
            className="rounded-lg w-full h-auto max-h-60 object-contain md:max-h-90"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-around md:w-2/3">
          <div>
            <h1 className="font-semibold text-xl md:text-2xl text-black dark:text-white">
              {name}
            </h1>
            <p className="text-sm md:text-base">{subtitle}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-3">
              <div className="flex items-center">
                <MdDateRange size={18} className="text-primary mr-1" />
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  {formatDateShortWithMonth(date as Date)}
                </p>
              </div>
              <div className="flex items-center">
                <MdLocationOn size={20} className="text-primary mr-1" />
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  <span className="font-bold">{location}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Cards estadísticas */}
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <CardDataStats
              title="Total"
              total={`${ticketsInfo.totalTicketsSold}`}
              subtitle="Total tickes ventidos"
            >
              <MdSell />
            </CardDataStats>

            <CardDataStats
              title="Activos"
              total="5"
              subtitle="Tipos de tickets en venta"
            >
              <MdEventAvailable />
            </CardDataStats>

            <CardDataStats
              title="Inactivas"
              total="2"
              subtitle="Tipos de tickes pausados/vencidos"
            >
              <MdOutlineMotionPhotosPaused />
            </CardDataStats>
          </div>
        </div>
      </section>
    </Card>
  );
};

export { CardHeaderTickets };
