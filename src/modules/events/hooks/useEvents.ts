import { useQuery } from '@tanstack/react-query';
import { getTicketsByEvent } from '../services/actions';

// export const useEvents = () => {
//   const {
//     isLoading,
//     error,
//     data: avents = [],
//     isFetching,
//   } = useQuery({
//     queryKey: ['events'],
//     queryFn: () => getEvents(),
//     staleTime: 1000 * 60 * 60,
//   });

//   return { isLoading, error, avents, isFetching };
// };

export const useGetTicketsByEvent = (eventId: number) => {
  const {
    isLoading,
    error,
    isError,
    data: ticketsEvent = [],
    isFetching,
  } = useQuery({
    queryKey: ['event', eventId, 'tickets'],
    queryFn: () => getTicketsByEvent(eventId),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, ticketsEvent, isFetching, isError };
};

export const useGetEvents = () => {};
