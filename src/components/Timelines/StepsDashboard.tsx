interface StepType {
  title: string;
  detail: string;
}

interface StepsDashboardProps {
  steps: StepType[];
  currentStep: number;
}

const StepsDashboard = ({ steps, currentStep = 0 }: StepsDashboardProps) => {
  const setStepName = (currentStep: number, index: number) => {
    if (currentStep == index) return 'Ahora';
    if (currentStep >= index) return 'Listo';
    else return 'Pendiente';
  };

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 hidden md:block">
      {steps.map((step, index) => (
        <li key={index} className="mb-10 ms-4">
          {/* Circulo con el número del paso */}
          <span
            className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3  ${
              currentStep >= index ? 'bg-primary' : 'bg-orange-100 shadow-2'
            }`}
          >
            <span
              className={`text-xs font-bold ${
                currentStep >= index ? 'text-white' : 'text-primary '
              }`}
            >
              {index + 1}
            </span>
          </span>

          {/* Contenido del paso */}
          <div
            className={`p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-boxdark  ${
              currentStep >= index
                ? ' dark:bg-boxdark'
                : 'opacity-30  dark:border-gray-600'
            }`}
          >
            {/* Tiempo o indicación adicional */}
            <time className="mb-1 text-xs font-normal text-primary uppercase sm:order-last sm:mb-0">
              {setStepName(currentStep, index)}
            </time>

            {/* Título y detalles del paso */}
            <div className=" font-bold ">{step.title}</div>
            <div className="italic font-normal text-gray-500 text-sm mt-2 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              {step.detail}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export { StepsDashboard };
