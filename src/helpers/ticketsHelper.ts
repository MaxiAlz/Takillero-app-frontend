export const ticketsHelper = {
  getTicketStatus: (startDate: Date | string, endDate: Date | string) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start)
      return {
        status: 'upcoming',
        label: 'Próximamente',
        color: 'bg-warning text-white',
      };
    if (now > end)
      return {
        status: 'expired',
        label: 'Expirada',
        color: 'bg-error  text-xs',
      };
    return {
      status: 'active',
      label: 'Activa',
      color: 'bg-success text-white text-xs',
    };
  },
};
