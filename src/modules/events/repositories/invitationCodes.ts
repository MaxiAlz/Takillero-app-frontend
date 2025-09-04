import { apiService } from '../../../services/apiService';
import { UserRoles } from '../../Auth/types/authTypes';
import { useGetSpecificUrl } from '../hooks';
import {
  InvitationCodeBody,
  InvitationCodesResponse,
} from '../interfaces/invitationCodesTypes';

export const invitationCodesRepository = {
  async getInvitationCodes(eventId: number, userRole: UserRoles) {
    const path = useGetSpecificUrl(
      `/Events/${eventId}/invitationcodes`,
      userRole,
    );
    const { data } = await apiService.get<InvitationCodesResponse>(path);
    return data;
  },

  async createInvitationCode(body: InvitationCodeBody) {
    const { data } = await apiService.post('/invitationcodes', body);
    return { data };
  },
};
