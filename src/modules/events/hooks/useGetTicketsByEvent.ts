import { useQuery } from '@tanstack/react-query';
import { ticketsRepository } from '../repositories/ticketsRepository';
import { useUserRole } from './useUserRole';

export const useGetTicketsByEvent = (eventId: number) => {
  const userRole = useUserRole();
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: ticketsEvent = [],
    isFetching,
  } = useQuery({
    queryKey: ['event', eventId, 'tickets'],
    queryFn: () => ticketsRepository.getTicketsByEvent(eventId, userRole),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, ticketsEvent, isFetching, isError, refetch };
};
