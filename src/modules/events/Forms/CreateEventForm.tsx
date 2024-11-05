import { FileInput, Label } from 'flowbite-react';
import { RoundedFilledButton, StickyBanner } from '../../../components';
import { MdOutlineRefresh, MdSave } from 'react-icons/md';
import { useFormik } from 'formik';
import { EventLookLike } from '../interfaces/event';
import { useEventMutation } from '../hooks/useEventMutation';
import {
  eventFormikInitialValues,
  eventFormikValidationEshema,
  formatDateToSendValues,
} from '../formiks/EventFormik';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdCloudUpload } from 'react-icons/io';
import { INFO_MESSAGES } from '../../../constants';
import { useGetEventById } from '../hooks/useGetEventById';
import Loader from '../../../common/Loader';
import { useEffect } from 'react';

const CreateEventForm = () => {
  const { eventId } = useParams();
  const eventMutation = useEventMutation(+eventId!);
  const navigate = useNavigate();

  // Solo ejecuta useGetEventById si existe un eventId
  const { eventData, isLoading, isError } = eventId
    ? useGetEventById(+eventId)
    : { eventData: null, isLoading: false, isError: false };

  const {
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    setValues,
  } = useFormik<EventLookLike>({
    initialValues: eventData || eventFormikInitialValues,
    validationSchema: eventFormikValidationEshema,

    onSubmit: async (values: EventLookLike) => {
      const formatValues = {
        ...values,
        date: formatDateToSendValues(values.date, values.time),
      };

      eventMutation.mutate(formatValues, {
        onSuccess(data) {
          navigate(`/panel/events/create/${data.id}/tickets`);
        },
        onError(error) {
          alert(error);
        },
      });
    },
  });

  useEffect(() => {
    if (eventId && eventData) {
      const { formattedDate, formattedTime } = formatEventDate(eventData.date);
      setValues({
        ...eventFormikInitialValues,
        ...eventData,
        date: formattedDate,
        time: formattedTime,
      });
    }
  }, [eventId, eventData, setValues]);

  function autoResize(e: any) {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const formattedTime = date.toTimeString().slice(0, 5); // HH:MM
    return { formattedDate, formattedTime };
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className="flex w-full justify-center items-center">
        No se pudo encontrar el evento :(
      </div>
    );

  return (
    <>
      (
      <article>
        <div className="m-4 mx-15">
          <StickyBanner
            text={INFO_MESSAGES.EVENTS_WARNING_BANNER}
            iconSize={50}
          />
        </div>
        <div className="flex w-full justify-center ">
          <div className="flex w-10/12 items-center justify-center ">
            <Label
              htmlFor="dropzone-file"
              className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <IoMdCloudUpload size={50} />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">
                    Carga una imagen de portada
                  </span>{' '}
                  o arrasta
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG o GIF (MAX. 800x400px)
                </p>
              </div>
              <FileInput id="dropzone-file" className="hidden" />
            </Label>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mx-10 ">
          <div className="flex justify-between mt-5">
            <div className="w-full">
              <label className="mb-3 block text-black dark:text-white text-3xl">
                Foto Horizontal
              </label>
              <p>Foto cuadrada formato 9:16</p>
              <input
                name="verticalPhoto"
                type="text"
                placeholder="photo url"
                className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.verticalPhoto}
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.photo}
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subtitle}
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
              <p>Cuando se dara inicio a este evento:</p>
              <div className="flex">
                <div>
                  <input
                    type="date"
                    name="date"
                    placeholder="Fecha del evento"
                    className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                  />
                  {errors.time && touched.time ? (
                    <div className="text-error">{errors.time}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="w-full m-1">
              <label className="mb-3 block text-black dark:text-white text-3xl">
                Venue / Locacion
              </label>
              <p>Ingrese el nombre del establecimiento</p>
              <input
                type="text"
                name="venue"
                placeholder="Teatro Girardi"
                className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.venue}
              />
              {errors.venue && touched.venue ? (
                <div className="text-error">{errors.venue}</div>
              ) : null}
            </div>
          </div>

          <div className="w-full m-1">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Ubicacion
            </label>
            <p>Describe la direccion completa del establecimiento</p>
            <input
              type="text"
              name="location"
              placeholder="Av.Belgrano 123 - SFV Catamarca."
              className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.location}
            />
            {errors.location && touched.location ? (
              <div className="text-error">{errors.location}</div>
            ) : null}
          </div>

          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Descripción del evento
            </label>
            <p className=" my-2">
              Brinda toda la informacion importante para tu publico que
              consideres necesaria para que tu publico este bien informado,
              puedes incluir datos importantes, descripcion sobre el lugar,
              estacionamiento, opciones de accesibilidad o cualquier detalle que
              ayude a los asistentes a saber que habra en tu evento. (maximo
              2500 caracteres)
            </p>
            <textarea
              placeholder="Descripción de tu evento"
              name="description"
              maxLength={2500}
              className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={(e) => {
                handleChange(e);
                autoResize(e);
              }}
              onBlur={handleBlur}
              value={values.description}
            />
            <div className="flex justify-between">
              {errors.description && touched.description ? (
                <div className="text-error w-full">{errors.description}</div>
              ) : null}
              <div className="w-full text-right text-sm mt-1">
                {values.description.length} / 2500 caracteres
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <RoundedFilledButton
              text={eventId ? 'Actualizar y Continuar' : 'Guardar y Continuar'}
              icon={
                eventId ? <MdOutlineRefresh size={25} /> : <MdSave size={25} />
              }
              type="submit"
              isLoading={eventMutation.isPending}
            />
          </div>
        </form>
      </article>
      )
    </>
  );
};

export { CreateEventForm };
