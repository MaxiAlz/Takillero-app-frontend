import { IoIosRocket } from 'react-icons/io';

import {
  MdAccessTime,
  MdDateRange,
  MdLocationOn,
  MdOutlineLocationCity,
} from 'react-icons/md';
import { formatDatoToLong, formatTime } from '../../../helpers/formatDate';
import { PublicEventData } from '../types/homeTypes';

const EventInfoBanner = ({ eventData }: { eventData: PublicEventData }) => {
  return (
    <section className="w-full grid lg:grid-cols-3 grid-cols-1 border my-5 p-5 rounded-xl">
      <div className="col-span-2">
        <h1 className="font-semibold text-2xl text-black dark:text-white mb-4">
          {eventData.name}
        </h1>
        <p>{eventData.subtitle}</p>
      </div>

      <div className="">
        <div className="flex items-center text-primary mb-4">
          <IoIosRocket size={25} />
          <h2 className="font-semibold text-xl ">¡Activa Este Fechon!</h2>
        </div>
        <div className="flex items-center ml-2">
          <MdDateRange size={18} />
          <p className="  text-gray-700 dark:text-gray-400 ">
            {formatDatoToLong(eventData.date)}
          </p>
        </div>
        <div className="flex items-center ml-2">
          <MdAccessTime size={18} />
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Apertura de Puertas {formatTime(eventData.date)} Hs
          </p>
        </div>

        <div className="mt-2 lg:hidden">
          <h2 className="font-semibold text-xl text-primary">
            Donde se realiza este evento:
          </h2>
          <div className="flex">
            <MdOutlineLocationCity size={30} />

            <p className="text-gray-700  dark:text-gray-400">
              Establecimiento:{' '}
              <span className="font-bold">{eventData.venue}</span>
            </p>
          </div>

          <div className="flex ">
            <MdLocationOn size={30} />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Direccion:{' '}
              <span className="font-bold">{eventData.location} </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoBanner;
