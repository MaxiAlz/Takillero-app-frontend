import { apiService } from '../../../services/apiService';
import { UserRoles } from '../../Auth/types/authTypes';
import { useGetSpecificUrl } from '../hooks';
import {
  AccessCode,
  AccessCodeFormData,
  ResponseAccessCode,
} from '../interfaces/accesCodeTypes';

export const accessCodeRepository = {
  async createAccessCode(
    accessCodeformData: AccessCodeFormData,
    userRole: UserRoles,
  ) {
    const path = useGetSpecificUrl(`/AccessCodes`, userRole);
    const { data } = await apiService.post<AccessCode>(
      path,
      accessCodeformData,
    );
    return data;
  },

  async getAccessCodes(eventId: number, userRole: UserRoles) {
    const path = useGetSpecificUrl(`/Events/${eventId}/accesscodes`, userRole);
    const { data } = await apiService.get<ResponseAccessCode>(path);
    return data;
  },

  async deleteAccessCodes(acessCodeId: number, userRole: UserRoles) {
    const path = useGetSpecificUrl(`/AccessCodes/${acessCodeId}`, userRole);
    const { data } = await apiService.delete(path);
    return data;
  },
};
