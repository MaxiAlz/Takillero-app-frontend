import { apiService } from '../../../services/apiService';
import { UserRoles } from '../../Auth/types/authTypes';
import { TicketType } from '../../home/types/homeTypes';
import { useGetSpecificUrl } from '../hooks';
import { ResponseTicketTypes, TicketLookLike } from '../interfaces/event';

export const ticketsRepository = {
  async createTicket(ticket: TicketLookLike) {
    const { data } = await apiService.post<TicketType>('/TicketTypes', ticket);
    return data;
  },

  async updateTicket(payloadTicket: TicketLookLike, ticketId: number) {
    const { data } = await apiService.put<TicketType>(
      `/TicketTypes/${ticketId}`,
      payloadTicket,
    );
    return data;
  },

  async deleteTicketById(ticketId: number) {
    const { data } = await apiService.delete(`/TicketTypes/${ticketId}`);
    return data;
  },

  async getTicketsByEvent(
    eventId: number,
    userRole: UserRoles,
  ): Promise<ResponseTicketTypes> {
    const path = useGetSpecificUrl(`/Events/${eventId}/tickettypes`, userRole);
    const { data } = await apiService.get<ResponseTicketTypes>(path);
    return data;
  },

  async getTicketsById(ticketId: number): Promise<TicketType> {
    const response = await apiService.get<TicketType>(
      `/TicketTypes/${ticketId}`,
    );
    return response.data;
  },
};
