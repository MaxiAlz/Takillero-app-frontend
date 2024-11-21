import { useParams } from 'react-router-dom';
import { Breadcrumb, CardDataStats, PageTitle } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { MdEventAvailable } from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import EventHorizontalCard from '../../../components/Cards/EventHorizontalCard';
import { useGetEventById } from '../hooks';

const OverviewEventPage = () => {
  // const navigate = useNavigate();
  const { eventId } = useParams();
  const getEventInfo = useGetEventById(+eventId!);

  return (
    <>
      <PageTitle title="Seguimiento" />
      <DefaultLayout>
        <Breadcrumb pageName="Seguimiento " />
        <main>
          <div className="mb-5">
            <span>
              Aquí podrás consultar toda la información relevante de tu evento y
              realizar un seguimiento en tiempo real para mantener todo bajo
              control.
            </span>
          </div>
          {/* <div className="my-4 border-t border-gray-300"></div> */}
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-5">
            <CardDataStats
              title="Eventos creados"
              key={'Total eventos'}
              rate="5,25"
              levelUp
              total="1,3 K"
            >
              <MdEventAvailable size={30} />
            </CardDataStats>
            <CardDataStats
              title="Tickets vendidos"
              key={'Total Usuarios'}
              rate="25,25%"
              levelUp
              total="5.36 M"
            >
              <GiTicket size={30} />
            </CardDataStats>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
};

export { OverviewEventPage };
