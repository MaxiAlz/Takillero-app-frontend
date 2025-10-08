import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { QRGeneratorAdapterComponent } from '../Adapters/QRGeneratorAdapterComponent';
import {
  EventData,
  PersonaData,
  Ticket,
} from '../../modules/home/types/purchaseTypes';
import { formatFullDate } from '../../helpers';

export interface TicketQrBuyedProps {
  eventData: EventData;
  personaData: PersonaData;
  ticket: Ticket;
}

const TicketQrBuyed = ({
  eventData,
  personaData,
  ticket,
}: TicketQrBuyedProps) => {
  return (
    <div className="border border-white w-full max-w-md rounded-lg shadow-lg my-4">
      <div className="m-2">
        <img
          src={eventData.verticalPhoto}
          alt={`banner cover`}
          className="object-contain w-full"
        />
      </div>
      {/* <h1 className="text-2xl text-center">LOS PERICOS DESPIDEN EL 2024</h1> */}
      <div className="flex my-4 font-bold uppercase text-primary text-2xl text-center justify-center">
        <BsFillRocketTakeoffFill size={20} />
        <h2 className="">Activate!</h2>
      </div>
      <div className="flex justify-center">
        <div className="bg-white border-2 border-black m-2 p-2 flex flex-col items-center">
          <QRGeneratorAdapterComponent value={ticket.code} />
          <p className="text-xl text-center">{ticket.code}</p>
        </div>
      </div>
      <div className="mx-4 my-4">
        <p>
          <span className="font-bold text-black dark:text-white">Evento:</span>{' '}
          {eventData.name}
        </p>
        <p>
          <span className="font-bold text-black dark:text-white">
            Tipo de entrada:
          </span>{' '}
          {ticket.type}
        </p>
        {/* <p >Sector: N/A</p> */}
        <p>
          <span className="font-bold text-black dark:text-white">
            Fecha y Hora:
          </span>{' '}
          {formatFullDate(eventData.date)}
        </p>
        <p>
          <span className="font-bold text-black dark:text-white">Lugar:</span>{' '}
          {eventData.venue}
        </p>
        <p>
          <span className="font-bold text-black dark:text-white">
            Direccion:
          </span>{' '}
          {eventData.location}
        </p>
      </div>
      <div className="mx-4 mb-4">
        <p>
          <span className="font-bold text-black dark:text-white">Titular:</span>{' '}
          {personaData.name}
        </p>
        <p>
          <span className="font-bold text-black dark:text-white">Dni:</span>{' '}
          {personaData.dni}
        </p>
        {/* <p className="text-sm">IDACT: #56326</p> */}
        {/* <p className="text-sm">Transaccion: #323423</p> */}
      </div>
    </div>
  );
};

export { TicketQrBuyed };
