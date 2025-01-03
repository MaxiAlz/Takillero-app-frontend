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
          src={
            'https://cdn.getcrowder.com/images/b7ffaba7-c250-4071-852b-77cc6bccf94a-1920x720-4.jpg'
          }
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
        <p className="text-sm">Evento: {eventData.name}</p>
        <p className="text-sm">Tipo: {ticket.type}</p>
        {/* <p className="text-sm">Sector: N/A</p> */}
        <p className="text-sm">Fecha y Hora: 20/5/2025 20:30Hs</p>
        <p className="text-sm">Lugar: {eventData.location}</p>
        <p className="text-sm">
          Direccion: AV. MArio Pedro Ocampo 234 falta dato
        </p>
      </div>
      <div className="mx-4 mb-4">
        <p className="text-sm">Titular: {personaData.name}</p>
        <p className="text-sm">Dni: {personaData.name}</p>
        {/* <p className="text-sm">IDACT: #56326</p> */}
        {/* <p className="text-sm">Transaccion: #323423</p> */}
      </div>
    </div>
  );
};

export { TicketQrBuyed };
