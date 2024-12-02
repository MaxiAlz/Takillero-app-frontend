import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { PurchaseEventProductsPayload } from '../types/homeTypes';
import { VALIDATION_MESSAGES } from '../../../constants';
import { purchaseEventProductsRepository } from '../repositories/pourchaseEventProductsRepository';
import { usePurchaseEventProductsMutation } from '../hooks/usePourchaseEventProductsMutation';
import { useAlert } from '../../../context/AlertContext';
import { useNavigate } from 'react-router-dom';

interface PurchaseFormValues extends PurchaseEventProductsPayload {
  confirmEmail: string;
}

const usePurchaseFormik = (eventId: number) => {
  const purchaseMutation = usePurchaseEventProductsMutation(eventId);
  const { showDefaultToast, showErrorToast } = useAlert();
  const navigate = useNavigate();
  return useFormik<PurchaseFormValues>({
    initialValues: purchaseFormikInitialValues,
    validationSchema: purchaseFormikValidationSchema,
    onSubmit: async (
      values: PurchaseFormValues,
      formikHelpers: FormikHelpers<PurchaseFormValues>,
    ) => {
      formikHelpers.setSubmitting(true);
      const { confirmEmail, ...submitValues } = values;

      await purchaseMutation.mutate(submitValues, {
        onSuccess: (valueResponse, variables, context) => {
          showDefaultToast('¡Compra realizada con éxito!');
          // Aquí puedes agregar redirección si es necesario
          console.log('value', valueResponse);
          console.log('variables', variables);
          console.log('context', context);
          navigate(`/cart/${eventId}/pourchase/confirm`, {
            state: {
              purchaseDetails: submitValues,
              eventId: eventId,
              valueResponse: valueResponse,
            },
          });
          formikHelpers.resetForm();
        },
        onError: (error: any) => {
          showErrorToast(`Error al procesar la compra: ${error.message}`);
        },
      });
      purchaseEventProductsRepository.purchaseEventProducts(
        eventId,
        submitValues,
      );

      formikHelpers.setSubmitting(false);
    },
  });
};

export { usePurchaseFormik };

const purchaseFormikInitialValues = {
  ticketItems: [],
  email: '',
  confirmEmail: '',
  name: '',
  dni: '',
  paymentMethod: '',
};

const purchaseFormikValidationSchema = Yup.object({
  ticketItems: Yup.array().required(VALIDATION_MESSAGES.required),
  email: Yup.string()
    .email(VALIDATION_MESSAGES.email)
    .required(VALIDATION_MESSAGES.required),
  confirmEmail: Yup.string()
    .email(VALIDATION_MESSAGES.email)
    .required(VALIDATION_MESSAGES.required)
    .oneOf([Yup.ref('email')], VALIDATION_MESSAGES.confirmEmail),
  name: Yup.string().required(VALIDATION_MESSAGES.required),
  dni: Yup.string().required(VALIDATION_MESSAGES.required),
  paymentMethod: Yup.string().required(VALIDATION_MESSAGES.required),
});
