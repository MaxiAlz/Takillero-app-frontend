import { useQuery } from '@tanstack/react-query';
import { getEventCategories } from '../services/actions';

export const useEventCategories = () => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: categories,
    isFetching,
  } = useQuery({
    queryKey: ['event', 'categories'],
    queryFn: () => getEventCategories(),
    staleTime: 1000 * 60 * 10,
  });
  return { isLoading, error, categories, isFetching, isError, refetch };
};
