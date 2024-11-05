import React from 'react';
import { RoundedFilledButton, RoundedOutlineButton } from '../../../components';
import { MdCancel, MdDeleteForever } from 'react-icons/md';
import { useDeleteTicketMutation } from '../hooks/useDeleteTicketMutation';

interface TicketToDeleteState {
  ticketId: number;
  ticketName: string;
}

interface DeleteTicketProps {
  ticketToDelete: TicketToDeleteState;
  setOpenConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  refetchTickets?: () => void;
}

const DeleteTicket = ({
  ticketToDelete,
  setOpenConfirmModal,
  refetchTickets,
}: DeleteTicketProps) => {
  const useDeleteTicket = useDeleteTicketMutation();

  const handleDeleteTicket = () => {
    useDeleteTicket.mutate(ticketToDelete.ticketId, {
      onSuccess: (arg) => {
        console.log('arg', arg);
        alert('se elimino');
        setOpenConfirmModal(false);
        refetchTickets?.();
      },
      onError: (error) => {
        alert(error);
      },
    });
  };

  return (
    <>
      <div>
        Se elimara el siguiente ticket:{' '}
        <span className="text-xl font-bold text-black dark:text-white">
          "{ticketToDelete.ticketName}"
        </span>
      </div>
      <div className="my-4 border-t border-gray-300"></div>
      <div className="flex w-full justify-between">
        <RoundedOutlineButton
          className=""
          icon={MdCancel}
          text="Cancelar"
          type="submit"
          onClick={() => setOpenConfirmModal(false)}
        />
        <RoundedFilledButton
          text="Eliminar Ticket"
          icon={<MdDeleteForever size={25} />}
          type="submit"
          isLoading={useDeleteTicket.isPending}
          onClick={handleDeleteTicket}
        />
      </div>
    </>
  );
};

export { DeleteTicket };
