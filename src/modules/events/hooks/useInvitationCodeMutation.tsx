import { useMutation } from '@tanstack/react-query';
import { InvitationCodeBody } from '../interfaces/invitationCodesTypes';
import { invitationCodesRepository } from '../repositories/invitationCodes';

export const useCreateInvitationCode = () => {
  return useMutation({
    mutationFn: async (invitationCodeBody: InvitationCodeBody) => {
      return await invitationCodesRepository.createInvitationCode(
        invitationCodeBody,
      );
    },
  });
};
