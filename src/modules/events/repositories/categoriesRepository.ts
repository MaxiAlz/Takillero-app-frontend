import { apiService } from '../../../services/apiService';
import { ResponseCategoriesTypes } from '../interfaces/event';

export const categoriesRepository = {
  async getEventCategories() {
    const { data } = await apiService.get<ResponseCategoriesTypes>(
      '/Categories',
    );
    return data;
  },
};
