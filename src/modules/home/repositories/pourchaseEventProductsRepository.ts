import { apiService } from '../../../services/apiService';
import { PurchaseEventProductsPayload } from '../types/homeTypes';

export const purchaseEventProductsRepository = {
  async purchaseEventProducts(
    eventId: number,
    payload: PurchaseEventProductsPayload,
  ) {
    const { data } = await apiService.post(
      `/Events/${eventId}/purchase`,
      payload,
    );
    return data;
  },
};
