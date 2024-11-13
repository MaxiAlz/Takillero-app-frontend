import { useMutation } from '@tanstack/react-query';
import { ticketsRepository } from '../repositories/ticketsRepository';
import { TicketLookLike } from '../interfaces/event';

export const useTicketMutation = (ticketId?: number) => {
  return useMutation({
    mutationFn: async (ticket: TicketLookLike) => {
      if (ticketId) {
        // Si existe ticketId, actualizamos el ticket
        return await ticketsRepository.updateTicket(ticket, ticketId);
      } else {
        // Si no existe ticketId, creamos un nuevo ticket
        return await ticketsRepository.createTicket(ticket);
      }
    },
  });
};
