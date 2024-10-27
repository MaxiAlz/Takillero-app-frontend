import { Carousel } from 'flowbite-react';
import { RoundedFilledButton } from '../../../components';
import { MdSave } from 'react-icons/md';
import { useCreateEventFormik } from '../formiks/userCreateEventFormik';

interface CreateEventProps {
  onNextStep: () => void;
}

const CreateEventForm = ({ onNextStep }: CreateEventProps) => {
  const createEventFormik = useCreateEventFormik();
  const { errors, touched } = createEventFormik;

  console.log('createEventFormik', createEventFormik);

  function autoResize(e: any) {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

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
        </Carousel>
      </div>

      <form onSubmit={createEventFormik.handleSubmit} className="mx-10 ">
        <div className="flex justify-between mt-5">
          <div className="w-full">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Foto vertical
            </label>
            <input
              name="verticalPhoto"
              type="text"
              placeholder="photo url"
              className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={createEventFormik.handleChange}
              onBlur={createEventFormik.handleBlur}
              value={createEventFormik.values.verticalPhoto}
            />
            {errors.verticalPhoto && touched.verticalPhoto ? (
              <div className="text-error">{errors.verticalPhoto}</div>
            ) : null}
          </div>
          <div className="w-full ms-2">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Foto cuadrada
            </label>
            <input
              type="text"
              name="photo"
              placeholder=" Foto cuadrada url"
              className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={createEventFormik.handleChange}
              onBlur={createEventFormik.handleBlur}
              value={createEventFormik.values.photo}
            />
            {errors.photo && touched.photo ? (
              <div className="text-error">{errors.photo}</div>
            ) : null}
          </div>
        </div>
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
            name="name"
            placeholder="Nombre del evento"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={createEventFormik.handleChange}
            onBlur={createEventFormik.handleBlur}
            value={createEventFormik.values.name}
          />
          {errors.name && touched.name ? (
            <div className="text-error">{errors.name}</div>
          ) : null}
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
            name="subtitle"
            placeholder="Subtitulo"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={createEventFormik.handleChange}
            onBlur={createEventFormik.handleBlur}
            value={createEventFormik.values.subtitle}
          />
          {errors.subtitle && touched.subtitle ? (
            <div className="text-error">{errors.subtitle}</div>
          ) : null}
        </div>

        <div className="flex justify-between">
          <div className="w-full m-1">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Fecha y Hora
            </label>
            <div className="flex ">
              <div>
                <input
                  type="date"
                  name="date"
                  placeholder="Fecha del evento"
                  className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  onChange={createEventFormik.handleChange}
                  onBlur={createEventFormik.handleBlur}
                  value={createEventFormik.values.date}
                />
                {errors.date && touched.date ? (
                  <div className="text-error">{errors.date}</div>
                ) : null}
              </div>
              <div className="mx-5">
                <input
                  type="time"
                  name="time"
                  placeholder="Hora"
                  className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  onChange={createEventFormik.handleChange}
                  onBlur={createEventFormik.handleBlur}
                  value={createEventFormik.values.time}
                />
                {errors.time && touched.time ? (
                  <div className="text-error">{errors.time}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full m-1">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Ubicacion
            </label>

            <input
              type="text"
              name="ubication"
              placeholder="Ubicacion"
              className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={createEventFormik.handleChange}
              onBlur={createEventFormik.handleBlur}
              value={createEventFormik.values.ubication}
            />
            {errors.ubication && touched.ubication ? (
              <div className="text-error">{errors.ubication}</div>
            ) : null}
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
            name="description"
            maxLength={2500}
            className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={(e) => {
              createEventFormik.handleChange(e);
              autoResize(e);
            }}
            onBlur={createEventFormik.handleBlur}
            value={createEventFormik.values.description}
          />
          <div className="flex justify-between">
            {errors.description && touched.description ? (
              <div className="text-error w-full">{errors.description}</div>
            ) : null}
            <div className="w-full text-right text-sm mt-1">
              {createEventFormik.values.description.length} / 2500 caracteres
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <RoundedFilledButton
            text="Guardar y Continuar"
            icon={<MdSave />}
            // type="submit"
            onClick={onNextStep}
          />
        </div>
      </form>
    </article>
  );
};

export { CreateEventForm };
