import { useParams } from 'react-router-dom';
import {
  Breadcrumb,
  CardDataStats,
  DrawerCustom,
  ModalCustom,
  PageTitle,
  RoundedFilledButton,
  RoundedOutlineButton,
} from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  MdAttachMoney,
  MdContentCopy,
  MdDeleteForever,
  MdOutlineBackHand,
  MdOutlineEnhancedEncryption,
  MdPeople,
  MdTrendingUp,
} from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import { EventHorizontalCard } from '../../../components/Cards/EventHorizontalCard';
import { useGetEventById } from '../hooks';
import { useState } from 'react';
import { GenerateAccesTokenForm } from '../components/Forms/GenerateAccesTokenForm';
import CardButton from '../../../components/Buttons/CardButton';
import { Button } from 'flowbite-react';
import { useAccessCodesQuery } from '../hooks/useAccessCodesQuery';
import { formatFullDate } from '../../../helpers';
import Loader from '../../../components/Loader';

const OverviewEventPage = () => {
  const { eventId } = useParams();
  const getEventInfo = useGetEventById(+eventId!);
  const getAccessCodes = useAccessCodesQuery.getAccesCodesByEventId(+eventId!);
  const [showAccessCodeDrawer, setShowAccessCodeDrawer] = useState(false);
  const [showAccessCodeModal, setShowAccessCodeModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [selectedAccessCode, setSelectedAccessCode] = useState<{
    name: string;
    id: number;
  } | null>(null);

  // TODO: Crear funcion para eliminar codigo de acceso
  const hadleDeleteAccessCode = (
    accesCodeId: number,
    acessCodeName: string,
  ) => {
    setShowConfirmDeleteModal(true);
    setSelectedAccessCode({ name: acessCodeName, id: accesCodeId });
  };

  return (
    <>
      <PageTitle title="Seguimiento" />
      <DefaultLayout>
        <Breadcrumb pageName="Gestiona tu Evento Publicado" />
        <main>
          <div className="mb-5 bg-meta-2 dark:bg-meta-4 rounded-lg p-4">
            <span className="text-sm font-medium text-black dark:text-white">
              Aquí podrás consultar toda la información importante de tu evento,
              realizar un seguimiento en tiempo real y realizar configuraciones
              importantes.
            </span>
          </div>

          <div className="my-4">
            {getEventInfo.eventData && (
              <EventHorizontalCard
                name={getEventInfo.eventData.name}
                date={getEventInfo.eventData.date}
                location={getEventInfo.eventData.location}
                photo={getEventInfo.eventData.photo}
                venue={getEventInfo.eventData.venue}
                subtitle={getEventInfo.eventData.subtitle}
                key={getEventInfo.eventData.id}
              />
            )}
          </div>
          <h2 className="font-bold text-xl my-2">Estadisticas acumuladas:</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-5">
            <CardDataStats
              title="Asistentes"
              key={'Total asistentes confirmados'}
              rate="5,25"
              levelUp
              total="1,3 K"
            >
              <MdPeople size={30} />
            </CardDataStats>
            <CardDataStats
              title="Tickets Generados"
              key={'Total tickets generados'}
              rate="25,25%"
              levelUp
              total="2.600"
            >
              <GiTicket size={30} />
            </CardDataStats>
            <CardDataStats
              title="Ingresos Totales"
              key={'Total ingresos'}
              rate="15,25%"
              levelUp
              total="$20,000 K"
            >
              <MdAttachMoney size={30} />
            </CardDataStats>
            <CardDataStats
              title="Tendencia"
              key={'Tendencia'}
              rate="36%"
              levelUp
              total="84%"
            >
              <MdTrendingUp size={30} />
            </CardDataStats>
          </div>
          <h2 className="font-bold text-xl my-2">
            Configuraciones importantes:
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-5">
            <CardButton
              className="bg-primary"
              title="Tokens de Acceso"
              subtitle="Genera y escanea tus E-Tickets"
              children={<MdOutlineEnhancedEncryption size={30} />}
              onClick={() => setShowAccessCodeDrawer(true)}
            />
            <CardButton
              className="bg-meta-5"
              title="Pausar ventas"
              subtitle="No se generaran mas E-Tickets"
              children={<MdOutlineBackHand size={30} />}
              onClick={() => {}}
            />
          </div>
        </main>
      </DefaultLayout>

      <DrawerCustom
        openModal={showAccessCodeDrawer}
        setOpenModal={setShowAccessCodeDrawer}
        titleIcon={MdOutlineEnhancedEncryption}
        title="Tus Tokens de Acceso"
        subtitle="Usa este codigo para validar las E-Tickes en la entrada de tu evento, puedes crear diferentes codigos para identificar a tu Staff si asi lo deseas."
      >
        <article>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2"></div>
          {
            <section>
              {/* {accesCodes.map((ac) => (
            <div>
              <label className="block  text-xl">{ac.name}</label>
              <div className="flex items-center">
                <input
                  name="verticalPhoto"
                  type="text"
                  placeholder="photo url"
                  className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={ac.code}
                />
                <Button>
                  <MdContentCopy className="mr-2" /> Copiar
                </Button>
              </div>
            </div>
          ))} */}

              {getAccessCodes.isLoading ? (
                <Loader />
              ) : (
                getAccessCodes.accessCodesData?.code && (
                  <div>
                    <h3 className="dark:text-white text-xl font-bold mb-4">
                      Tokens de Accesos Activos:
                    </h3>
                    {!getAccessCodes.accessCodesData && (
                      <p>Todavia no hay Codigos de acceso creados</p>
                    )}
                    <label className="block text-xl text-primary font-normal">
                      {getAccessCodes.accessCodesData.name}
                    </label>
                    <div className="flex items-center">
                      <input
                        name="verticalPhoto"
                        type="text"
                        placeholder="photo url"
                        className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        value={getAccessCodes.accessCodesData.code}
                      />

                      <Button>
                        <MdContentCopy className="" /> Copiar
                      </Button>
                    </div>
                    <p className="text-sm">
                      Valido del{' '}
                      <span className=" text-primary">
                        {formatFullDate(getAccessCodes.accessCodesData?.start)}{' '}
                        Hs
                      </span>{' '}
                      al{' '}
                      <span className=" text-primary">
                        {formatFullDate(getAccessCodes.accessCodesData?.end)} Hs
                      </span>
                    </p>
                    <button
                      className=""
                      onClick={() =>
                        hadleDeleteAccessCode(
                          getAccessCodes.accessCodesData!.id,
                          getAccessCodes.accessCodesData!.name,
                        )
                      }
                    >
                      <p className="mt-2 hover:text-error  flex items-center">
                        <MdDeleteForever /> Eliminar acceso
                      </p>
                    </button>
                    <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2 "></div>
                  </div>
                )
              )}
              <RoundedFilledButton
                text="Crear nuevo token de acceso"
                icon={<MdOutlineEnhancedEncryption size={25} />}
                className="w-full mt-6"
                onClick={() => setShowAccessCodeModal(true)}
              />
            </section>
          }
        </article>
      </DrawerCustom>
      <ModalCustom
        openModal={showAccessCodeModal}
        setOpenModal={setShowAccessCodeModal}
        title="Generar Token de Acceso"
        subtitle="Usa este codigo para validar las E-Tickes en la entrada de tu evento, puedes crear diferentes codigos para identificar a tu Staff"
      >
        <GenerateAccesTokenForm />
      </ModalCustom>

      <ModalCustom
        openModal={showConfirmDeleteModal}
        setOpenModal={setShowConfirmDeleteModal}
        title="Eliminar codigo de acceso"
      >
        <div className="">
          <p>
            Estas seguro que desea eliminar{' '}
            <span className="text-primary">"{selectedAccessCode?.name}"</span>
          </p>
          <div className="flex justify-between mt-5">
            <RoundedFilledButton text="Eliminar codigo de acceso" />
            <RoundedOutlineButton text="Cancelar" />
          </div>
        </div>
      </ModalCustom>
    </>
  );
};

export { OverviewEventPage };
