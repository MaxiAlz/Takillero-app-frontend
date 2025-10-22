import { apiService } from '../../../services/apiService';
import { EventDatailLookLike, EventDetailsResponse } from '../types/homeTypes';

export const publicEventRepository = {
  async getpublicEvent(page = 1) {
    const { data } = await apiService.get<EventDatailLookLike>(
      `/PublicEvents?pageIndex=${page}`,
    );
    return data;
  },

  async getPublicEventsById(eventId: number): Promise<EventDetailsResponse> {
    const { data } = await apiService.get<EventDetailsResponse>(
      `/PublicEvents/${eventId}`,
    );
    return data;
  },
};
