import { useState } from 'react';
import { MdDeleteForever, MdSave } from 'react-icons/md';
import { Card, Tooltip } from 'flowbite-react';
import { CreateTicketTypeForm } from '../Forms/CreateTicketTypeForm';
import {
  ModalCustom,
  RoundedFilledButton,
  RoundedOutlineButton,
} from '../../../components';
import { useGetTicketsByEvent } from '../hooks/useGetTicketsByEvent';
import { useParams } from 'react-router-dom';
import { DeleteTicket } from '../Forms/DeleteTicket';

export const ManageTickets = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const [ticketToDelete, setTicketToDelete] = useState({
    ticketId: 0,
    ticketName: '',
  });
  const [selectedTicket, setSelectetTicket] = useState<number | undefined>(
    undefined,
  );

  const { eventId } = useParams();

  const { isLoading, ticketsEvent, isError, refetch } = eventId
    ? useGetTicketsByEvent(+eventId)
    : { isLoading: false, ticketsEvent: [] };

  const closeModal = () => {
    setOpenModal(false);
    setSelectetTicket(undefined);
  };

  const handleOpenCreateNewTicket = () => {
    setOpenModal(true);
    setSelectetTicket(undefined);
  };

  const handleOpenModalConfirm = (ticketId: number, ticketName: string) => {
    setOpenConfirmModal(true);
    setTicketToDelete({ ticketId: ticketId, ticketName: ticketName });
  };

  if (!eventId) {
    return <p>Error: ID del evento no encontrado.</p>;
  }

  return (
    <>
      <ModalCustom
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={selectedTicket ? 'Editar ticket' : 'Crear nuevo ticket'}
      >
        <CreateTicketTypeForm
          ticketId={selectedTicket}
          eventId={+eventId}
          refetchTickets={refetch}
          closeModal={closeModal}
        />
      </ModalCustom>

      <ModalCustom
        title="¿Seguro que sea eliminar?"
        openModal={openConfirmModal}
        setOpenModal={setOpenConfirmModal}
      >
        <DeleteTicket
          ticketToDelete={ticketToDelete}
          setOpenConfirmModal={setOpenConfirmModal}
          refetchTickets={refetch}
        />
      </ModalCustom>

      <h3 className="font-bold my-2 mb-5 opacity-85 text-black dark:text-white text-3xl">
        Aqui podras crear y administrar las entradas de tu eventos
      </h3>

      {isLoading ? <p>Cargando entradas....</p> : null}

      {ticketsEvent.length === 0 && !isError && !isLoading && (
        <div className="w-full text-center my-5">
          <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">
            No hay entradas creadas todavia :(
          </h5>
        </div>
      )}

      {ticketsEvent.length > 0 &&
        ticketsEvent.map((ticketType) => (
          <div
            key={ticketType.id}
            className="flex items-center justify-between"
          >
            <Tooltip content="Eliminar">
              <RoundedOutlineButton
                icon={<MdDeleteForever size={25} />}
                onClick={() =>
                  handleOpenModalConfirm(ticketType.id!, ticketType.name)
                }
              />
            </Tooltip>
            <Card
              className="dark:bg-black my-2 w-full ml-4 mt-5 hover:cursor-pointer hover:shadow-primary"
              onClick={() => {
                setOpenModal(true);
                setSelectetTicket(ticketType.id!);
              }}
            >
              <section className="flex items-center justify-between">
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
          </div>
        ))}
      {!isError && !isLoading && (
        <>
          <button className="w-full hover:shadow-primary hover:shadow-4">
            <Card onClick={handleOpenCreateNewTicket} className="dark:bg-black">
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
