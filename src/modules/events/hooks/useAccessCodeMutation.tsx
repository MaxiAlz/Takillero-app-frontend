import { useMutation } from '@tanstack/react-query';
import { accessCodeRepository } from '../repositories/accessCodeRepository';
import { AccessCodeFormData } from '../interfaces/accesCodeTypes';
import { useUserRole } from './useUserRole';

export const useCreateAccessCodeMutation = () => {
  const userRole = useUserRole();
  return useMutation({
    mutationFn: async (accessCodeformData: AccessCodeFormData) => {
      return await accessCodeRepository.createAccessCode(
        accessCodeformData,
        userRole,
      );
    },
  });
};

export const useDeleteAccessCodeById = () => {
  const userRole = useUserRole();
  const { data, isPending, mutate } = useMutation({
    mutationFn: async (acessCodeId: number) => {
      return await accessCodeRepository.deleteAccessCodes(
        acessCodeId,
        userRole,
      );
    },
  });
  return { data, isPending, mutate };
};
