interface StepType {
  title: string;
  detail: string;
}

interface StepsDashboardProps {
  steps: StepType[];
  currentStep: number;
}

const StepsDashboard = ({ steps, currentStep = 0 }: StepsDashboardProps) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {steps.map((step, index) => (
        <li key={index} className="mb-10 ms-6">
          {/* Circulo con el número del paso */}
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <span className="text-xs font-bold text-blue-800 dark:text-blue-300">
              {index + 1}
            </span>
          </span>

          {/* Contenido del paso */}
          <div
            className={`p-4 bg-white border border-gray-200 rounded-lg shadow-sm ${
              currentStep === index
                ? 'bg-blue-50 dark:bg-blue-900'
                : 'dark:bg-gray-700 dark:border-gray-600'
            }`}
          >
            {/* Tiempo o indicación adicional */}
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              {currentStep === index ? 'Ahora' : 'Pendiente'}
            </time>

            {/* Título y detalles del paso */}
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
              {step.title}
            </div>
            <div className="text-xs italic font-normal text-gray-500 bg-gray-50 border border-gray-200 rounded-lg p-3 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              {step.detail}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export { StepsDashboard };
