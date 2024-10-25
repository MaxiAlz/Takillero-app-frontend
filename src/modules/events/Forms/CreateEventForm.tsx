import { Carousel } from 'flowbite-react';
import { RoundedFilledButton } from '../../../components';
import { MdSave } from 'react-icons/md';

interface CreateEventProps {
  onNextStep: () => void;
}

const CreateEventForm = ({ onNextStep }: CreateEventProps) => {
  return (
    <article>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-10 flex">
        <Carousel slide={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="mx-10">
        <div className="my-5">
          <label className="mb-3 block text-black dark:text-white text-3xl">
            Nombre del evento
          </label>
          <p>
            Escribí un título claro y descriptivo para indicar de qué se trata
            el evento.
          </p>
          <input
            type="text"
            placeholder="Nombre del evento"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="my-5">
          <label className="mb-3 block text-black dark:text-white text-3xl">
            Subtitulo
          </label>
          <p>
            Captá la atención con de tu publico con una frase corta, los
            visitante lo veran en la pagina principal y el detalle de tu
            evento.(140 caracteres como máximo){' '}
          </p>
          <input
            type="text"
            placeholder="Subtitulo"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="flex justify-between">
          <div className="w-full m-1">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Fecha y Hora
            </label>
            <div className="flex ">
              <input
                type="date"
                placeholder="Fecha del evento"
                className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              <input
                type="time"
                placeholder="Hora"
                className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="w-full m-1">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Ubicacion
            </label>

            <input
              type="text"
              placeholder="Ubicacion"
              className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="my-5">
          <label className="mb-3 block text-black dark:text-white text-3xl">
            Descripción del evento
          </label>
          <p className=" my-2">
            Brinda toda la informacion importante para tu publico que consideres
            necesaria para que tu publico este bien informado, puedes incluir
            datos importantes, descripcion sobre el lugar, estacionamiento,
            opciones de accesibilidad o cualquier detalle que ayude a los
            asistentes a saber que habra en tu evento. (maximo 2500 caracteres)
          </p>
          <textarea
            placeholder="Descripción de tu evento"
            className="w-full rounded-lg  border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
          />
        </div>

        <div className="flex w-full justify-end">
          <RoundedFilledButton
            text="Guardar y Continuar"
            icon={<MdSave />}
            onClick={onNextStep}
          />
        </div>
      </div>
    </article>
  );
};

export { CreateEventForm };
