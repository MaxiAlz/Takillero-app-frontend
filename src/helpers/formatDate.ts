// RETORNA FORMATO: "14/01/2025"
export function formatDate(dateString: Date | string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
// RETORNA FORMATO: "14/01/2025"
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

  const day = String(date.getDate()).padStart(2, '0');
  const monthNames = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEP',
    'OCT',
    'NOV',
    'DIC',
  ];
  const month = monthNames[date.getMonth()];
  const year = String(date.getFullYear()).slice(-2);
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} - ${hour}:${minute}`;
}
// RETORNA FORMATO: "Lunes 14 de enero de 2025"
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
// RETORNA UNA NUEVA FECHA AÑADIENDO DÍAS
// dateInput: Date o string representando una fecha
// daysToAdd: número de días a añadir
// Devuelve un objeto Date con la fecha resultante
// Ejemplo de uso: addDaysToDate({ dateInput: '2025-01
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
// RETORNA FORMATO: "14/ENE/2025"
export const formatDateShortWithMonth = (dateString: Date | string): string => {
  const date = new Date(dateString);

  // Array de meses en mayúsculas y abreviados
  const months = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEP',
    'OCT',
    'NOV',
    'DIC',
  ];

  const day = String(date.getDate()).padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

// RETORNA FORMATO: "Lunes 14/AGO/2025"
export const formatSpanishDate = (dateString: Date | string): string => {
  const date = new Date(dateString);
  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const months = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEP',
    'OCT',
    'NOV',
    'DIC',
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName} ${day}/${month}/${year}`;
};
