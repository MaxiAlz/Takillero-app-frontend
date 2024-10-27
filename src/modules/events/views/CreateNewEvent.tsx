import { useState } from 'react';
import { Breadcrumb, PageTitle, StepsDashboard } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CreateEventForm } from '../Forms/CreateEventForm';
import CreateTickets from './components/CreateTickets';

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

  const setBreadcumTitle = () => {
    if (currentStep === 0) return 'Crear evento';
    if (currentStep === 1) return 'Cargar entradas';
    else return 'Revisar y publica';
  };
  
  return (
    <>
      <PageTitle title="Crear" />
      <DefaultLayout>
        <Breadcrumb pageName={setBreadcumTitle()} />
        <div className="flex">
          {currentStep === 0 && <CreateEventForm onNextStep={handleNextStep} />}
          {currentStep === 1 && <CreateTickets onNextStep={handleNextStep} />}
          <div className="flex h-min sticky top-26">
            <StepsDashboard steps={steps} currentStep={currentStep} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export { CreateNewEvent };
