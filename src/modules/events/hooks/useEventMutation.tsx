import { useMutation } from '@tanstack/react-query';
import { eventActions, EventLookLike } from '..';

export const useEventMutation = (ticketId?: number) => {
  return useMutation({
    mutationFn: async (eventData: EventLookLike) => {
      if (ticketId) {
        // Si existe ticketId, actualizamos el evento
        return await eventActions.updateEvent(ticketId, eventData);
      } else {
        // Si no existe ticketId, creamos un nuevo evento
        return await eventActions.createEvent(eventData);
      }
    },
  });
};

// export const useEventMutation = () => {
//   const eventMutation = useMutation({
//     mutationFn: eventActions.createEvent,
//   });

//   return eventMutation;
// };
