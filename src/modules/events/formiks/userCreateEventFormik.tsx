import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import { VALIDATION_MESSAGES } from '../../../constants/forms/messages';

interface CreateEventData {
  name: string;
  subtitle: string;
  photo: string;
  verticalPhoto: string;
  date: string;
  time: string;
  ubication: string;
  description: string;
}

const formatDateToSendValues = (date: string, time: string) => {
  // const dateTime = new Date(`${date}T${time}`).toISOString();
  // return dateTime;
  return new Date(`${date}T${time}`).toISOString();
};

const useCreateEventFormik = () => {
  // const navigate = useNavigate();

  return useFormik<CreateEventData>({
    initialValues: {
      verticalPhoto: '',
      photo: '',
      name: '',
      subtitle: '',
      date: '',
      time: '',
      ubication: '',
      description: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required(VALIDATION_MESSAGES.required),
      verticalPhoto: Yup.string().required(VALIDATION_MESSAGES.required),
      photo: Yup.string().required(VALIDATION_MESSAGES.required),
      subtitle: Yup.string().required(VALIDATION_MESSAGES.required),
      date: Yup.string().required(VALIDATION_MESSAGES.required),
      time: Yup.string().required(VALIDATION_MESSAGES.required),
      ubication: Yup.string().required(VALIDATION_MESSAGES.required),
      description: Yup.string().required(VALIDATION_MESSAGES.required),
    }),
    onSubmit: async (
      values: CreateEventData,
      formikHelpers: FormikHelpers<CreateEventData>,
    ) => {
      const formatValues = {
        ...values,
        date: formatDateToSendValues(values.date, values.time),
      };

      console.log('values', formatValues);
      formikHelpers.setSubmitting(true);
    },
  });
};

export { useCreateEventFormik };
