import { useMutation } from '@tanstack/react-query';
import { purchaseEventProductsRepository } from '../repositories/pourchaseEventProductsRepository';
import { PurchaseEventProductsPayload } from '../types/homeTypes';

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
      console.error('Error al procesar pago con Mercado Pago:', error);
    },
  });
};
