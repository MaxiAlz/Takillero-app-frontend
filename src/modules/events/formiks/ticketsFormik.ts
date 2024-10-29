import * as Yup from 'yup';

export const ticketsInitialValues = {
  name: '',
  description: '',
  price: 0,
  endOfSale: new Date(),
  startOfSale: new Date(),
  totalAmount: 0,
  maxAmountPerUser: 0,
  eventId: 0,
};

export const createTicketSchemaValidation = Yup.object({
  name: Yup.string()
    .required('El nombre es obligatorio')
    .max(100, 'El nombre no puede exceder los 100 caracteres'),
  description: Yup.string()
    .required('La descripción es obligatoria')
    .max(500, 'La descripción no puede exceder los 500 caracteres'),
  price: Yup.number()
    .required('El precio es obligatorio')
    .min(0, 'El precio no puede ser negativo'),
  startOfSale: Yup.date()
    .required('La fecha de inicio de venta es obligatoria')
    .typeError('Debe ser una fecha válida'),
  endOfSale: Yup.date()
    .required('La fecha de fin de venta es obligatoria')
    .typeError('Debe ser una fecha válida')
    .min(
      Yup.ref('startOfSale'),
      'La fecha de fin debe ser posterior a la de inicio',
    ),
  totalAmount: Yup.number()
    .required('La cantidad total es obligatoria')
    .min(1, 'Debe haber al menos un ticket disponible'),
  maxAmountPerUser: Yup.number()
    .required('La cantidad máxima por usuario es obligatoria')
    .min(1, 'Debe haber al menos un ticket por usuario')
    .max(Yup.ref('totalAmount'), 'No puede ser mayor que la cantidad total'),
  eventId: Yup.number()
    .required('El ID del evento es obligatorio')
    .positive('Debe ser un número positivo'),
});
