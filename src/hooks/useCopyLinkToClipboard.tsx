import { useAlert } from '../context/AlertContext';

/**
 * Hook para copiar el enlace actual del navegador al portapapeles.
 * Utiliza `useAlert` para mostrar notificaciones de éxito o error.
 *
 * @returns {object} copyLink - Función para copiar el enlace.
 *
 * @example
 * const { copyLink } = useCopyLinkToClipboard();
 * <button onClick={copyLink}>Copiar Enlace</button>
 */
const useCopyLinkToClipboard = () => {
  const { showDefaultToast, showErrorToast } = useAlert();

  const copyLink = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL) // Copiar al portapapeles
      .then(() => {
        showDefaultToast('¡Enlace copiado al portapapeles!');
        alert('¡Enlace copiado al portapapeles!'); // Mostrar alerta
      })
      .catch((err) => {
        showErrorToast('Error al copiar el enlace.');
        console.error('Error al copiar el enlace:', err);
      });
  };
  return { copyLink };
};

export { useCopyLinkToClipboard };
