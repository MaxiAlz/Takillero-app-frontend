import { apiService } from '../../../services/apiService';
import { EventLookLike, EvetsPaginated, type Event } from '../interfaces/event';
import { UserRoles } from '../../Auth/types/authTypes';
import { useGetSpecificUrl } from '../hooks';

export const eventRepository = {
  async getAuthUserEvents(userRole: UserRoles) {
    const path = useGetSpecificUrl('/Events', userRole);
    const { data } = await apiService.get<EvetsPaginated>(path);
    return data;
  },

  async getEventsById(
    eventId: number,
    userRole: UserRoles,
  ): Promise<EventLookLike> {
    const path = useGetSpecificUrl(`/Events/${eventId}`, userRole);
    const { data } = await apiService.get<EventLookLike>(path);
    return data;
  },

  async createEvent(formData: EventLookLike, userRole: UserRoles) {
    const path = useGetSpecificUrl('/Events', userRole);
    const { data } = await apiService.post<Event>(path, formData);
    return data;
  },

  async updateEvent(
    eventId: number,
    payEvent: EventLookLike,
    userRole: UserRoles,
  ) {
    const path = useGetSpecificUrl(`/Events/${eventId}`, userRole);
    const { data } = await apiService.put<Event>(path, payEvent);
    return data;
  },

  async publishEvent(eventId: number, userRole: UserRoles) {
    const path = useGetSpecificUrl(`/Events/${eventId}/publish`, userRole);
    const { data } = await apiService.post<Event>(path);
    return data;
  },
};
