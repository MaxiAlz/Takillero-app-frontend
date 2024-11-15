import { useQuery } from '@tanstack/react-query';
import { eventRepository } from '../../events';

export const useGetAuthUserEvents = () => {
  const { isLoading, error, isError, refetch, data, isFetching } = useQuery({
    queryKey: ['event', 'auth', 'user'],
    queryFn: () => eventRepository.getAuthUserEvents(),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, data, isFetching, isError, refetch };
};
