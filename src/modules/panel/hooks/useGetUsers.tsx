import { useQuery } from '@tanstack/react-query';
import { userRepository } from '../repositories/userRepository';

export const useGetUsers = () => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: users,
    isFetching,
  } = useQuery({
    queryKey: ['users', 'list'],
    queryFn: () => userRepository.getUsers(),
    staleTime: 1000 * 60 * 10,
  });
  return { isLoading, error, users, isFetching, isError, refetch };
};
