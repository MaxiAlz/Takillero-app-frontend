import { FloatingLabel, Select } from 'flowbite-react';
import { Breadcrumb, PageTitle, StepsDashboard } from '../../../components';
import { steps } from '../../../constants';
import DefaultLayout from '../../../layout/DefaultLayout';

const EventDetail = () => {
  return (
    <>
      <PageTitle title="Publicar" />
      <DefaultLayout>
        <Breadcrumb pageName={'Publicar'} />
        <div className="flex">
          <div className="w-full">
            <article>
              <h2 className="font-bold my-2 mb-5 opacity-85 text-black dark:text-white text-3xl">
                Ultimo paso, ¡Haz publico tu evento!
              </h2>
              <span className="text-2xl font-bold"></span>

              <h3 className="font-bold my-2 mb-5 opacity-85 text-black dark:text-white text-2xl">
                Configuración de publicación
              </h3>
              <div className="">
                <input type="checkbox" id="public-now" />
                <label htmlFor="public-now"> Publicar ahora</label>
              </div>
              <div>
                <input type="checkbox" id="public-despues" />
                <label htmlFor="public-despues">Programar publicacion</label>
              </div>
              <div className="flex">
                <div>
                  <input
                    type="date"
                    name="date"
                    placeholder="Fecha del evento"
                    className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.date}
                  />
                  {/* {errors.date && touched.date ? (
                      <div className="text-error">{errors.date}</div>
                    ) : null} */}
                </div>
                <div className="mx-5">
                  <input
                    type="time"
                    name="time"
                    placeholder="Hora"
                    className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.time}
                  />
                  {/* {errors.time && touched.time ? (
                      <div className="text-error">{errors.time}</div>
                    ) : null} */}
                </div>
              </div>
              <div className="my-4 border-t border-gray-300"></div>
              <h2 className="font-bold my-2 mb-5 opacity-85 text-black dark:text-white text-2xl">
                Segmentacion
              </h2>
              <span>
                El tipo y la categoría del evento ayudan a que aparezca en más
                búsquedas.
              </span>
              <div className="max-w-md">
                <FloatingLabel
                  variant="outlined"
                  label="Categoria"
                  className="dark:bg-transparent dark:bg-black"
                />

                <Select id="Categoria" required>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
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
