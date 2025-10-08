import { useMutation } from '@tanstack/react-query';
import { InvitationCodeBody } from '../interfaces/invitationCodesTypes';
import { referidosCodesRepository } from '../repositories/referidosCodes';

export const useCreateReferidosCode = () => {
  return useMutation({
    mutationFn: async (invitationCodeBody: InvitationCodeBody) => {
      return await referidosCodesRepository.createReferidoCode(
        invitationCodeBody,
      );
    },
  });
};
