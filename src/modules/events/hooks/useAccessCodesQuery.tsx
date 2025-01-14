import { useQuery } from '@tanstack/react-query';
import { accessCodeRepository } from '../repositories/accessCodeRepository';

export const useAccessCodesQuery = {
  getAccesCodesByEventId(eventId: number) {
    const {
      isLoading,
      data: accessCodesData,
      error,
      isFetching,
      refetch,
      isError,
    } = useQuery({
      queryKey: ['accessCodes', eventId],
      queryFn: async () => await accessCodeRepository.getAccessCodes(eventId),
      staleTime: 1000 * 60,
    });
    return { isLoading, error, accessCodesData, isFetching, isError, refetch };
  },

 
};