import React, { createContext, ReactNode, useContext } from 'react';
import { toastifyAlertService } from '../services/toastifyAlertService';

export interface AlertService {
  showSuccessToast: (message: string) => void;
  showErrorToast: (message: string) => void;
  showDefaultToast: (message: string) => void;
}

interface AlertProviderProps {
  children: ReactNode;
}

const AlertContext = createContext<AlertService | undefined>(undefined);

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  return (
    <AlertContext.Provider value={toastifyAlertService}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertService => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert debe ser usado dentro de un AlertProvider');
  }
  return context;
};
