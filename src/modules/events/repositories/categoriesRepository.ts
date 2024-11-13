import { apiService } from '../../../services/apiService';
import { CategoriesTypes } from '../interfaces/event';

export const categoriesRepository = {
  async getEventCategories() {
    const { data } = await apiService.get<CategoriesTypes>(
      '/Categories?pageIndex=1&pageSize=20',
    );
    return data.items;
  },
};
