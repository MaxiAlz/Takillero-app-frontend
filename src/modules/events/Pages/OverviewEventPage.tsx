import { useNavigate, useParams } from 'react-router-dom';
import {
  Breadcrumb,
  CardDataStats,
  DrawerCustom,
  PageTitle,
} from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  MdAttachMoney,
  MdCardGiftcard,
  MdInfo,
  MdOutlineAnalytics,
  MdOutlineEnhancedEncryption,
  MdOutlineSettings,
} from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import { EventHorizontalCard } from '../../../components/Cards/EventHorizontalCard';
import { useGetEventById } from '../hooks';
import { ReactElement, useState } from 'react';
import CardButton from '../../../components/Buttons/CardButton';
import ManageAccessCodes from '../components/ManageAccessCodes';
import { useUserRole } from '../hooks/useUserRole';
import { UserRoles } from '../../Auth/types/authTypes';
import { FaIdBadge } from 'react-icons/fa6';
import { ManageReferidosCodes } from '../components/ManageReferidosCodes';
import { useGetEventDashboard } from '../hooks/useEvent';

const settingsItems: SettingsItem[] = [
  {
    key: 'AccessTokens',
    name: 'Tokens de Acceso',
    subtitle: 'Administra tus Accesos',
    bgColor: 'bg-primary',
    icon: <MdOutlineEnhancedEncryption size={30} />,
    drawerSubtitle: 'Administra los tokens de accesos a tu evento desde aqui',
    drawerTtitle: 'Administra tus Tokens de Acceso',
  },
  {
    key: 'invites',
    name: 'Invitaciones',
    subtitle: 'Crea invitaciones especiales',
    bgColor: 'bg-success',
    icon: <MdCardGiftcard size={30} />,
    drawerTtitle: 'Invitar personas a tu evento',
    drawerSubtitle:
      'Carga asistentes que quieras invitar a tu evento, se les enviara un notificacion y podran descargar sus tickets en su cuenta de Activate!',
  },
  {
    key: 'referidos',
    name: 'Referidos',
    subtitle: 'Crea codigos de referidos',
    bgColor: 'bg-warning',
    icon: <FaIdBadge size={30} />,
    drawerTtitle: 'Codigos de referidos',
    drawerSubtitle:
      'Los codigos de referido sirven para identificar a las personas que venden entradas dentro de tu evento, es util para RRPPs, organizadores, artistas,bandas,etc.',
  },
];

interface SettingsItem {
  key: string;
  name: string;
  subtitle: string;
  bgColor: string;
  drawerTtitle: string;
  drawerSubtitle: string;
  icon: ReactElement;
}

const OverviewEventPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const getEventInfo = useGetEventById(+eventId!);
  const getEventDashboard = useGetEventDashboard(+eventId!);

  const [isShowDrawerOpen, setIsShowDrawerOpen] = useState<{
    isopen: boolean;
    settingsItem: SettingsItem;
  }>({ isopen: false, settingsItem: settingsItems[0] });

  const handleCloseDrawer = () => {
    setIsShowDrawerOpen({ isopen: false, settingsItem: settingsItems[0] });
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
                name={getEventInfo.eventData.data.name}
                date={getEventInfo.eventData.data.date}
                location={getEventInfo.eventData.data.location}
                photo={getEventInfo.eventData.data.photo}
                venue={getEventInfo.eventData.data.venue}
                subtitle={getEventInfo.eventData.data.subtitle}
                key={getEventInfo.eventData.data.id}
              />
            )}
          </div>
          <h2 className="font-bold text-2xl my-4 flex items-center gap-2">
            <MdOutlineAnalytics className="text-primary" />
            Estadisticas acumuladas:
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5 mt-5">
            {/* <CardDataStats
              title="Asistentes"
              subtitle="Total asistentes confirmados"
              key={'Total asistentes confirmados'}
              rate="5,25"
              levelUp
              total="1,3 K"
            >
              <MdPeople size={30} />
            </CardDataStats> */}
            <button
              className="hover:shadow-4 hover:shadow-primary hover:opacity-90"
              onClick={() =>
                navigate(`/panel/events/overview/${eventId}/tickets`)
              }
            >
              <CardDataStats
                title="Tickets"
                subtitle="Total tickets vendidos"
                key={'Total tickets generados'}
                total={`${getEventDashboard.eventDashboard?.data.totalTicketsSold}`}
              >
                <GiTicket size={30} />
              </CardDataStats>
            </button>

            <CardDataStats
              title="Ingresos"
              subtitle="Total ingresos"
              key={'Total ingresos'}
              total={`$ ${getEventDashboard.eventDashboard?.data.totalRevenue}`}
            >
              <MdAttachMoney size={30} />
            </CardDataStats>
            {/* <CardDataStats
              subtitle="Tendencias a futuro"
              title="Tendencia"
              key={'Tendencia'}
              rate="36%"
              levelUp
              total="84%"
            >
              <MdTrendingUp size={30} />
            </CardDataStats> */}
          </div>
          <h2 className="font-bold text-2xl my-4 flex items-center gap-2">
            <MdOutlineSettings className="text-primary" />
            Configuraciones importantes:
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-5">
            {settingsItems.map((cardItem) => (
              <CardButton
                disabled={useUserRole() != UserRoles.PRODUCTOR}
                key={cardItem.key}
                className={cardItem.bgColor}
                title={cardItem.name}
                subtitle={cardItem.subtitle}
                children={cardItem.icon}
                onClick={() =>
                  setIsShowDrawerOpen({
                    isopen: true,
                    settingsItem: cardItem,
                  })
                }
              />
            ))}
          </div>
        </main>
      </DefaultLayout>

      <DrawerCustom
        openModal={isShowDrawerOpen.isopen}
        setOpenModal={handleCloseDrawer}
        titleIcon={MdInfo}
        title={isShowDrawerOpen.settingsItem.drawerTtitle}
        subtitle={isShowDrawerOpen.settingsItem.drawerSubtitle}
      >
        {isShowDrawerOpen.settingsItem.key === 'AccessTokens' && (
          <ManageAccessCodes eventId={eventId} />
        )}
        {isShowDrawerOpen.settingsItem.key === 'invites' && (
          <div>Formulario pa borrar la cosa</div>
        )}
        {isShowDrawerOpen.settingsItem.key === 'referidos' && (
          <ManageReferidosCodes
            eventId={eventId}
            enventName={getEventInfo.eventData?.data.name}
          />
        )}
      </DrawerCustom>
    </>
  );
};

export { OverviewEventPage };
