import { FormEvent, useState } from 'react';
import { RoundedFilledButton } from '../../../components';
import { MdSave } from 'react-icons/md';

interface Ticket {
  title: string;
  quantity: number;
  description?: string;
  price: number;
  minOrder: number;
  maxOrder: number;
  startDate: string;
  endDate: string;
  assumeCost: boolean;
}

interface CreateTicketTypeFormProps {
  onSave: (ticketData: Ticket) => void;
}

export const CreateTicketTypeForm = ({ onSave }: CreateTicketTypeFormProps) => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [minOrder, setMinOrder] = useState(1);
  const [maxOrder, setMaxOrder] = useState(10);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [assumeCost, setAssumeCost] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ticketData: Ticket = {
      title,
      quantity,
      description,
      price,
      minOrder,
      maxOrder,
      startDate,
      endDate,
      assumeCost,
    };
    onSave(ticketData);
    // Reinicia los campos del formulario después de guardar
    setTitle('');
    setQuantity(0);
    setDescription('');
    setPrice(0);
    setMinOrder(1);
    setMaxOrder(10);
    setStartDate('');
    setEndDate('');
    setAssumeCost(false);
  };

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
      />
      <label className="mb-1 block text-black dark:text-white text-xl">
        Descripcion corta
      </label>
      <p>
        Agrega mas informacion para este tipo de entrada, de manera opcional
      </p>
      <input
        type="text"
        name=""
        placeholder="Ingreso preferencial"
        className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />

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
