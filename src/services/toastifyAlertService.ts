import { toast } from 'react-toastify';
import { AlertService } from '../context/AlertContext';
import { IoRocketSharp } from 'react-icons/io5';

export const toastifyAlertService: AlertService = {
  showSuccessToast: (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
    });
  },
  showErrorToast: (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
    });
  },
  showInfoToast: (message: string) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
    });
  },
  showDefaultToast: (message: string) => {
    toast(message, {
      position: 'top-right',
      autoClose: 3000,
      pauseOnHover: true,
      icon: IoRocketSharp,
      progressStyle: { backgroundColor: '#f3e9ce' },
      style: { backgroundColor: '#ec7800', color: 'white' },
      closeOnClick: true,
    });
  },
};
