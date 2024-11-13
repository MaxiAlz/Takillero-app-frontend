import { useQuery } from '@tanstack/react-query';
import { eventRepository } from '../repositories/eventRepository';

export const useGetEventById = (eventId?: number) => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: eventData,
    isFetching,
  } = useQuery({
    queryKey: ['event', eventId, 'eventData'],
    queryFn: () => eventRepository.getEventsById(eventId!),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, eventData, isFetching, isError, refetch };
};
