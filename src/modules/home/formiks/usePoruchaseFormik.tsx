import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { PurchaseEventProductsPayload } from '../types/homeTypes';
import { VALIDATION_MESSAGES } from '../../../constants';
import { usePurchaseEventProductsMutation } from '../hooks/usePourchaseEventProductsMutation';
import { useAlert } from '../../../context/AlertContext';
import { useNavigate } from 'react-router-dom';
import { PourchaseResponse } from '../types/purchaseTypes';
import { useDispatch } from 'react-redux';
import { setPurchaseData } from '../../../redux/slices/purchase/purchaseSlice';

interface PurchaseFormValues extends PurchaseEventProductsPayload {
  confirmEmail: string;
}

const usePurchaseFormik = (eventId: number) => {
  const purchaseMutation = usePurchaseEventProductsMutation(eventId);
  const { showErrorToast, showSuccessToast } = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        onSuccess: (valuePoruchaseResponse: PourchaseResponse) => {
          showSuccessToast('¡Compra realizada con éxito!');
          dispatch(setPurchaseData(valuePoruchaseResponse.data));
          navigate(`/cart/${eventId}/pourchase/confirm`, {});
          formikHelpers.resetForm();
        },
        onError: (error: any) => {
          showErrorToast(`Error al procesar la compra: ${error.message}`);
        },
      });
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
