import { useMutation } from '@tanstack/react-query';
import { eventActions, TicketLookLike } from '..';

export const useTicketMutation = (ticketId?: number) => {
  
  return useMutation({
    mutationFn: async (ticket: TicketLookLike) => {
      if (ticketId) {
        // Si existe ticketId, actualizamos el ticket
        return await eventActions.updateTicket(ticket, ticketId);
      } else {
        // Si no existe ticketId, creamos un nuevo ticket
        return await eventActions.createTicket(ticket);
      }
    },
  });
};
