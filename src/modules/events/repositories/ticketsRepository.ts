import { apiService } from '../../../services/apiService';
import { TicketLookLike, TicketType } from '../interfaces/event';

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

  async getTicketsByEvent(eventId: number): Promise<TicketType[]> {
    const { data } = await apiService.get<TicketType[]>(
      `Events/${eventId}/tickettypes`,
    );
    return data;
  },

  async getTicketsById(eventId: number): Promise<TicketType> {
    const { data } = await apiService.get<TicketType>(
      `/TicketTypes/${eventId}`,
    );
    return data;
  },
};
