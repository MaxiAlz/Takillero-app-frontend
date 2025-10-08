import { apiService } from '../../../services/apiService';
import { ExternalReferenceResponse } from '../types/purchaseTypes';

export const transactionRepositories = {
  async getEventDataByExternalReference(externalReference: string) {
    const { data } = await apiService.get<ExternalReferenceResponse>(
      `/Transactions/public/${externalReference}`,
    );
    return data;
  },
};
