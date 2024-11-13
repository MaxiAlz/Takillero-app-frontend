import { useMutation } from '@tanstack/react-query';
import { ticketsRepository } from '../repositories/ticketsRepository';

export const useDeleteTicketMutation = () => {
  return useMutation({
    mutationFn: async (ticketId: number) => {
      return await ticketsRepository.deleteTicketById(ticketId);
    },
  });
};
