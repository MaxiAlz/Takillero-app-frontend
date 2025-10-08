import { useQuery } from '@tanstack/react-query';
import { categoriesRepository } from '../repositories/categoriesRepository';

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
    queryFn: () => categoriesRepository.getEventCategories(),
    staleTime: 1000 * 60 * 10,
  });
  return { isLoading, error, categories, isFetching, isError, refetch };
};
