import { useParams } from 'react-router-dom';
import {
  Breadcrumb,
  CardDataStats,
  ModalCustom,
  PageTitle,
  RoundedFilledButton,
} from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  MdAttachMoney,
  MdContentCopy,
  MdOutlineEnhancedEncryption,
  MdPeople,
  MdTrendingUp,
} from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import { EventHorizontalCard } from '../../../components/Cards/EventHorizontalCard';
import { useGetEventById } from '../hooks';
import { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';

// const RRPPSData = [
//   { name: 'Juan Perez', selledTickets: 20000 },
//   { name: 'Maria Gomez', selledTickets: 15000 },
//   { name: 'Pedro Rodriguez', selledTickets: 10000 },
// ];

const OverviewEventPage = () => {
  // const navigate = useNavigate();
  const { eventId } = useParams();
  const getEventInfo = useGetEventById(+eventId!);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [token, setToken] = useState('');
  const [tokenName, setTokenName] = useState('');

  const generateToken = () => {
    // Aquí iría la lógica para generar el token desde el backend
    const mockToken =
      'xxxx-xxxx-xxxx-' + Math.random().toString(36).substr(2, 9);
    setToken(mockToken);
  };

  const copyToken = () => {
    navigator.clipboard.writeText(token);
    // Aquí podrías mostrar un toast de confirmación
  };

  const shareToken = () => {
    const shareUrl = `${window.location.origin}/validate-token/${token}`;
    navigator.clipboard.writeText(shareUrl);
    // Aquí podrías mostrar un toast de confirmación
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
            <div className="flex justify-start my-2">
              <RoundedFilledButton
                text="Generar token de Acceso"
                icon={<MdOutlineEnhancedEncryption size={25} />}
                onClick={() => setShowTokenModal(true)}
              />
            </div>
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
        </main>
      </DefaultLayout>
      <ModalCustom
        openModal={showTokenModal}
        setOpenModal={setShowTokenModal}
        title="Generar Token de Acceso"
      >
        <div className="space-y-4">
          <TextInput
            placeholder="Nombre o descripción del token"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
          />

          <div className="flex items-center gap-2">
            <TextInput
              readOnly
              value={token}
              placeholder="El token se mostrará aquí"
              className="flex-1"
            />
            {token && (
              <Button onClick={copyToken}>
                <MdContentCopy className="mr-2" /> Copiar
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            <Button onClick={generateToken} color="primary">
              Generar Token
            </Button>
            {token && (
              <Button onClick={shareToken} color="success">
                Copiar Link
              </Button>
            )}
          </div>
        </div>
      </ModalCustom>
    </>
  );
};

export { OverviewEventPage };
