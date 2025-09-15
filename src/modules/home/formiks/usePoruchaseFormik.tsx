import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { PurchaseEventProductsPayload } from '../types/homeTypes';
import { VALIDATION_MESSAGES } from '../../../constants';
import {
  usePurchaseFreeEventMutation,
  useReservationEventMutation,
} from '../hooks/usePourchaseEventProductsMutation';
import { useAlert } from '../../../context/AlertContext';
import { useNavigate } from 'react-router-dom';
import {
  PourchaseFreeEventResponse,
  PourchaseResponse,
} from '../types/purchaseTypes';
import { AxiosError } from 'axios';
import { getBackendErrorMessage } from '../../../helpers/handleApiErrors';
import { secureLocalStorage } from '../../../helpers/secureLocalStorage';
import { RESERVE_DATA_STORAGE_KEY } from '../../../constants/storageKeys';

interface PurchaseFormValues extends PurchaseEventProductsPayload {
  confirmEmail: string;
}

const usePurchaseFormik = (eventId: number, hasPaidProducts: boolean) => {
  const reserveMutation = useReservationEventMutation(eventId);
  const purchaseFreeEventMutation = usePurchaseFreeEventMutation(eventId);
  const { showErrorToast, showDefaultToast, showSuccessToast } = useAlert();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { setEncryptedItem } = secureLocalStorage();

  return useFormik<PurchaseFormValues>({
    initialValues: purchaseFormikInitialValues,
    validationSchema: purchaseFormikValidationSchema,
    onSubmit: async (
      values: PurchaseFormValues,
      formikHelpers: FormikHelpers<PurchaseFormValues>,
    ) => {
      formikHelpers.setSubmitting(true);
      const { confirmEmail, ...submitValues } = values;

      if (!hasPaidProducts) {
        await purchaseFreeEventMutation.mutate(submitValues, {
          onSuccess: (valuePoruchaseResponse: PourchaseFreeEventResponse) => {
            console.log('valuePoruchaseResponse', valuePoruchaseResponse);

            showSuccessToast('¡Sus tickets han sido generado con Exito!');
            navigate(
              `/pourchase/payment/success?externalReference=${valuePoruchaseResponse.data.externalReference}`,
              {
                state: { eventData: valuePoruchaseResponse.data },
              },
            );
          },
          onError: (error: any) => {
            const err = error as AxiosError<{ message: string }>;
            const errorMessage = getBackendErrorMessage(
              err.response?.data.message,
            );
            showErrorToast(errorMessage);
          },
        });
      }

      if (hasPaidProducts) {
        await reserveMutation.mutate(submitValues, {
          onSuccess: (valuePoruchaseResponse: PourchaseResponse) => {
            const now = Date.now();
            const expiresAt = now + 10 * 60 * 1000;

            const dataToSave = { ...valuePoruchaseResponse.data, expiresAt };
            setEncryptedItem(RESERVE_DATA_STORAGE_KEY, dataToSave);
            showDefaultToast('¡Exelente! Continua con el pago de tu compra');
            navigate(`/cart/${eventId}/pourchase/payment`, {
              state: { reserveData: dataToSave },
            });
            // formikHelpers.resetForm();
          },
          onError: (error: any) => {
            const err = error as AxiosError<{ message: string }>;
            const errorMessage = getBackendErrorMessage(
              err.response?.data.message,
            );
            showErrorToast(errorMessage);
          },
        });
      }

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
  invitationCode: '',
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
  invitationCode: Yup.string(),
  // paymentMethod: Yup.string().required(VALIDATION_MESSAGES.required),
});
