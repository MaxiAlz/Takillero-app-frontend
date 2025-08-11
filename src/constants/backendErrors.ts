export const BACKEND_ERRORS = {
  // /api/TicketTypes
  EVENT_IS_FREE: 'El evento es gratis, no se pueden crear tickets pagos.',
  EVENT_IS_NOT_FREE: 'El evento es pago, no se pueden crear tickets gratuitos.',
  EVENT_NOT_FOUND: 'No se encontró el evento.',
  NO_TICKET_TYPES_FOUND: 'No se encontraron los tipos de tickets.',
  TICKET_TYPE_NOT_FOUND: 'No se encontró el tipo de entrada.',
  TICKET_TYPE_EXPIRED: 'El tipo de ticket expiró.',
  TICKET_SALE_NOT_ACTIVE: 'La venta no está activa.',
  INSUFFICIENT_TICKETS: 'No hay suficientes entradas.',
  EXCEEDS_MAX_PER_USER: 'Supera la cantidad máxima permitida por persona.',
  TICKET_TYPE_INVALID: 'El tipo de entrada es inválido.',
  INSUFFICIENT_STOCK: 'No hay suficiente stock para uno de los tickets.',
  USER_CREATION_FAILED: 'Falló la creación del usuario.',
  PERSONA_ERROR: 'Error al crear la persona.',
  CATEGORY_NOT_FOUND: 'No se encontró la categoría.',
  DATE_ERROR: 'La fecha de inicio es mayor a la de finalización.',
  EVENT_NOT_PUBLISHED: 'El evento no está publicado.',

  // /api/Scan/validate
  ACCESS_CODE_NOT_FOUND: 'No se encontró el código de acceso.',
  ACCESS_CODE_EXPIRED: 'El código expiró.',
  ERROR_COUNT_TICKETS: 'La cantidad de tickets no coincide con los encontrados.',
  TICKETS_NOT_FOUND: 'No se encontraron los tickets.',
  RESERVATION_INVALID_OR_EXPIRED: 'La reserva no existe o expiró.',

  // Otros
  UNKNOWN_ERROR: 'Ocurrió un error inesperado.',
  UKNOWN_ERROR: 'Error desconocido',
} as const;

export type BackendErrorCode = keyof typeof BACKEND_ERRORS;