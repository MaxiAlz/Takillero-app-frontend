import { useState } from 'react';
import { Breadcrumb, PageTitle, StepsDashboard } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CreateEventForm } from '../Forms/CreateEventForm';

let steps = [
  { title: 'Crear evento', detail: 'Carga la informacion de tu eventos' },
  {
    title: 'Cargar entradas',
    detail:
      'Crea las entradas para tu eventos, tipo,precio y programa su lanzamiento',
  },
  { title: 'Publicar', detail: 'Pasos finales para publicar tu evento' },
];

const CreateNewEvent = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <PageTitle title="Crear" />
      <DefaultLayout>
        <Breadcrumb pageName="Crear Evento" />
        <div className="flex">
          <CreateEventForm onNextStep={handleNextStep} />
          <div className="flex h-min sticky top-26">
            <StepsDashboard steps={steps} currentStep={currentStep} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export { CreateNewEvent };
