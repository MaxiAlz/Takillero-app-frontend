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
        {getUsersEvents.isLoading && !getUsersEvents.data?.data.items && (
          <Loader />
        )}

        {getUsersEvents.isError && (
          <div className="flex justify-center items-center h-screen">
            <p className="text-red-500">
              {getUsersEvents.error?.message || 'Error al cargar los eventos'}
            </p>
          </div>
        )}
        {getUsersEvents.data?.data.items && (
          <PanelTable tableItems={getUsersEvents.data?.data.items} />
        )}
      </DefaultLayout>
    </>
  );
};

export { EventsPanel };
