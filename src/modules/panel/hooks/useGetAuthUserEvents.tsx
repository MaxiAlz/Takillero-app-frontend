import { useQuery } from '@tanstack/react-query';
import { eventRepository } from '../../events';
import { useUserRole } from '../../../hooks/useUserRole';

export const useGetAuthUserEvents = () => {
  const userRole = useUserRole();

  const { isLoading, error, isError, refetch, data, isFetching } = useQuery({
    queryKey: ['event', 'auth', 'user'],
    queryFn: () => eventRepository.getAuthUserEvents(userRole),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, data, isFetching, isError, refetch };
};
