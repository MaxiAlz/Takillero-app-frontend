import { useMutation } from '@tanstack/react-query';
import { userRepository } from '../repositories/userRepository';
import { CreateUserFormData } from '../interfaces/adminTypes';

export const useUsersMutation = (userId?: number) => {
  return useMutation({
    mutationFn: async (userData: CreateUserFormData) => {
      if (userId) {
        // Si existe userId, actualizamos el usuario
        return await userRepository.updateUser(userId, userData);
      } else {
        // Si no existe userId, creamos un nuevo usuario
        return await userRepository.createUser(userData);
      }
    },
  });
};
