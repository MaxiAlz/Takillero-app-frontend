import { Breadcrumb, PageTitle, StepsDashboard } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CreateEventForm } from '../Forms/CreateEventForm';
import { steps } from '../../../constants';

const CreateNewEvent = () => {
  return (
    <>
      <PageTitle title="Crear" />
      <DefaultLayout>
        <Breadcrumb pageName={'crear evento'} />
        <div className="flex">
          <CreateEventForm />
          <div className="flex h-min sticky top-26">
            <StepsDashboard steps={steps} currentStep={0} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export { CreateNewEvent };
