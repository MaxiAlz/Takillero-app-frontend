import { Breadcrumb, PageTitle, StepsDashboard } from '../../../components';
import { steps } from '../../../constants';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CreateTickets } from '../components/CreateTickets';

const CreateTicketsPage = () => {
  return (
    <>
      <PageTitle title="Tickets" />
      <DefaultLayout>
        <section className="m-8">
          <Breadcrumb pageName={'Cargar entradas'} />
          <div className="flex">
            <CreateTickets />
            <div className="flex h-min sticky top-26">
              <StepsDashboard steps={steps} currentStep={1} />
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export { CreateTicketsPage };
