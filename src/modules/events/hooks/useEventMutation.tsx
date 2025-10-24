import { useMutation } from '@tanstack/react-query';
import { eventRepository } from '../repositories/eventRepository';
import { EventLookLike } from '../interfaces/event';
import { useUserRole } from './useUserRole';

export const useEventMutation = (eventId?: number) => {
  const userRole = useUserRole();
  return useMutation({
    mutationFn: async (eventData: EventLookLike) => {
      if (eventId) {
        // Si existe ticketId, actualizamos el evento
        return await eventRepository.updateEvent(eventId, eventData, userRole);
      } else {
        // Si no existe ticketId, creamos un nuevo evento
        return await eventRepository.createEvent(eventData, userRole);
      }
    },
  });
};
