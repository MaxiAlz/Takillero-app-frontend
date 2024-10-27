import { apiService } from '../../../api/apiService';
import { type Event } from '../interfaces/event';

export const getEvents = async () => {
  try {
    const { data } = await apiService.get<Event[]>('/Events');
    return data;
  } catch (error) {
    return `Error al obtener eventos: ${error}`;
  }
};
