import { useMutation } from '@tanstack/react-query';
import { CategoryFormData } from '../interfaces/adminTypes';
import { categoriesRepository } from '../../events/repositories/categoriesRepository';
import { ResponseCreateCategory } from '../../events/interfaces/categoriesTypes';

export const useCreateCategoryMutation = () => {
  return useMutation({
    mutationFn: async (categoryFormData: CategoryFormData) => {
      return await categoriesRepository.createCategorie(categoryFormData);
    },
  });
};

export const useUpdateCategoryMutation = () => {
  return useMutation<
    ResponseCreateCategory,
    unknown,
    { categoryId: number; categoryFormData: CategoryFormData }
  >({
    mutationFn: async ({ categoryId, categoryFormData }) => {
      return await categoriesRepository.updateCategoriesById(
        categoryFormData,
        categoryId,
      );
    },
  });
};
