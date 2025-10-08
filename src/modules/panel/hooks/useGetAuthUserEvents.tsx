import { useQuery } from '@tanstack/react-query';
import { eventRepository } from '../../events';
import { useUserRole } from '../../../hooks/useUserRole';
import { useState } from 'react';

export const useGetAuthUserEvents = () => {
  const [page, setPage] = useState(1);
  const userRole = useUserRole();

  const { isLoading, error, isError, refetch, data, isFetching } = useQuery({
    queryKey: ['event', 'auth', 'user', page],
    queryFn: () => eventRepository.getAuthUserEvents(userRole, page),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, data, isFetching, isError, refetch, setPage };
};
