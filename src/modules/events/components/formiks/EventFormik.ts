import * as Yup from 'yup';
import { VALIDATION_MESSAGES } from '../../../../constants';

export const formatDateToSendValues = (date: string, time: string) => {
  return new Date(`${date}T${time}`).toISOString();
};

export const eventFormikInitialValues = {
  verticalPhoto: '',
  photo: '',
  name: '',
  subtitle: '',
  date: '',
  time: '',
  venue: '',
  location: '',
  description: '',
  categoryId: 0,
};

export const eventFormikValidationEshema = Yup.object({
  name: Yup.string().required(VALIDATION_MESSAGES.required),
  verticalPhoto: Yup.string().required(VALIDATION_MESSAGES.required),
  photo: Yup.string().required(VALIDATION_MESSAGES.required),
  subtitle: Yup.string().required(VALIDATION_MESSAGES.required),
  date: Yup.string().required(VALIDATION_MESSAGES.required),
  time: Yup.string().required(VALIDATION_MESSAGES.required),
  venue: Yup.string().required(VALIDATION_MESSAGES.required),
  location: Yup.string().required(VALIDATION_MESSAGES.required),
  description: Yup.string().required(VALIDATION_MESSAGES.required),
  categoryId: Yup.number().required(VALIDATION_MESSAGES.required),
});
