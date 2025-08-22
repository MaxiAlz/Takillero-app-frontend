import { useState } from 'react';
import { MdSave } from 'react-icons/md';
import { Card } from 'flowbite-react';
import {
  ModalCustom,
  RoundedFilledButton,
  TicketTypeList,
} from '../../../components';
import { useGetTicketsByEvent } from '../hooks/useGetTicketsByEvent';
import { useNavigate, useParams } from 'react-router-dom';
import { CreateTicketTypeForm } from './Forms/CreateTicketTypeForm';
import { DeleteTicket } from './Forms/DeleteTicket';
import { useAlert } from '../../../context/AlertContext';
import Loader from '../../../components/Loader';

export const ManageTickets = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { showDefaultToast } = useAlert();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const [ticketToDelete, setTicketToDelete] = useState({
    ticketId: 0,
    ticketName: '',
  });
  const [selectedTicket, setSelectetTicket] = useState<number | undefined>(
    undefined,
  );

  console.log('selectedTicket', selectedTicket);

  const { isLoading, responseTickets, isError, refetch } = eventId
    ? useGetTicketsByEvent(+eventId)
    : {
        isLoading: false,
        responseTickets: null,
        isError: false,
        refetch: () => {},
      };

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
  const handleClickContinue = () => {
    showDefaultToast('Tickets guardados como borrador');
    navigate(`/panel/events/create/${eventId}/tickets/publish`);
  };

  console.log('responseTickets', responseTickets);

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
        Crea los tipos de entradas que tendrá tu evento{' '}
      </h3>

      {isLoading ? <Loader /> : null}

      {responseTickets &&
        responseTickets.data.length === 0 &&
        !isError &&
        !isLoading && (
          <div className="w-full text-center my-5">
            <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">
              No hay entradas creadas todavia :(
            </h5>
          </div>
        )}
      {responseTickets &&
        responseTickets?.data.length > 0 &&
        responseTickets?.data.map((ticketType) => (
          <TicketTypeList
            key={ticketType.id + ticketType.name}
            {...ticketType}
            setOpenModal={setOpenModal}
            setSelectetTicket={setSelectetTicket}
            handleOpenModalConfirm={handleOpenModalConfirm}
          />
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
              onClick={handleClickContinue}
              text="Guardar tickets y continuar"
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
