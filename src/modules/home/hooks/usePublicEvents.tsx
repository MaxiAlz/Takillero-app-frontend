import { useQuery } from '@tanstack/react-query';
import { publicEventRepository } from '../repositories/publicEventsRepository';

export const usePublicEvents = () => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: publicEvents,
    isFetching,
  } = useQuery({
    queryKey: ['public', 'events', 'home-page'],
    queryFn: () => publicEventRepository.getpublicEvent(),
    staleTime: 1000 * 60 * 60,
  });
  return { isLoading, error, publicEvents, isFetching, isError, refetch };
};
