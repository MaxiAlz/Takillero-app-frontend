import { apiService } from '../../../services/apiService';
import { PublicEvents } from '../types/homeTypes';

export const publicEventRepository = {
  async getpublicEvent() {
    const { data } = await apiService.get<PublicEvents>('/PublicEvents');
    return data;
  },

  // async getEventsById(eventId: number): Promise<EventLookLike> {
  //   const { data } = await apiService.get<EventLookLike>(`/Events/${eventId}`);
  //   return data;
  // },

  // async createEvent(formData: EventLookLike) {
  //   const { data } = await apiService.post<Event>('/Events', formData);
  //   return data;
  // },

  // async updateEvent(eventId: number, payEvent: EventLookLike) {
  //   const { data } = await apiService.put<Event>(
  //     `/Events/${eventId}`,
  //     payEvent,
  //   );
  //   return data;
  // },

  // async publishEvent(eventId: number) {
  //   const { data } = await apiService.post<Event>(`/Events/${eventId}/publish`);
  //   return data;
  // },
};
