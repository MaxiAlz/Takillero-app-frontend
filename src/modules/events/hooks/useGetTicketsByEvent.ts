import { useQuery } from '@tanstack/react-query';
import { ticketsRepository } from '../repositories/ticketsRepository';
import { useUserRole } from './useUserRole';
import { ResponseTicketTypes } from '../interfaces/event';

export const useGetTicketsByEvent = (eventId: number) => {
  const userRole = useUserRole();
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: responseTickets,
    isFetching,
  } = useQuery<ResponseTicketTypes>({
    queryKey: ['event', eventId, 'tickets'],
    queryFn: () => ticketsRepository.getTicketsByEvent(eventId, userRole),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, responseTickets, isFetching, isError, refetch };
};
