import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { QRGeneratorAdapterComponent } from '../Adapters/QRGeneratorAdapterComponent';
import {
  EventData,
  PersonaData,
  Ticket,
} from '../../modules/home/types/purchaseTypes';

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
      <QRGeneratorAdapterComponent value={ticket.code} />
      {/* <p className="text-xl text-center">{ticket.code}</p> */}
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
          20/5/2025 20:30Hs
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
