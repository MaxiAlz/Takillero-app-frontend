import { useQuery } from '@tanstack/react-query';
import { ticketsRepository } from '../repositories/ticketsRepository';
// import { useUserRole } from './useUserRole';

export const useTicket = (ticketId?: number) => {
  // const userRole = useUserRole();
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: ticket,
    isFetching,
  } = useQuery({
    queryKey: ['manageTicket', 'ticket', ticketId],
    queryFn: () => ticketsRepository.getTicketsById(ticketId! /* userRole */),
    enabled: !!ticketId,
  });
  return { isLoading, error, ticket, isFetching, isError, refetch };
};
