import Loader from '../../../components/Loader';
import { Breadcrumb, PageTitle, PanelTable } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useGetAuthUserEvents } from '../hooks/useGetAuthUserEvents';

const EventsPanel = () => {
  const getUsersEvents = useGetAuthUserEvents();

  console.log('getUsersEvents', getUsersEvents);
  return (
    <>
      <PageTitle title="Eventos" />
      <DefaultLayout>
        <Breadcrumb pageName="Eventos" />
        {getUsersEvents.isLoading && !getUsersEvents.data?.items ? (
          <Loader />
        ) : (
          <PanelTable tableItems={getUsersEvents.data?.items} />
        )}
      </DefaultLayout>
    </>
  );
};

export { EventsPanel };
