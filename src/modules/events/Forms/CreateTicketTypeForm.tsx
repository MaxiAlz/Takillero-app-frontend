import { RoundedFilledButton } from '../../../components';
import { MdSave } from 'react-icons/md';
import { TicketType } from '../interfaces/event';
import { useFormik } from 'formik';
import {
  createTicketSchemaValidation,
  ticketsInitialValues,
} from '../formiks/ticketsFormik';

interface CreateTicketTypeFormProps {
  onSave: (ticketData: TicketType) => void;
}

// TODO: Continuar con el formualrio de creacion de tickets y crear Mutation
export const CreateTicketTypeForm = ({ onSave }: CreateTicketTypeFormProps) => {
  const createTiketFormik = useFormik<TicketType>({
    initialValues: ticketsInitialValues,
    validationSchema: createTicketSchemaValidation,

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log('Datos del formulario enviados:', values);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={() => {}} className=" ">
      <label className="mb-1 block text-black dark:text-white text-xl">
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
      <label className="mb-1 block text-black dark:text-white text-xl">
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

      <section className="flex items-center justify-between align-bottom">
        <div className="w-full mr-1">
          <label className="mb-1 block text-black dark:text-white text-xl">
            Cantidad de tickets
          </label>
          <p>Cantidad disponible</p>
          <input
            type="number"
            name="amount"
            placeholder="100"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        {/* <div className="mx-4 h-16 border-l border-gray-300"></div> */}
        <div className="w-full ml-1">
          <label className="mb-1 block text-black dark:text-white text-xl">
            Pecio
          </label>
          <p>Valor de cada ticket</p>
          <input
            type="number"
            name="amount"
            placeholder="$ 100.000"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </section>
      <input type="checkbox" />
      <span>Asumir el costo de venta</span>

      <div className="my-4 border-t border-gray-300"></div>

      <section className="flex">
        <div className="w-full mr-1">
          <label className="mb-1 block text-black dark:text-white text-xl">
            Cantidad minima por pedido
          </label>
          <p>
            Ingresa cuanto es el minimo de entradas que se puede comprar por
            pedido
          </p>
          <input
            type="number"
            name="amount"
            placeholder="1"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="w-full ml-2">
          <label className="mb-1 block text-black dark:text-white text-xl">
            Cantidad maxima por pedido
          </label>
          <p>
            Ingresa cuanto es el maximo de entradas que se puede comprar por
            pedido
          </p>
          <input
            type="number"
            name="amount"
            placeholder="10"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </section>

      <div className="my-4 border-t border-gray-300"></div>

      <section className="flex">
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
                name="date"
                placeholder="Fecha del evento"
                className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
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
                name="date"
                placeholder="Fecha del evento"
                className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="my-4 border-t border-gray-300"></div>

      <div className="flex w-full justify-end">
        <RoundedFilledButton
          text="Crea Ticket"
          icon={<MdSave />}
          type="submit"
          onClick={() => {}}
        />
      </div>
    </form>
  );
};
