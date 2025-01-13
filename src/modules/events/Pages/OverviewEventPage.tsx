import { useParams } from 'react-router-dom';
import {
  Breadcrumb,
  CardDataStats,
  DrawerCustom,
  PageTitle,
} from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  MdAttachMoney,
  MdOutlineBackHand,
  MdOutlineEnhancedEncryption,
  MdPeople,
  MdTrendingUp,
} from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import { EventHorizontalCard } from '../../../components/Cards/EventHorizontalCard';
import { useGetEventById } from '../hooks';
import { useState } from 'react';
import CardButton from '../../../components/Buttons/CardButton';
import ManageAccessCodes from '../components/ManageAccessCodes';

const settingsItems = [
  {
    key: 'AccessTokens',
    name: 'Tokens de Acceso',
    subtitle: 'No se generaran mas E-Tickets',
    bgColor: 'bg-primary',
    icon: <MdOutlineBackHand size={30} />,
    drawerTtitle: 'Tus Tokens de Acceso',
  },
  {
    key: 'stopSales',
    name: 'Pausar ventas',
    subtitle: 'Deten las ventas de tu eventos',
    bgColor: 'bg-error',
    icon: <MdOutlineBackHand size={30} />,
    drawerTtitle: 'Detener ventas en evento',
  },
];

const OverviewEventPage = () => {
  const { eventId } = useParams();
  const getEventInfo = useGetEventById(+eventId!);

  const [isShowDrawerOpen, setIsShowDrawerOpen] = useState<{
    isopen: boolean;
    key: string;
  }>({ isopen: false, key: '' });

  const handleCloseDrawer = () => {
    setIsShowDrawerOpen({ isopen: false, key: '' });
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
            {settingsItems.map((cardItem) => (
              <CardButton
                className={cardItem.bgColor}
                title={cardItem.name}
                subtitle={cardItem.subtitle}
                children={cardItem.icon}
                onClick={() =>
                  setIsShowDrawerOpen({ isopen: true, key: cardItem.key })
                }
              />
            ))}
          </div>
        </main>
      </DefaultLayout>

      <DrawerCustom
        openModal={isShowDrawerOpen.isopen}
        setOpenModal={handleCloseDrawer}
        titleIcon={MdOutlineEnhancedEncryption}
        title="Tus Tokens de Acceso"
        // subtitle="Usa este codigo para validar las E-Tickes en la entrada de tu evento, puedes crear diferentes codigos para identificar a tu Staff si asi lo deseas."
      >
        {isShowDrawerOpen.key === 'AccessTokens' && (
          <ManageAccessCodes eventId={eventId} />
        )}
        {isShowDrawerOpen.key === 'stopSales' && (
          <div>Formulario pa borrar la cosa</div>
        )}
      </DrawerCustom>
    </>
  );
};

export { OverviewEventPage };
