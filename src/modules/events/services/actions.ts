import { apiService } from '../../../services/apiService';
import {
  CategoriesTypes,
  EventLookLike,
  TicketLookLike,
  TicketType,
  type Event,
} from '../interfaces/event';

// EVENT ACTIONS
export const getEvents = async () => {
  try {
    const { data } = await apiService.get<Event[]>('/Events');
    return data;
  } catch (error) {
    return `Error al obtener eventos: ${error}`;
  }
};

export const getEventsById = async (
  eventId: number,
): Promise<EventLookLike> => {
  const { data } = await apiService.get<EventLookLike>(`/Events/${eventId}`);
  return data;
};

export const createEvent = async (formData: EventLookLike) => {
  const { data } = await apiService.post<Event>('/Events', formData);
  return data;
};

export const updateEvent = async (eventId: number, payEvent: EventLookLike) => {
  const { data } = await apiService.put<Event>(`/Events/${eventId}`, payEvent);
  return data;
};

// TICKETS ACTIONS
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

// CATEGORIES ACTIONS
export const getEventCategories = async () => {
  const { data } = await apiService.get<CategoriesTypes>(
    '/Categories?pageIndex=1&pageSize=20',
  );
  return data.items;
};
