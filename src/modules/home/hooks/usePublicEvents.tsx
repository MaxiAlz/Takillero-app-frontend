import { useQuery } from '@tanstack/react-query';
import { publicEventRepository } from '../repositories/publicEventsRepository';

export const usePublicEvents = (page: number) => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: publicEvents,
    isFetching,
  } = useQuery({
    queryKey: ['public', 'events', 'home-page', page],
    queryFn: () => publicEventRepository.getpublicEvent(page),
    staleTime: 1000 * 60 * 60,
    //  keepPreviousData: true,
  });
  return { isLoading, error, publicEvents, isFetching, isError, refetch };
};
