import { BACKEND_ERRORS, BackendErrorCode } from '../constants/backendErrors';

export function getBackendErrorMessage(message: unknown): string {
  if (typeof message === 'string' && message in BACKEND_ERRORS) {
    return BACKEND_ERRORS[message as BackendErrorCode];
  }

  return 'Ocurrió un error inesperado.';
}
