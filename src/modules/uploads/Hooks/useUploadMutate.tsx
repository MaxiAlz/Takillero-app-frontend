import { useMutation } from '@tanstack/react-query';
import { uploadRepository } from '../repositories/uploadRepository';

export const useUploadFileMutation = () => {
  return useMutation({
    mutationFn: async (file: File) => {
      return await uploadRepository.uploadImage(file);
    },
  });
};
