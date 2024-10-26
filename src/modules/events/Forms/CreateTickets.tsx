import { RoundedFilledButton } from '../../../components';
import { MdSave } from 'react-icons/md';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList } from 'react-icons/hi';
import { GiTicket } from 'react-icons/gi';
import {  MdEditNote } from 'react-icons/md';

interface CreateTicketsProps {
  onNextStep: () => void;
}

const CreateTickets = ({ onNextStep }: CreateTicketsProps) => {
  return (
    <article className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-10 w-full flex">
      <Tabs variant="underline">
        <Tabs.Item active title="Crear entradas" icon={GiTicket}>
          <h3 className="font-bold my-2 opacity-85 text-black dark:text-white text-3xl">
            Aqui podras crear y administrar las entradas de tu eventos
          </h3>
          <form onSubmit={() => {}} className=" ">
            <div className="my-5">
              <label className="mb-3 block text-black dark:text-white text-3xl">
                Tipo de entrada
              </label>
              <p>
                Escribí un título claro y descriptivo para indicar de qué se
                trata el evento.
              </p>
              <input
                type="text"
                name="name"
                placeholder="Nombre del evento"
                className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                // onChange={createEventFormik.handleChange}
                // onBlur={createEventFormik.handleBlur}
                // value={createEventFormik.values.name}
              />
              {/* {errors.name && touched.name ? (
            <div className="text-error">{errors.name}</div>
          ) : null} */}
            </div>
            <div className="flex w-full justify-end">
              <RoundedFilledButton
                text="Guardar Tickets y Continuar"
                icon={<MdSave />}
                type="submit"
                onClick={onNextStep}
              />
            </div>
          </form>
        </Tabs.Item>
        <Tabs.Item className="uppercase" title="Reservar" icon={MdEditNote}>
          <h3 className="font-bold my-2 opacity-85 text-black dark:text-white text-3xl">
            Aqui podras hacer reservas de entradas para un publico especial
          </h3>
        </Tabs.Item>
        <Tabs.Item title="Configuraciones" icon={HiAdjustments}>
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
      </Tabs>
    </article>
  );
};

export default CreateTickets;
