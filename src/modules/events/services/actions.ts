import { apiService } from '../../../api/apiService';
import {
  EventLookLike,
  TicketLookLike,
  TicketType,
  type Event,
} from '../interfaces/event';

export const getEvents = async () => {
  try {
    const { data } = await apiService.get<Event[]>('/Events');
    return data;
  } catch (error) {
    return `Error al obtener eventos: ${error}`;
  }
};

export const createEvent = async (formData: EventLookLike) => {
  const { data } = await apiService.post<Event>('/Events', formData);
  return data;
};

export const createTicket = async (ticket: TicketLookLike) => {
  const { data } = await apiService.post<TicketType>('/TicketTypes', ticket);
  return data;
};

export const updateTicket = async (
  payloadTicket: TicketLookLike,
  ticketId: number,
) => {
  const { data } = await apiService.put<TicketType>(
    `/TicketTypes/${ticketId}`,
    payloadTicket,
  );
  return data;
};

export const deleteTicketById = async (ticketId: number) => {
  const { data } = await apiService.delete(`/TicketTypes/${ticketId}`);
  return data;
};

export const getTicketsByEvent = async (
  eventId: number,
): Promise<TicketType[]> => {
  const { data } = await apiService.get<TicketType[]>(
    `Events/${eventId}/tickettypes`,
  );
  return data;
};

export const getTicketsById = async (eventId: number): Promise<TicketType> => {
  const { data } = await apiService.get<TicketType>(`/TicketTypes/${eventId}`);
  return data;
};
