import { useQuery } from '@tanstack/react-query';
import { getTicketsByEvent } from '../services/actions';



export const useGetTicketsByEvent = (eventId: number) => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: ticketsEvent = [],
    isFetching,
  } = useQuery({
    queryKey: ['event', eventId, 'tickets'],
    queryFn: () => getTicketsByEvent(eventId),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, ticketsEvent, isFetching, isError, refetch };
};

export const useGetEvents = () => {};
