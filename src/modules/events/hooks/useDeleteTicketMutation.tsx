import { useMutation } from '@tanstack/react-query';
import { eventActions } from '..';

export const useDeleteTicketMutation = () => {
  return useMutation({
    mutationFn: async (ticketId: number) => {
      return await eventActions.deleteTicketById(ticketId);
    },
  });
};
