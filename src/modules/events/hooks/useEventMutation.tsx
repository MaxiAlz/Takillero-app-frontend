import { useMutation } from '@tanstack/react-query';
import { eventActions } from '..';

export const useEventMutation = () => {
  const eventMutation = useMutation({
    mutationFn: eventActions.createEvent,
    onSuccess: () => {
      console.log('evento creado');
    },
    onSettled: () => {
      console.log('evento creado, on seattle');
    },
  });

  return eventMutation;
};
