import { Breadcrumb, PageTitle } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';

const CreateTicketsPage = () => {
  return (
    <>
      <PageTitle title="Tickets" />
      <DefaultLayout>
        <Breadcrumb pageName={'Cargar entradas'} />
        
      </DefaultLayout>
    </>
  );
};

export { CreateTicketsPage };
