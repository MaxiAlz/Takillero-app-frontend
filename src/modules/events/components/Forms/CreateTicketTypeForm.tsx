import {
  MdDelete,
  MdOutlinePriceChange,
  MdOutlineRefresh,
  MdSave,
} from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';
import { useAlert } from '../../../../context/AlertContext';
import { useTicketMutation } from '../../hooks/useTicketMutation';
import { useTicket } from '../../hooks';
import Loader from '../../../../components/Loader';
import { RoundedFilledButton } from '../../../../components';
import {
  createTicketSchemaValidation,
  ticketsInitialValues,
} from '../formiks/ticketsFormik';
import { getBackendErrorMessage } from '../../../../helpers/handleApiErrors';
import { formatDateForInput } from '../../../../helpers/formatDate';
import { TicketType } from '../../../home/types/homeTypes';

interface CreateTicketTypeFormProps {
  eventId: number;
  ticketId?: number;
  closeModal: () => void;
  refetchTickets?: () => void;
}

export const CreateTicketTypeForm = ({
  refetchTickets,
  eventId,
  closeModal,
  ticketId,
}: CreateTicketTypeFormProps) => {
  const { showSuccessToast, showErrorToast } = useAlert();
  const { ticket, isLoading } = useTicket(ticketId);
  const ticketMutation = useTicketMutation(ticketId);

  console.log('ticketId', ticketId);

  const formik = useFormik<TicketType>({
    enableReinitialize: true,
    initialValues: ticket
      ? {
          ...ticket,
          startOfSale: formatDateForInput(ticket.startOfSale),
          endOfSale: formatDateForInput(ticket.endOfSale),
        }
      : ticketsInitialValues,
    validationSchema: createTicketSchemaValidation,
    onSubmit: async (values, { resetForm, setTouched, validateForm }) => {
      const errors = await validateForm();
      if (Object.keys(errors).length > 0) {
        // Marca todos los campos como tocados para mostrar errores
        setTouched(
          Object.fromEntries(Object.keys(errors).map((key) => [key, true])),
          false,
        );
        return;
      }

      const payload = {
        ...values,
        eventId,
        startOfSale: new Date(values.startOfSale).toISOString(),
        endOfSale: new Date(values.endOfSale).toISOString(),
      };

      ticketMutation.mutate(payload, {
        onSuccess: () => {
          showSuccessToast(ticketId ? 'Ticket actualizado' : 'Ticket creado');
          refetchTickets?.();
          resetForm(); // 👈 Limpia el formulario al crear/actualizar
          closeModal();
        },
        onError: (error) => {
          const err = error as AxiosError<{ message: string }>;
          const errorMessage = getBackendErrorMessage(
            err.response?.data.message,
          );
          showErrorToast(
            ticketId ? 'Error al actualizar Ticket' : errorMessage,
          );
          refetchTickets?.();
          closeModal();
        },
      });
    },
  });

  if (isLoading) return <Loader />;

  // 🔢 Manejo de inputs numéricos: solo permite números positivos
  const handleNumericChange =
    (name: keyof TicketType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (/^\d*$/.test(newValue)) {
        formik.setFieldValue(name, newValue);
      }
    };

  // 📝 Manejo genérico de texto, fecha, etc.
  const handleTextChange =
    (name: keyof TicketType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      formik.setFieldValue(name, e.target.value);
    };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {/* Nombre y descripción */}
      <div className="w-full">
        <label className="block mt-2 text-black dark:text-white text-xl">
          Título de la entrada
        </label>
        <p>Agrega un título descriptivo como "Entrada general" o "Platea".</p>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={handleTextChange('name')}
          onBlur={formik.handleBlur}
          placeholder="Entrada general"
          className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none 
            focus:border-primary active:border-primary 
            dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-error">{formik.errors.name}</div>
        )}
      </div>

      <div className="w-full">
        <label className="block mt-2 text-black dark:text-white text-xl">
          Descripción corta
        </label>
        <p>
          Agrega más información para este tipo de entrada, de manera opcional.
        </p>
        <input
          type="text"
          name="description"
          value={formik.values.description}
          onChange={handleTextChange('description')}
          onBlur={formik.handleBlur}
          placeholder="Ingreso preferencial"
          className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none 
            focus:border-primary active:border-primary 
            dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>

      <hr className="border-gray-300" />

      {/* Cantidad y máximo por pedido */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <label className="mt-2 text-black dark:text-white text-xl flex items-center gap-2">
            <GiTicket size={22} /> Cantidad de tickets
          </label>
          <p>Cantidad total disponibles.</p>
          <input
            type="text"
            name="totalAmount"
            value={
              formik.values.totalAmount === 0
                ? ''
                : formik.values.totalAmount ?? ''
            }
            onChange={handleNumericChange('totalAmount')}
            inputMode="numeric"
            placeholder="100"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none 
              focus:border-primary active:border-primary 
              dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="w-full">
          <label className="block mt-2 text-black dark:text-white text-xl">
            Cantidad máxima por pedido
          </label>
          <p>Límite de entradas por pedido.</p>
          <input
            type="text"
            name="maxAmountPerUser"
            value={
              formik.values.maxAmountPerUser === 0
                ? ''
                : formik.values.maxAmountPerUser ?? ''
            }
            onChange={handleNumericChange('maxAmountPerUser')}
            inputMode="numeric"
            placeholder="10"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none 
              focus:border-primary active:border-primary 
              dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </section>

      <hr className="border-gray-300" />

      {/* Precio */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="w-full">
          <label className="mt-2 text-black dark:text-white text-xl flex items-center gap-2">
            <MdOutlinePriceChange size={22} /> Precio
          </label>
          <p>Valor de cada ticket.</p>
          <input
            type="text"
            name="price"
            value={formik.values.price === 0 ? '' : formik.values.price ?? ''}
            onChange={handleNumericChange('price')}
            inputMode="numeric"
            placeholder="10.000"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none 
              focus:border-primary active:border-primary 
              dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* {!!createTiketFormik.values.price && (
          <div className="flex flex-col ml-5">
            <span className="text-xl">Detalles:</span>
            <span>Cargo por servicio: 5%</span>
            <span>
              Tus espaectadores pagaran: $
              {createTiketFormik.values.price * 1.05}
            </span>
          </div>
        )} */}

        {formik.values.price == 0 && (
          <div className="flex flex-col ml-5">
            <span className="text-xl">Detalles:</span>
            <p>
              Si dejas este campo vacio tus entradas seran{' '}
              <span className="font-bold text-xl">¡Gratuitas!</span>
            </p>
          </div>
        )}
      </section>

      <hr className="border-gray-300" />

      {/* Fechas */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <label className="block mt-2 text-black dark:text-white text-xl">
            Fecha y hora de inicio
          </label>
          <p>Cuándo comenzará la venta de estas entradas.</p>
          <input
            type="datetime-local"
            name="startOfSale"
            value={formik.values.startOfSale}
            onChange={handleTextChange('startOfSale')}
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none 
              focus:border-primary active:border-primary 
              dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="w-full">
          <label className="block mt-2 text-black dark:text-white text-xl">
            Fecha y hora de finalización
          </label>
          <p>Cuándo finalizará la venta de estas entradas.</p>
          <input
            type="datetime-local"
            name="endOfSale"
            value={formik.values.endOfSale}
            onChange={handleTextChange('endOfSale')}
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none 
              focus:border-primary active:border-primary 
              dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </section>

      <hr className="border-gray-300" />

      {/* Botones */}
      <div
        className={`flex w-full ${
          ticketId ? 'justify-between' : 'justify-end'
        }`}
      >
        {ticketId && (
          <RoundedFilledButton
            className="bg-error"
            text="Eliminar Ticket"
            icon={<MdDelete size={25} />}
            onClick={() => {
              // Confirmación antes de eliminar
            }}
            isLoading={ticketMutation.isPending}
          />
        )}
        <RoundedFilledButton
          text={ticketId ? 'Actualizar Ticket' : 'Crear Ticket'}
          icon={
            ticketId ? <MdOutlineRefresh size={25} /> : <MdSave size={25} />
          }
          type="submit"
          isLoading={ticketMutation.isPending}
        />
      </div>
    </form>
  );
};
