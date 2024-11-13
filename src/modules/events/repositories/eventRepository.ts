import { apiService } from '../../../services/apiService';
import { EventLookLike, type Event } from '../interfaces/event';

export const eventRepository = {
  async getEvents() {
    try {
      const { data } = await apiService.get<Event[]>('/Events');
      return data;
    } catch (error) {
      return `Error al obtener eventos: ${error}`;
    }
  },

  async getEventsById(eventId: number): Promise<EventLookLike> {
    const { data } = await apiService.get<EventLookLike>(`/Events/${eventId}`);
    return data;
  },

  async createEvent(formData: EventLookLike) {
    const { data } = await apiService.post<Event>('/Events', formData);
    return data;
  },

  async updateEvent(eventId: number, payEvent: EventLookLike) {
    const { data } = await apiService.put<Event>(
      `/Events/${eventId}`,
      payEvent,
    );
    return data;
  },
};
