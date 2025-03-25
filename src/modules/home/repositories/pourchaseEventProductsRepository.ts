import { apiService } from '../../../services/apiService';
import { PurchaseEventProductsPayload } from '../types/homeTypes';
import { PourchaseResponse } from '../types/purchaseTypes';

export const purchaseEventProductsRepository = {
  async purchaseEventProducts(
    eventId: number,
    payload: PurchaseEventProductsPayload,
  ) {
    const { data } = await apiService.post<PourchaseResponse>(
      `/PublicEvents/${eventId}/purchase`,
      payload,
    );
    return data;
  },
};
