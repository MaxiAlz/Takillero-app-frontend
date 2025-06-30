import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { FileInput, Label } from 'flowbite-react';
import {
  MdAnnouncement,
  MdCreateNewFolder,
  MdOutlineCreateNewFolder,
  MdOutlineImage,
  MdOutlineRefresh,
  MdSave,
} from 'react-icons/md';
import {
  eventFormikInitialValues,
  eventFormikValidationEshema,
  formatDateToSendValues,
} from '../formiks/EventFormik';
import { IoMdCloudUpload } from 'react-icons/io';
import {
  useEventCategories,
  useEventMutation,
  useGetEventById,
} from '../../hooks';
import { EventLookLike } from '../../interfaces/event';
import Loader from '../../../../components/Loader';
import { RoundedFilledButton, StickyBanner } from '../../../../components';
import { INFO_MESSAGES } from '../../../../constants';
import { useAlert } from '../../../../context/AlertContext';
import { BsTicketDetailed } from 'react-icons/bs';

const CreateEventForm = () => {
  const { eventId } = useParams();
  const eventMutation = useEventMutation(+eventId!);
  const eventCategories = useEventCategories();
  const navigate = useNavigate();
  const { showErrorToast, showDefaultToast } = useAlert();

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
          showDefaultToast('Has creado un evento como borrador');
          navigate(`/panel/events/create/${data.id}/tickets`);
        },
        onError(error) {
          showErrorToast(`Error al crear evento: ${error}`);
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
      <article>
        <div className="px-8 py-6 border-b border-gray-200 m-4">
          <div className="flex">
            <MdOutlineCreateNewFolder className="text-primary mx-2" size={30} />
            <h1 className="text-3xl font-bold text-gray-900 mb-2 ">
              Crear Nuevo Evento
            </h1>
          </div>
          <p className="text-gray-600">
            Completa la información del evento y sube las imágenes necesarias
          </p>
        </div>
        <div className="m-4 mx-15 flex rounded border border-primary p-4">
          <MdAnnouncement className="m-2 text-primary" size={40} />
          <div className="flex flex-col">
            <span className="text-primary font-bold">Importante:</span>
            <p>{INFO_MESSAGES.EVENTS_WARNING_BANNER}</p>
          </div>
        </div>
        <div className="px-8 py-6 border-b border-gray-200 m-4">
          <div className="flex">
            <MdOutlineImage className="mx-2 text-primary" size={30} />
            <h2 className="text-3xl font-semibold text-gray-900 border-gray-200  ">
              Imágenes del Evento
            </h2>
          </div>
          <p className="text-gray-600">
            Las imágenes de portada son importantes para que los visitantes
            puedan reconocer tu evento.
          </p>
        </div>
        <section className="flex flex-col lg:flex-row gap-6 mb-8 mx-10">
          {/* Square Image Preview */}
          <div className="flex-shrink-0">
            <Label
              htmlFor="square-upload"
              className="flex h-72 w-72 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden"
            >
              {values.photo ? (
                <div className="w-full h-full relative">
                  <img
                    src={values.photo || '/placeholder.svg'}
                    alt="Vista previa cuadrada"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <IoMdCloudUpload size={50} />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                    <span className="font-semibold">
                      Carga una imagen cuadrada
                    </span>
                    <br />o arrastra aquí
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG o GIF (1:1)
                  </p>
                </div>
              )}
              <input
                id="square-upload"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </Label>
          </div>

          {/* Horizontal Image Preview */}
          <div className="flex-1">
            <Label
              htmlFor="horizontal-upload"
              className="flex last: h-72 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden"
            >
              {values.verticalPhoto ? (
                <div className="w-full h-full relative">
                  <img
                    src={values.verticalPhoto || '/placeholder.svg'}
                    alt="Vista previa horizontal"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <IoMdCloudUpload size={50} />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                    <span className="font-semibold">
                      Carga una imagen horizontal
                    </span>
                    <br />o arrastra aquí
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG o GIF (16:9)
                  </p>
                </div>
              )}
              <input
                id="horizontal-upload"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </Label>
          </div>
        </section>
        <form onSubmit={handleSubmit} className="mx-10 ">
          <section className=" gap-4 grid grid-cols-2 mt-5">
            <div className="w-full ">
              <label className="mb-3 block text-black dark:text-white text-3xl">
                Foto cuadrada
              </label>
              <p className="text-sm mx-2">Foto cuadrada formato 1x1</p>
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
            <div className="w-full ">
              <label className="mb-3 block text-black dark:text-white text-3xl">
                Foto Horizontal
              </label>
              <p className="text-sm mx-2">Foto rectangular formato 9:16</p>
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
          </section>
          <div className="my-4 p-4 border-b border-gray-200 ">
            <div className="flex">
              <BsTicketDetailed className="text-primary mx-2" size={30} />
              <h2 className="text-3xl font-semibold text-gray-900 border-gray-200">
                Informacion del Evento
              </h2>
            </div>
            <p className="text-gray-600">
              Completa la informacion necesaria para que los visitantes sepan
              mas sobre tu evento.
            </p>
          </div>
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Nombre del evento
            </label>
            <p className="text-sm mx-2">
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
            <p className="text-sm mx-2">
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
              <p className="text-sm mx-2">
                Cuando se dara inicio a este evento:
              </p>
              <div className="flex w-full">
                <div className="w-full">
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
                <div className="mx-5 w-full">
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
              <p className="text-sm mx-2">
                Ingrese el nombre del establecimiento
              </p>
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
            <p className="text-sm mx-2">
              Describe la direccion completa del establecimiento
            </p>
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
          <div className="mt-5">
            <label
              className="mb-3 block text-black dark:text-white text-3xl"
              htmlFor="categories"
            >
              Categoria
            </label>
            <p className="text-sm mx-2">
              Selecciona la categorías que mejor describan tu evento para ayudar
              a los asistentes a encontrarlo fácilmente.
            </p>
            <select
              name="categoryId"
              id="categories"
              className="border rounded-lg block w-full py-2.5 dark:bg-black focus:border-primary my-2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.categoryId || ''}
            >
              <option value={''}>Elige una categoría</option>
              {eventCategories.isLoading ? (
                <option disabled>Cargando Categorias...</option>
              ) : (
                eventCategories.categories!.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              )}
            </select>
            {errors.categoryId && touched.categoryId ? (
              <div className="text-error">{errors.categoryId}</div>
            ) : null}

            {/* <TagInput
              tags={tags}
              setTags={setTags}
              inputValue={inputValue}
              setInputValue={setInputValue}
            /> */}
          </div>
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white text-3xl">
              Descripción del evento
            </label>
            <p className="text-sm mx-2 mb-2">
              Proporciona la información que tu público necesita: detalles del
              lugar, estacionamiento, accesibilidad y cualquier dato relevante
              para los asistentes. (máximo 2500 caracteres)
            </p>
            <textarea
              placeholder="Descripción de tu evento"
              name="description"
              maxLength={2500}
              rows={6}
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
    </>
  );
};

export { CreateEventForm };
