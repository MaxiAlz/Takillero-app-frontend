import { Breadcrumb, PageTitle, PanelTable } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';

const EventsPanel = () => {
  return (
    <>
      <PageTitle title="Eventos" />
      <DefaultLayout>
        <Breadcrumb pageName="Eventos" />
        <PanelTable />
      </DefaultLayout>
    </>
  );
};

export { EventsPanel };
