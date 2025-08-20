import { useMutation } from '@tanstack/react-query';
import { purchaseEventProductsRepository } from '../repositories/pourchaseEventProductsRepository';
import { PurchaseEventProductsPayload } from '../types/homeTypes';
import { AxiosError } from 'axios';
import { getBackendErrorMessage } from '../../../helpers/handleApiErrors';
import { useAlert } from '../../../context/AlertContext';

type PayPurchaseMpResponse = {
  message: string;
  data: {
    initPoint: string;
  };
};

export const useReservationEventMutation = (eventId: number) => {
  return useMutation({
    mutationFn: async (payload: PurchaseEventProductsPayload) => {
      return await purchaseEventProductsRepository.reservationEventProducts(
        eventId,
        payload,
      );
    },
  });
};

export const usePayPurchaseByMp = () => {
  const { showErrorToast } = useAlert();
  return useMutation<PayPurchaseMpResponse, Error, string>({
    mutationFn: async (tokenReserve: string) => {
      return await purchaseEventProductsRepository.payPurchaseByMp(
        tokenReserve,
      );
    },
    onSuccess: (data) => {
      if (data?.data?.initPoint) {
        // 🔹 Redirigir automáticamente al checkout de Mercado Pago
        window.location.href = data.data.initPoint;
      }
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = getBackendErrorMessage(err.response?.data.message);
      showErrorToast(
        `Error al procesar pago con Mercado Pago:: ${errorMessage}`,
      );
    },
  });
};
