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

const eventCategories = [
  { id: 'musica', name: 'Música en vivo' },
  { id: 'teatro', name: 'Teatro' },
  { id: 'corporativos', name: 'Corporativos' },
  { id: 'deportes', name: 'Deportes' },
  { id: 'educativos', name: 'Educativos y Talleres' },
  { id: 'gastronomia', name: 'Gastronomía y Catas' },
  { id: 'familiares', name: 'Familiares' },
  { id: 'conferencias', name: 'Conferencias y Seminarios' },
  { id: 'festivales', name: 'Festivales' },
  { id: 'tecnologia', name: 'Tecnología e Innovación' },
  { id: 'arte', name: 'Arte y Exposiciones' },
  { id: 'bienestar', name: 'Salud y Bienestar' },
];

const EventDetail = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

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
                Selecciona una categoría y añade etiquetas relevantes para que
                tu evento sea más visible en las búsquedas y llegue a tu público
                objetivo.
              </span>

              <div className="mt-5">
                <label
                  htmlFor="categories"
                  className=" mb-2 text-lg font-bold tw-full"
                >
                  Categoria
                </label>
                <select
                  id="categories"
                  className="border rounded-lg block w-full py-2.5 dark:bg-black focus:border-primary my-2"
                >
                  <option selected disabled>
                    Elige una categoría
                  </option>
                  {eventCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

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
