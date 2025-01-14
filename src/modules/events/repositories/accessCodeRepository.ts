import { apiService } from '../../../services/apiService';
import { AccessCode, AccessCodeFormData } from '../interfaces/accesCodeTypes';

export const accessCodeRepository = {
  async createAccessCode(accessCodeformData: AccessCodeFormData) {
    const { data } = await apiService.post<AccessCode>(
      '/AccessCodes',
      accessCodeformData,
    );
    return data;
  },

  async getAccessCodes(eventId: number) {
    const { data } = await apiService.get<AccessCode[]>(
      `/Events/${eventId}/accesscodes`,
    );
    return data;
  },

  async deleteAccessCodes(acessCodeId: number) {
    const { data } = await apiService.delete(`/AccessCodes/${acessCodeId}`);
    return data;
  },
};

// async deleteTicketById(ticketId: number) {
//   const { data } = await apiService.delete(`/TicketTypes/${ticketId}`);
//   return data;
// },
