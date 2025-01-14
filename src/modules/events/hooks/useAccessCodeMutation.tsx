import { useMutation } from '@tanstack/react-query';
import { accessCodeRepository } from '../repositories/accessCodeRepository';
import { AccessCodeFormData } from '../interfaces/accesCodeTypes';

export const useCreateAccessCodeMutation = () => {
  return useMutation({
    mutationFn: async (accessCodeformData: AccessCodeFormData) => {
      return await accessCodeRepository.createAccessCode(accessCodeformData);
    },
  });
};

export const useDeleteAccessCodeById = () => {
  const { data, isPending, mutate } = useMutation({
    mutationFn: async (acessCodeId: number) => {
      return await accessCodeRepository.deleteAccessCodes(acessCodeId);
    },
  });
  return { data, isPending, mutate };
};
