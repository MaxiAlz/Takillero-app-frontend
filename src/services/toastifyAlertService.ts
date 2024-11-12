import { toast } from 'react-toastify';
import { AlertService } from '../context/AlertContext';

export const toastifyAlertService: AlertService = {
  showSuccessToast: (message: string) => {
    toast.success(message, { position: 'top-right', autoClose: 3000 });
  },
  showErrorToast: (message: string) => {
    toast.error(message, { position: 'top-right', autoClose: 3000 });
  },
  showDefaultToast: (message: string) => {
    toast.info(message, { position: 'top-right', autoClose: 3000 });
  },
};
