import { apiService } from '../../../services/apiService';
import {
  EventDashboardResponse,
  EventLookLike,
  EventResponse,
  EventResponsePaginated,
} from '../interfaces/event';
import { UserRoles } from '../../Auth/types/authTypes';
import { useGetSpecificUrl } from '../hooks';

export const eventRepository = {
  async getAuthUserEvents(userRole: UserRoles, page: number) {
    const path = useGetSpecificUrl('/Events', userRole);
    const { data } = await apiService.get<EventResponsePaginated>(
      `${path}?pageIndex=${page}`,
    );
    return data;
  },

  async getEventsById(
    eventId: number,
    userRole: UserRoles,
  ): Promise<EventResponse> {
    const path = useGetSpecificUrl(`/Events/${eventId}`, userRole);
    const { data } = await apiService.get<EventResponse>(path);
    return data;
  },

  async createEvent(formData: EventLookLike, userRole: UserRoles) {
    const path = useGetSpecificUrl('/Events', userRole);
    const { data } = await apiService.post<EventResponse>(path, formData);
    return data;
  },

  async updateEvent(
    eventId: number,
    payEvent: EventLookLike,
    userRole: UserRoles,
  ) {
    const path = useGetSpecificUrl(`/Events/${eventId}`, userRole);
    const { data } = await apiService.put<EventResponse>(path, payEvent);
    return data;
  },

  async publishEvent(eventId: number, userRole: UserRoles) {
    const path = useGetSpecificUrl(`/Events/${eventId}/publish`, userRole);
    const { data } = await apiService.post<EventResponse>(path);
    return data;
  },

  // Obtiene analiticas de los tickets del evento
  async getEventDashboard(
    eventId: number,
    userRole: UserRoles,
  ): Promise<EventDashboardResponse> {
    const path = useGetSpecificUrl(`/Events/${eventId}/dashboard`, userRole);
    const { data } = await apiService.get<EventDashboardResponse>(path);
    return data;
  },
};
