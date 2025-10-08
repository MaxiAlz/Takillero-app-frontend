import { apiService } from '../../../services/apiService';
import { CategoryFormData } from '../../panel/interfaces/adminTypes';
import {
  ResponseCategoriesTypes,
  ResponseCreateCategory,
} from '../interfaces/categoriesTypes';

export interface UpdateCategoryProps {
  payloadTicket: CategoryFormData;
  categoryId: number;
}
export const categoriesRepository = {
  async getEventCategories() {
    const { data } = await apiService.get<ResponseCategoriesTypes>(
      '/Categories',
    );
    return data;
  },
  async createCategorie(categorieData: CategoryFormData) {
    const { data } = await apiService.post<ResponseCreateCategory>(
      '/Categories',
      categorieData,
    );
    return data;
  },

  async updateCategoriesById(
    payloadTicket: CategoryFormData,
    categoryId: number,
  ) {
    const { data } = await apiService.put<ResponseCreateCategory>(
      `/Categories/${categoryId}`,
      payloadTicket,
    );
    return data;
  },
};
