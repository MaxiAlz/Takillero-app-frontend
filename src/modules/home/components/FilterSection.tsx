import { Carousel } from 'flowbite-react';
import { MdMyLocation, MdSearch } from 'react-icons/md';
import { RoundedOutlineDarckButton } from '../../../components';

const FilterSection = () => {
  return (
    <>
      <div className="flex items-center justify-evenly">
        {/* Input de ubicación */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <span className="material-icons">
              <MdMyLocation />
            </span>
          </span>
          <input
            type="text"
            placeholder="Ubicación"
            className="pl-10 border border-gray-300 rounded-full py-2 px-4 w-48 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-primary"
          />
        </div>

        {/* Input de búsqueda */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <span className="material-symbols-outlined">
              <MdSearch />
            </span>
          </span>
          <input
            type="text"
            placeholder="Buscar entradas"
            className="pl-10 border border-gray-300 rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-primary"
          />
        </div>
      </div>
      <div className="flex h-20">
        <Carousel indicators={false} leftControl="<" rightControl={' '}>
          <div className="flex w-full  px-20 justify-evenly">
            <RoundedOutlineDarckButton text="Musica" />
            <RoundedOutlineDarckButton text="Networking" />
            <RoundedOutlineDarckButton text="Gastronomia" />
            <RoundedOutlineDarckButton text="Teatro" />
            <RoundedOutlineDarckButton text="Cine" />
            <RoundedOutlineDarckButton text="Empresas" />
            <RoundedOutlineDarckButton text="Deportes" />
            <RoundedOutlineDarckButton text="Musica" />
            <RoundedOutlineDarckButton text="Empresas" />
            <RoundedOutlineDarckButton text="Deportes" />
            <RoundedOutlineDarckButton text="Musica" />
          </div>
          <div className="flex w-full  px-20 justify-evenly">
            <RoundedOutlineDarckButton text="Musica" />
            <RoundedOutlineDarckButton text="Networking" />
            <RoundedOutlineDarckButton text="Gastronomia" />
            <RoundedOutlineDarckButton text="Teatro" />
            <RoundedOutlineDarckButton text="Cine" />
            <RoundedOutlineDarckButton text="Empresas" />
            <RoundedOutlineDarckButton text="Deportes" />
            <RoundedOutlineDarckButton text="Musica" />
            <RoundedOutlineDarckButton text="Empresas" />
            <RoundedOutlineDarckButton text="Deportes" />
            <RoundedOutlineDarckButton text="Musica" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export { FilterSection };
