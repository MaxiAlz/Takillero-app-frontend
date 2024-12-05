export const CONFIRMATION_MESSAGES = {
  deleteItem: '¿Estás seguro de que deseas eliminar este elemento?',
  successfulSave: 'Los cambios se han guardado exitosamente.',
};

export const VALIDATION_MESSAGES = {
  email: 'Por favor ingresa un correo electrónico válido.',
  confirmEmail: 'Los emails no coinciden.',
  password: 'La contraseña debe tener al menos 8 caracteres.',
  required: 'Este campo es obligatorio.',
  categoryPositive: 'Debes seleccionar una categoría válida',
};

export const FIELD_PLACEHOLDERS = {
  email: 'Ingresa tu correo electrónico',
  password: 'Ingresa tu contraseña',
};

export const TEXT_TICKET_TYPE = {
  free: 'Los participantes podrán obtener tickets sin costo. Perfecto para eventos sin fines de lucro o invitaciones.',
  paid: 'Los participantes deberán pagar por las entradas. Ideal para eventos con entradas pagas.',
  donation:
    'Los participantes podrán elegir cuánto pagar. Perfecto para eventos de recaudación de fondos.',
  undefined: 'Por favor, selecciona un tipo de entrada.',
};

export const TICKET_TYPE_LABELS = {
  free: 'Gratuita',
  paid: 'Pago',
  donation: 'Donación',
} as const;
