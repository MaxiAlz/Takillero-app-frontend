import {
  MdDelete,
  MdOutlinePriceChange,
  MdOutlineRefresh,
  MdSave,
} from 'react-icons/md';
import { useFormik } from 'formik';
import {
  createTicketSchemaValidation,
  ticketsInitialValues,
} from '../formiks/ticketsFormik';
import { GiTicket } from 'react-icons/gi';
import { useTicketMutation } from '../../hooks/useTicketMutation';
import { useAlert } from '../../../../context/AlertContext';
import { useTicket } from '../../hooks';
import { TicketType } from '../../interfaces/event';
import Loader from '../../../../components/Loader';
import { RoundedFilledButton } from '../../../../components';
import { getBackendErrorMessage } from '../../../../helpers/handleApiErrors';
import { AxiosError } from 'axios';

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
  const ticketMutation = useTicketMutation(ticketId);
  const { showSuccessToast, showErrorToast } = useAlert();
  const { ticket, isLoading /* error */ } = useTicket(ticketId);

  const createTiketFormik = useFormik<TicketType>({
    enableReinitialize: true,
    initialValues: ticket || ticketsInitialValues,
    validationSchema: createTicketSchemaValidation,
    onSubmit: async (values) => {
      const payload = {
        ...values,
        eventId: eventId,
        startOfSale: new Date(values.startOfSale).toISOString(),
        endOfSale: new Date(values.endOfSale).toISOString(),
      };

      ticketMutation.mutate(payload, {
        onSuccess: () => {
          showSuccessToast(ticketId ? 'Ticket actualizado' : 'Ticket creado');
          closeModal();
          refetchTickets?.();
        },
        onError: (error) => {
          const err = error as AxiosError<{ message: string }>;
          const errorMessage = getBackendErrorMessage(
            err.response?.data.message,
          );
          showErrorToast(
            ticketId ? 'Error al actualizar Ticket' : errorMessage,
          );
          closeModal();
          refetchTickets?.();
          // alert(error);
        },
      });
    },
  });

  if (isLoading) return <Loader />;

  return (
    <form onSubmit={createTiketFormik.handleSubmit}>
      {/* <div className="flex justify-around">
        <RoundedFilledButton text="Gratuita" disabled />
        <RoundedFilledButton text="De Pago" disabled />
        <RoundedFilledButton text="Donacion" disabled />
      </div> */}

      {/* <div className="my-4 border-t border-gray-300"></div> */}

      <label className="mt-1 block text-black dark:text-white text-xl">
        Titulo de la entrada
      </label>
      <p>
        Agrega un titulo descriptivo como por ej: "Entrada general" o "Platea".
      </p>
      <input
        type="text"
        name="name"
        placeholder="Entrada general"
        className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        onChange={createTiketFormik.handleChange}
        onBlur={createTiketFormik.handleBlur}
        value={createTiketFormik.values.name}
      />
      {createTiketFormik.errors.name && createTiketFormik.touched.name ? (
        <div className="text-error">{createTiketFormik.errors.name}</div>
      ) : null}
      <label className="mt-1 block text-black dark:text-white text-xl">
        Descripcion corta
      </label>
      <p>
        Agrega mas informacion para este tipo de entrada, de manera opcional
      </p>
      <input
        type="text"
        name="description"
        placeholder="Ingreso preferencial"
        className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        onChange={createTiketFormik.handleChange}
        onBlur={createTiketFormik.handleBlur}
        value={createTiketFormik.values.description}
      />
      {createTiketFormik.errors.description &&
      createTiketFormik.touched.description ? (
        <div className="text-error">{createTiketFormik.errors.description}</div>
      ) : null}

      <div className="my-4 border-t border-gray-300"></div>

      {/* flex items-center justify-between align-bottom */}
      <section className="grid grid-cols-2 gap-4">
        <div className="w-full mr-1">
          <label className="mb-1 block text-black dark:text-white text-xl">
            Cantidad de tickets
          </label>
          <p>Cantidad total disponibles.</p>
          <div className="relative flex items-center">
            <GiTicket
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
              size={24}
            />
            <input
              type="number"
              name="totalAmount"
              placeholder="100"
              className="w-full pl-10 rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={createTiketFormik.handleChange}
              onBlur={createTiketFormik.handleBlur}
              value={createTiketFormik.values.totalAmount}
            />
          </div>
          {createTiketFormik.errors.totalAmount &&
          createTiketFormik.touched.totalAmount ? (
            <div className="text-error">
              {createTiketFormik.errors.totalAmount}
            </div>
          ) : null}
        </div>
        {/* <div className="mx-4 h-16 border-l border-gray-300"></div> */}
        <div className="w-full ml-2">
          <label className="mb-1 block text-black dark:text-white text-xl">
            Cantidad maxima por pedido
          </label>
          <p>Límite de entradas por pedido.</p>
          <input
            type="number"
            name="maxAmountPerUser"
            placeholder="10"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={createTiketFormik.handleChange}
            onBlur={createTiketFormik.handleBlur}
            value={createTiketFormik.values.maxAmountPerUser}
          />
          {createTiketFormik.errors.maxAmountPerUser &&
          createTiketFormik.touched.maxAmountPerUser ? (
            <div className="text-error">
              {createTiketFormik.errors.maxAmountPerUser}
            </div>
          ) : null}
        </div>
      </section>

      <div className="my-4 border-t border-gray-300"></div>

      <section className="grid grid-cols-2">
        <div className="w-full ml-1">
          <label className="mb-1 block text-black dark:text-white text-xl">
            Pecio
          </label>
          <p>Valor de cada ticket</p>

          <div className="relative flex items-center">
            <MdOutlinePriceChange
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
              size={24}
            />
            <input
              type="number"
              name="price"
              placeholder="10.000"
              className="w-full pl-10 rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black dark:text-white outline-none transition focus:border-primary dark:focus:border-primary dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              onChange={createTiketFormik.handleChange}
              onBlur={createTiketFormik.handleBlur}
              value={createTiketFormik.values.price}
            />
          </div>
          {createTiketFormik.errors.price && createTiketFormik.touched.price ? (
            <div className="text-error">{createTiketFormik.errors.price}</div>
          ) : null}
        </div>
        {!!createTiketFormik.values.price && (
          <div className="flex flex-col ml-5">
            <span className="text-xl">Detalles:</span>
            <span>Cargo por servicio: 5%</span>
            <span>
              Tus espaectadores pagaran: $
              {createTiketFormik.values.price * 1.05}
            </span>
          </div>
        )}

        {createTiketFormik.values.price == 0 && (
          <div className="flex flex-col ml-5">
            <span className="text-xl">Detalles:</span>
            <p>
              Tus entradas seran{' '}
              <span className="font-bold text-xl">¡Gratuitas!</span>
            </p>
          </div>
        )}
      </section>

      <div className="my-4 border-t border-gray-300"></div>

      <section className="grid grid-cols-2 gap-4">
        <div className="w-full mr-1">
          <label className="mb-3 block text-black dark:text-white text-xl">
            Fecha y Hora de inicio
          </label>
          <p>
            Ingresa Cuando y a que hora comenzara la venta de estas entradas
          </p>
          <div>
            <div>
              <input
                type="datetime-local"
                name="startOfSale"
                placeholder="Fecha del evento"
                className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={createTiketFormik.handleChange}
                onBlur={createTiketFormik.handleBlur}
                value={createTiketFormik.values.startOfSale}
              />
              {createTiketFormik.errors.startOfSale &&
              createTiketFormik.touched.startOfSale ? (
                <div className="text-error">
                  {createTiketFormik.errors.startOfSale}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="w-full ml-1">
          <label className="mb-3 block text-black dark:text-white text-xl">
            Fecha y Hora de Finalizacion.
          </label>
          <p>
            Ingresa Cuando y a que hora finalizara la venta de estas entradas
          </p>
          <div className="">
            <div>
              <input
                type="datetime-local"
                name="endOfSale"
                placeholder="Fecha del evento"
                className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={createTiketFormik.handleChange}
                onBlur={createTiketFormik.handleBlur}
                value={
                  typeof createTiketFormik.values.endOfSale === 'string'
                    ? createTiketFormik.values.endOfSale
                    : '' // Asegura que sea una cadena vacía si no está definida
                }
              />
              {createTiketFormik.errors.endOfSale &&
              createTiketFormik.touched.endOfSale ? (
                <div className="text-error">
                  {createTiketFormik.errors.endOfSale}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <div className="my-4 border-t border-gray-300"></div>

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
              // Aquí confirmas y llamas a ticketMutation.mutate para DELETE
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
