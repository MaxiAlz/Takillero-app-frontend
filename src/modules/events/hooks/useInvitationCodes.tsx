import { useQuery } from '@tanstack/react-query';
import { useUserRole } from './useUserRole';
import { referidosCodesRepository } from '../repositories/referidosCodes';

export const useReferidosCodes = {
  getReferidosCodesByEvent(eventId: number) {
    const userRole = useUserRole();
    const {
      isLoading,
      data: invitationCodes,
      error,
      isFetching,
      refetch,
      isError,
    } = useQuery({
      queryKey: ['referidosCodes', eventId],
      queryFn: async () =>
        await referidosCodesRepository.getReferidosCodes(eventId, userRole),
      staleTime: 1000 * 60,
    });
    return { isLoading, error, invitationCodes, isFetching, isError, refetch };
  },
};
