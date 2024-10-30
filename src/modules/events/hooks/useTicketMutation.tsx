import { useMutation } from '@tanstack/react-query';
import { eventActions } from '..';

export const useTicketMutation = () => {
  const ticketMutation = useMutation({
    mutationFn: eventActions.createTicket,
  });
  return ticketMutation;
};
