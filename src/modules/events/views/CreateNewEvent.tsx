import { Breadcrumb, PageTitle } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';

const CreateNewEvent = () => {
  return (
    <>
      <PageTitle title="Crear" />
      <DefaultLayout>
        <Breadcrumb pageName="Crear Evento" />
        <CreateNewEvent />
      </DefaultLayout>
    </>
  );
};

export { CreateNewEvent };
