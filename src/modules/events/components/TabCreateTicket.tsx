import { useState } from 'react';
import { MdSave } from 'react-icons/md';
import { Card, Modal } from 'flowbite-react';
import { CreateTicketTypeForm } from '../Forms/CreateTicketTypeForm';
import { RoundedFilledButton } from '../../../components';
import { useGetTicketsByEvent } from '../hooks/useEvents';
import { useParams } from 'react-router-dom';

export const TabCreateTicket = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { eventId } = useParams();

  const { isLoading, ticketsEvent, error, isError } = eventId
    ? useGetTicketsByEvent(+eventId)
    : { isLoading: false, ticketsEvent: [] };

  console.log('error', error);
  console.log('isError', isError);
  if (!eventId) {
    return <p>Error: ID del evento no encontrado.</p>;
  }

  const handleSaveTicket = (/* ticketData: Ticket */) => {
    // setTicketTypes((prevTicketTypes) => [...prevTicketTypes, ticketData]);
    setIsFormVisible(false);
  };

  const handleSaveAllTickets = () => {
    console.log('Tickets creados:');
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

      {isLoading ? <p>Cargando entradas....</p> : null}

      {isFormVisible && <CreateTicketTypeForm onSave={handleSaveTicket} />}

      {ticketsEvent.length === 0 && !isError && !isLoading && (
        <div className="w-full text-center my-5">
          <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">
            No hay entradas creadas todavia :(
          </h5>
        </div>
      )}

      {ticketsEvent.length > 0 &&
        ticketsEvent.map((ticketType) => (
          <Card className="dark:bg-black my-2 mt-5" key={ticketType.id}>
            <section className="flex items-center justify-between ">
              <div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ticketType.name}
                </h5>
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Cantidad total:{' '}
                  <span className="font-bold">{ticketType.totalAmount}</span>
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 mx-5">
                  Precio:{' '}
                  <span className="font-bold">
                    {ticketType.price == 0 ? 'Gratuito' : ticketType.price}
                  </span>
                </p>
              </div>
            </section>
          </Card>
        ))}
      {!isError && !isLoading && (
        <>
          <button className="w-full hover:shadow-primary hover:shadow-4">
            <Card onClick={() => setOpenModal(true)} className="dark:bg-black">
              <h1 className="font-semibold text-xl text-primary">
                + Crear nuevo tipo de ticket
              </h1>
            </Card>
          </button>
          <div className="my-4 border-t border-gray-300"></div>
          <div className="flex w-full justify-end mt-4">
            <RoundedFilledButton
              text="Guardar todos los tickets y continuar"
              icon={<MdSave />}
              onClick={handleSaveAllTickets}
            />
          </div>
        </>
      )}
      {isError && (
        <div className="w-full text-center my-5">
          <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">
            Ah ocurrido un error al cargar tus entradas :(
          </h5>
        </div>
      )}
    </>
  );
};
