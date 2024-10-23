import { Breadcrumb, PageTitle, StepsDashboard } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CreateEventForm } from '../Forms/CreateEventForm';

const CreateNewEvent = () => {
  let steps = [
    { title: 'Crear evento', detail: 'Carga la informacion de tu eventos' },
    {
      title: 'Crear entradas',
      detail:
        'Crea las entradas para tu eventos, tipo,precio y programa su lanzamiento',
    },
    { title: 'Publicar', detail: 'Pasos finales para publicar tu evento' },
  ];

  return (
    <>
      <PageTitle title="Crear" />
      <DefaultLayout>
        <Breadcrumb pageName="Crear Evento" />
        <div className="flex ">
          <CreateEventForm />
          <StepsDashboard steps={steps} currentStep={0} />
        </div>
      </DefaultLayout>
    </>
  );
};

export { CreateNewEvent };
