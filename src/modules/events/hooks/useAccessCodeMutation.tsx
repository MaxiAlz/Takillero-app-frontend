import { useMutation } from '@tanstack/react-query';
import { accessCodeRepository } from '../repositories/accessCodeRepository';
import { AccessCodeFormData } from '../interfaces/accesCodeTypes';

export const useAccessCodeMutation = () => {
  return useMutation({
    mutationFn: async (accessCodeformData: AccessCodeFormData) => {
      return await accessCodeRepository.createAccessCode(accessCodeformData);
    },
  });
};



