import { useQuery } from '@tanstack/react-query';
import { userRepository } from '../repositories/userRepository';
import { useState } from 'react';

export const useGetUsers = () => {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: usersData,
    isFetching,
  } = useQuery({
    queryKey: ['users', 'list', page],
    queryFn: () => userRepository.getUsers(page),
    staleTime: 1000 * 60 * 10,
  });
  return { isLoading, error, usersData, isFetching, isError, refetch, setPage };
};
