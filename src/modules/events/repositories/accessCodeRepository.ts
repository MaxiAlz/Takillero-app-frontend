import { apiService } from '../../../services/apiService';
import { UserRoles } from '../../Auth/types/authTypes';
import { useGetSpecificUrl } from '../hooks';
import {
  AccessCode,
  AccessCodeFormData,
  ResponseAccessCode,
} from '../interfaces/accesCodeTypes';

export const accessCodeRepository = {
  async createAccessCode(accessCodeformData: AccessCodeFormData) {
    const { data } = await apiService.post<AccessCode>(
      `/AccessCodes`,
      accessCodeformData,
    );
    return data;
  },

  async getAccessCodes(eventId: number, userRole: UserRoles) {
    const path = useGetSpecificUrl(`/Events/${eventId}/accesscodes`, userRole);
    const { data } = await apiService.get<ResponseAccessCode>(path);
    return data;
  },

  async deleteAccessCodes(acessCodeId: number) {
    const { data } = await apiService.delete(`/AccessCodes/${acessCodeId}`);
    return data;
  },
};
