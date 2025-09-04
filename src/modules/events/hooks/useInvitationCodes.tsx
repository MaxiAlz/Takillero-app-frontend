import { useQuery } from '@tanstack/react-query';
import { useUserRole } from './useUserRole';
import { invitationCodesRepository } from '../repositories/invitationCodes';

export const useInvitationCodes = {
  getInvitationCodesByEvent(eventId: number) {
    const userRole = useUserRole();
    const {
      isLoading,
      data: invitationCodes,
      error,
      isFetching,
      refetch,
      isError,
    } = useQuery({
      queryKey: ['invitationCodes', eventId],
      queryFn: async () =>
        await invitationCodesRepository.getInvitationCodes(eventId, userRole),
      staleTime: 1000 * 60,
    });
    return { isLoading, error, invitationCodes, isFetching, isError, refetch };
  },
};
