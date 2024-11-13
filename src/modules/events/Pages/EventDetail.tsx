import { MdSave } from 'react-icons/md';
import {
  Breadcrumb,
  PageTitle,
  RoundedFilledButton,
  StepsDashboard,
  TagInput,
} from '../../../components';
import { steps } from '../../../constants';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useState } from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';

const EventDetail = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  console.log('tags :>> ', tags);
  const handleClickContinue = () => {};

  return (
    <>
      <PageTitle title="Publicar" />
      <DefaultLayout>
        <Breadcrumb pageName={'Publicar'} />
        <div className="flex">
          <div className="w-full mr-5">
            <article>
              <div className="text-primary flex">
                <BsFillRocketTakeoffFill size={30} />
                <h2 className="font-bold my-2 mb-5 opacity-85  text-3xl uppercase text-primary">
                  ¡Haz publico tu evento!
                </h2>
              </div>
              <span className="">
                Estas unos pasos de publicar tu evento y comenzar a distribuir
                tus entradas, pero antes ayudanos a entender de que se trata.
              </span>

              <div className="my-4 border-t border-gray-300"></div>
              <h2 className="font-bold my-2 opacity-85 text-black dark:text-white text-2xl">
                Segmentacion
              </h2>
              <span>
                Ademas de la categoria puedes añadir etiquetas para que tu
                evento sea más visible en las búsquedas y llegue a tu público
                objetivo.
              </span>

              <div className="mt-5">
                <TagInput
                  tags={tags}
                  setTags={setTags}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </div>
              {/* <div className="my-4 border-t border-gray-300"></div> */}

              <div className="flex w-full justify-end mt-4">
                <RoundedFilledButton
                  onClick={handleClickContinue}
                  text="Guardar y Publicar"
                  icon={<MdSave />}
                />
              </div>
            </article>
          </div>
          <div className="flex h-min sticky top-26">
            <StepsDashboard steps={steps} currentStep={2} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export { EventDetail };
