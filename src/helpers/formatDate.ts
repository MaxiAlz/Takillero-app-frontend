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
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function formatFullDate(isoString: Date | string): string {
  const date = new Date(isoString);

  // Extraer día, mes y año
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11
  const year = date.getUTCFullYear().toString().slice(2); // Obtener los últimos dos dígitos del año

  // Extraer horas y minutos
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}:${minutes}`;
}

export const formatDatoToLong = (dateString: Date) => {
  const date = new Date(dateString);

  // Configuración de formato para obtener el nombre del día, mes, y año en español
  const options = {
    weekday: 'long', // Día de la semana completo
    day: 'numeric', // Día numérico
    month: 'long', // Mes completo
    year: 'numeric', // Año numérico
  };

  // Usar el formato en español
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};
