import { useMutation } from '@tanstack/react-query';
import { eventActions } from '..';

export const useEventMutation = () => {
  const eventMutation = useMutation({
    mutationFn: eventActions.createEvent,
  });

  return eventMutation;
};
