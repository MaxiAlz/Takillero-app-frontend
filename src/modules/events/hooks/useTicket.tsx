import { useQuery } from '@tanstack/react-query';
import { getTicketsById } from '../services/actions';

export const useTicket = (ticketId?: number) => {
  const {
    isLoading,
    error,
    isError,
    refetch,
    data: ticket,
    isFetching,
  } = useQuery({
    queryKey: ['manageTicket', 'ticket', ticketId],
    queryFn: () => getTicketsById(ticketId!), // Ajusta ! para manejar `ticketId` undefined si es necesario
    staleTime: 1000 * 60 * 10,
    enabled: !!ticketId, // Solo ejecuta la query si `ticketId` está definido
  });
  return { isLoading, error, ticket, isFetching, isError, refetch };
};
