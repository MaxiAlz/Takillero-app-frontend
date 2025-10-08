import { useQuery } from '@tanstack/react-query';
import { accessCodeRepository } from '../repositories/accessCodeRepository';
import { useUserRole } from './useUserRole';

export const useAccessCodesQuery = {
  getAccesCodesByEventId(eventId: number) {
    const userRole = useUserRole();
    const {
      isLoading,
      data: accessCodesData,
      error,
      isFetching,
      refetch,
      isError,
    } = useQuery({
      queryKey: ['accessCodes', eventId],
      queryFn: async () =>
        await accessCodeRepository.getAccessCodes(eventId, userRole),
      staleTime: 1000 * 60,
    });
    return { isLoading, error, accessCodesData, isFetching, isError, refetch };
  },
};
