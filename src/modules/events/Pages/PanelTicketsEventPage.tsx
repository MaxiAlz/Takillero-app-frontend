import { useParams } from 'react-router-dom';
import { Breadcrumb, CardHeaderTickets, PageTitle } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useGetEventById, useGetTicketsByEvent } from '../hooks';
import { TicketsTable } from '../../../components/Tables/TicketsTable';

const PanelTicketsEventPage = () => {
  const { eventId } = useParams();
  const { eventData } = useGetEventById(+eventId!);
  const { responseTickets } = useGetTicketsByEvent(+eventId!);

  return (
    <>
      <PageTitle title="Ticekts" />
      <DefaultLayout>
        <Breadcrumb pageName="Tickets" />
        {eventData && (
          <CardHeaderTickets
            subtitle={eventData.data.subtitle}
            date={eventData.data.date}
            location={eventData.data.location}
            name={eventData.data.name}
            photo={eventData.data.photo}
          />
        )}
        {responseTickets && <TicketsTable tableItems={responseTickets.data} />}
      </DefaultLayout>
    </>
  );
};

export { PanelTicketsEventPage };
