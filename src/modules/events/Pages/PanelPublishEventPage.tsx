import { MdEdit, MdSave } from 'react-icons/md';
import {
  Breadcrumb,
  PageTitle,
  RoundedFilledButton,
  StepsDashboard,
  TagInput,
} from '../../../components';
import { steps } from '../../../constants';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useState } from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetEventById, useGetTicketsByEvent } from '../hooks';
import { Card } from 'flowbite-react';
import Loader from '../../../components/Loader';
import { usePublishEventMutation } from '../hooks/usePublishEventMutation';
import { useAlert } from '../../../context/AlertContext';
import { alertBanners } from '../../../components/Alerts/alertBanner';
import { EventHorizontalCard } from '../../../components/Cards/EventHorizontalCard';

const PublishEventPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const getEventInfo = useGetEventById(+eventId!);
  const getTicketsInfo = useGetTicketsByEvent(+eventId!);
  const publishEventMutation = usePublishEventMutation(+eventId!);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const { showSuccessToast, showErrorToast } = useAlert();

  const handleClickContinue = () => {
    publishEventMutation.mutate(undefined, {
      onSuccess: (asd) => {
        console.log('asd :>> ', asd);
        showSuccessToast('Evento Publicado con exito');
        navigate(`/panel/events/overview/${eventId}`);
      },
      onError: () => {
        showErrorToast('Ocurrio un error al publicar el evento');
      },
    });
  };

  const handleDisabledButton = () => {
    return (
      getEventInfo.isLoading ||
      getTicketsInfo.isLoading ||
      getTicketsInfo.ticketsEvent.length < 1
    );
  };

  return (
    <>
      <PageTitle title="Publicar" />
      <DefaultLayout>
        <Breadcrumb pageName={'Publicar'} />
        <div className="flex">
          <div className="w-full mr-5">
            {getEventInfo.isLoading && getEventInfo.isLoading && <Loader />}
            {!getEventInfo.isLoading && !getEventInfo.isLoading && (
              <article>
                <div className="text-primary flex">
                  <BsFillRocketTakeoffFill size={30} />
                  <h2 className="font-bold my-2 mb-5 opacity-85  text-3xl uppercase text-primary">
                    ¡Haz publico tu evento!
                  </h2>
                </div>
                <span className="">
                  Estas unos pasos de publicar tu evento y comenzar a distribuir
                  tus entradas, pero antes ayudanos a entender de que se trata.
                </span>
                <div className="my-4 border-t border-gray-300"></div>
                <h2 className="font-bold my-2 opacity-85 text-black dark:text-white text-2xl">
                  Informacion general
                </h2>
                <span className="">
                  Esta es la informacion que cargaste sobre tu evento
                </span>

                {/* Events detail */}
                {getEventInfo.eventData && (
                  <EventHorizontalCard
                    name={getEventInfo.eventData.name}
                    date={getEventInfo.eventData.date}
                    location={getEventInfo.eventData.location}
                    photo={getEventInfo.eventData.photo}
                    venue={getEventInfo.eventData.venue}
                    subtitle={getEventInfo.eventData.subtitle}
                    key={getEventInfo.eventData.id}
                    onEdit={() => navigate(`/panel/events/create/${eventId}`)}
                    iconButton={<MdEdit className="mr-2" />}
                    textButton="Editar"
                  />
                )}

                {getEventInfo.isError && alertBanners.showErrorBanner()}

                <h2 className="font-bold my-2 opacity-85 text-black dark:text-white text-xl">
                  Informacion sobre tus tickets
                </h2>
                <span className="">
                  Estos son los tickets que has cargado para tu evento
                </span>

                {getTicketsInfo.ticketsEvent.length > 0 ? (
                  <Card className="flex dark:bg-black my-2 ">
                    <h5 className="text-xl font-bold opacity-85 tracking-tight text-gray-900 dark:text-white">
                      Hay {getTicketsInfo.ticketsEvent.length}{' '}
                      {getTicketsInfo.ticketsEvent.length > 1
                        ? 'tipos de tickets cargados'
                        : 'tipo de ticket cargado'}
                    </h5>
                    <div className="border-t border-gray-300"></div>
                    {getTicketsInfo.ticketsEvent.map((ticket) => (
                      <section
                        className="flex items-center justify-between"
                        key={ticket.id}
                      >
                        <div>
                          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {ticket.name}
                          </h5>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-normal text-gray-700 dark:text-gray-400">
                            Cantidad total:{' '}
                            <span className="font-bold">
                              {ticket.totalAmount}
                            </span>
                          </p>
                          <p className="font-normal text-gray-700 dark:text-gray-400 mx-5">
                            Precio:{' '}
                            <span className="font-bold">
                              {ticket.price == 0 ? 'Gratuito' : ticket.price}
                            </span>
                          </p>
                        </div>
                      </section>
                    ))}
                    <div className="w-full flex justify-end mt-2">
                      <RoundedFilledButton
                        text="Editar"
                        icon={<MdEdit />}
                        className="max-w-sm"
                        onClick={() =>
                          navigate(`/panel/events/create/${eventId}/tickets`)
                        }
                      />
                    </div>
                  </Card>
                ) : (
                  <Card className="flex dark:bg-black my-2 ">
                    <h2 className="font-bold my-2 opacity-85 text-black dark:text-white text-2xl">
                      No hay tckets cargados :(
                    </h2>
                    <p>Genera tus tickets para publicar tu evento</p>
                    <div className="w-full flex justify-end mt-2">
                      <RoundedFilledButton
                        text={
                          getTicketsInfo.ticketsEvent.length > 0
                            ? 'Editar'
                            : 'Cargar tickets'
                        }
                        icon={<MdEdit />}
                        className="max-w-sm"
                        onClick={() =>
                          navigate(`/panel/events/create/${eventId}/tickets`)
                        }
                      />
                    </div>
                  </Card>
                )}

                {getTicketsInfo.isError && alertBanners.showErrorBanner()}

                <h2 className="font-bold my-2 opacity-85 text-black dark:text-white text-2xl">
                  Segmentacion
                </h2>
                <span>
                  Ademas de la categoria puedes añadir etiquetas para que tu
                  evento sea más visible en las búsquedas y llegue a tu público
                  objetivo.
                </span>

                <div className="mt-5">
                  <TagInput
                    tags={tags}
                    setTags={setTags}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                  />
                </div>

                <div className="flex w-full justify-end mt-4">
                  <RoundedFilledButton
                    disabled={handleDisabledButton()}
                    onClick={handleClickContinue}
                    text="Guardar y Publicar Evento"
                    icon={<MdSave />}
                  />
                </div>
              </article>
            )}
          </div>

          <div className="flex h-min sticky top-26">
            <StepsDashboard steps={steps} currentStep={2} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export { PublishEventPage };
