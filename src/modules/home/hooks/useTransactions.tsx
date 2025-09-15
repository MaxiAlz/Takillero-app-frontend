import { useQuery } from '@tanstack/react-query';
import { transactionRepositories } from '../repositories/transactionsRepository';

export const useGetTransactionDataByExternalReference = (
  externalReference: string,
) => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: eventData,
    isFetching,
  } = useQuery({
    queryKey: ['success', 'eventData', externalReference],
    queryFn: () =>
      transactionRepositories.getEventDataByExternalReference(
        externalReference,
      ),
    staleTime: 1000 * 60,
  });
  return { isLoading, error, eventData, isFetching, isError, refetch };
};
