export function formatDate(dateString: Date | string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function formatTime(isoString: Date | string): string {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  return date.toLocaleString('es-AR', options);
}

// RETORNA FORMATO: 14/01/25 - 12:17:00
export function formatFullDate(isoString: Date | string): string {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, 
  };
  return date.toLocaleString('es-AR', options);
}

export const formatDatoToLong = (dateString: Date) => {
  const date = new Date(dateString);

  // Configuración de formato para obtener el nombre del día, mes, y año en español
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', // Día de la semana completo
    day: 'numeric', // Día numérico
    month: 'long', // Mes completo
    year: 'numeric', // Año numérico
  };

  // Usar el formato en español
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};

export function addDaysToDate({
  dateInput,
  daysToAdd,
}: {
  dateInput: Date | string;
  daysToAdd: number;
}) {
  // Convertir el parámetro a un objeto Date
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) {
    throw new Error('La fecha proporcionada no es válida.');
  }

  date.setDate(date.getDate() + daysToAdd);

  return date;
}
