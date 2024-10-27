import { RoundedFilledButton } from '../../../../components';
import { useState } from 'react';
import { CreateTicketTypeForm } from '../../Forms/CreateTicketTypeForm';
import { MdSave } from 'react-icons/md';
import { Card, Modal } from 'flowbite-react';

// interface TabCreateTicketProps {
//   setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
// }
interface Ticket {
  title: string;
  quantity: number;
  description?: string;
  price: number;
  minOrder: number;
  maxOrder: number;
  startDate: string;
  endDate: string;
  assumeCost: boolean;
}

export const TabCreateTicket = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [ticketTypes, setTicketTypes] = useState<Ticket[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleCreateTicketClick = () => {
    if (ticketTypes.length < 10) {
      setIsFormVisible(true);
    } else {
      alert('Ya alcanzaste el máximo de 10 tipos de tickets.');
    }
  };

  const handleSaveTicket = (ticketData: Ticket) => {
    setTicketTypes((prevTicketTypes) => [...prevTicketTypes, ticketData]);
    setIsFormVisible(false);
  };

  const handleSaveAllTickets = () => {
    console.log('Tickets creados:', ticketTypes);
  };

  return (
    <>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="dark:bg-opacity-85 dark:shadow-1 z-99999 bg-black-2 bg-opacity-70 shadow-8"
      >
        <Modal.Header className="dark:bg-boxdark b">
          Crear Tipo de Entrada
        </Modal.Header>
        <Modal.Body className="dark:bg-boxdark">
          <CreateTicketTypeForm onSave={handleSaveTicket} />
        </Modal.Body>
      </Modal>

      <h3 className="font-bold my-2 mb-5 opacity-85 text-black dark:text-white text-3xl">
        Aqui podras crear y administrar las entradas de tu eventos
      </h3>
      <span>Tus entradas creadas:</span>

      {/* {ticketTypes.length === 0 ? (
        <h4>Todavía no se han cargado Tickets en este evento :(</h4>
      ) : (
        <div className="ticket-list">
          {ticketTypes.map((ticket, index) => (
            <div key={index} className="ticket-item p-4 border-b">
              <h4 className="font-semibold">{ticket.title}</h4>
              <p>Cantidad de entradas: {ticket.quantity}</p>
            </div>
          ))}
        </div>
      )} */}

      {isFormVisible && <CreateTicketTypeForm onSave={handleSaveTicket} />}

      <Card className="dark:bg-black my-2 mt-5">
        <section className="flex items-center justify-between ">
          <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Entrada general
            </h5>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Cantidad: <span className="font-bold">100</span>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-5">
              Precio: <span className="font-bold">Gratuito</span>
            </p>
          </div>
        </section>
      </Card>

      <Card className="dark:bg-black my-2 mt-3">
        <section className="flex items-center justify-between ">
          <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Platea
            </h5>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Cantidad: <span className="font-bold">50</span>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-5">
              Precio: <span className="font-bold">$ 25.000</span>
            </p>
          </div>
        </section>
      </Card>
      <Card className="dark:bg-black my-2 mt-3">
        <section className="flex items-center justify-between ">
          <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Campo
            </h5>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Cantidad: <span className="font-bold">50</span>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-5">
              Precio: <span className="font-bold">$ 25.000</span>
            </p>
          </div>
        </section>
      </Card>

      <button className="w-full hover:shadow-primary hover:shadow-4">
        <Card onClick={() => setOpenModal(true)} className="dark:bg-black">
          <h1>+ Crear nuevo tipo de ticket</h1>
        </Card>
      </button>
      {/* Muestra el formulario solo si isFormVisible es true */}
      {/* <CreateTicketTypeForm /> */}
      <div className="my-4 border-t border-gray-300"></div>

      <div className="flex w-full justify-end mt-4">
        <RoundedFilledButton
          text="Guardar todos los tickets y continuar"
          icon={<MdSave />}
          onClick={handleSaveAllTickets}
        />
      </div>
    </>
  );
};
