import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../services/actions';

export const useEvents = () => {
  const {
    isLoading,
    error,
    data: avents = [],
    isFetching,
  } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEvents(),
    staleTime: 1000 * 60 * 60,
  });

  return { isLoading, error, avents, isFetching };
};
