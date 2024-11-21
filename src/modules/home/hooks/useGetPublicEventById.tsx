import { useQuery } from '@tanstack/react-query';
import { publicEventRepository } from '../repositories/publicEventsRepository';

export const useGetPublicEventById = (eventId?: number) => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: eventData,
    isFetching,
  } = useQuery({
    queryKey: ['public', 'event', eventId, 'home-page-event'],
    queryFn: () => publicEventRepository.getPublicEventsById(eventId!),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, eventData, isFetching, isError, refetch };
};
