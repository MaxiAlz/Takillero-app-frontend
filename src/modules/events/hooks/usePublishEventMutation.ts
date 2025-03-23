import { useMutation } from '@tanstack/react-query';
import { eventRepository } from '../repositories/eventRepository';
import { useUserRole } from './useUserRole';

export const usePublishEventMutation = (eventId: number) => {
  const userRole = useUserRole();
  return useMutation({
    mutationFn: async () => {
      return await eventRepository.publishEvent(eventId, userRole);
    },
  });
};
