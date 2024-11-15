import { useMutation } from '@tanstack/react-query';
import { eventRepository } from '../repositories/eventRepository';

export const usePublishEventMutation = (eventId: number) => {
  return useMutation({
    mutationFn: async () => {
      return await eventRepository.publishEvent(eventId);
    },
  });
};
