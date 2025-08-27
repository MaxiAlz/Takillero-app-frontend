import {
  MdOutlineSearch,
  // MdOutlineRemoveRedEye,
  // MdDeleteForever,
  // MdDownload,
  MdOutlineCreateNewFolder,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { RoundedFilledButton } from '../Buttons';
import { ItemEvent } from '../../modules/events';
import { formatDate } from '../../helpers/formatDate';
import { useUserRole } from '../../hooks/useUserRole';
import { UserRoles } from '../../modules/Auth/types/authTypes';

interface PanelTableProps {
  tableItems: ItemEvent[] | undefined;
}

const getStateAttributes = (
  state: string,
): { text: string; classes: string } => {
  switch (state) {
    case 'PUBLISHED':
      return { text: 'Publicado', classes: 'bg-success text-success' };
    case 'DRAFT':
      return { text: 'Borrador', classes: 'bg-warning text-warning' };
    case 'FINISHED':
      return { text: 'Finalizado', classes: 'bg-danger text-danger' };
    default:
      return { text: 'Desconocido', classes: 'bg-gray-300 text-gray-500' }; // Valor por defecto
  }
};

const PanelTable = ({ tableItems }: PanelTableProps) => {
  const userRole = useUserRole();
  const navigate = useNavigate();

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <section className="flex items-center justify-between mb-2">
        <div className="relative ">
          <button className="absolute left-0 top-1/2 -translate-y-1/2">
            <MdOutlineSearch size={30} />
          </button>

          <input
            type="text"
            placeholder="Buscar evento"
            className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-primary focus:inline-block  dark:text-white xl:w-125 rounded"
          />
        </div>

        <div className="mb-4">
          <RoundedFilledButton
            onClick={() => navigate('/panel/events/create')}
            className="flex items-center"
            icon={<MdOutlineCreateNewFolder size={30} />}
            text="Crear Nuevo evento"
          />
        </div>
      </section>
      <div className=" overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className=" py-4 px-4 font-medium text-black dark:text-white ">
                N° Evento
              </th>
              <th className=" py-4 px-4 font-medium text-black dark:text-white ">
                Portada
              </th>
              <th className=" py-4 px-4 font-medium text-black dark:text-white truncate">
                Titulo
              </th>
              {userRole === UserRoles.ADMINISTRADOR && (
                <th className=" py-4 px-4 font-medium text-black dark:text-white">
                  Productor
                </th>
              )}

              <th className=" py-4 px-4 font-medium text-black dark:text-white">
                Estado
              </th>
            </tr>
          </thead>

          {!tableItems && (
            <div className="my-5">
              Ah ocurrido un error, el obtener los eventos, por favor recargue
              la pagina
            </div>
          )}

          {tableItems && tableItems.length == 0 && (
            <div className="my-5">
              Todavia no hay eventos cargados, haz click en "Crear nuevo evento"
              para generar uno nuevo
            </div>
          )}
          {tableItems!.length > 0 && (
            <tbody>
              {tableItems!.map((item, key) => (
                <tr
                  key={key}
                  onClick={() =>
                    navigate(
                      item.state != 'DRAFT'
                        ? `/panel/events/overview/${item.id}`
                        : `/panel/events/create/${item.id}/tickets/publish`,
                    )
                  }
                  className="hover:bg-gray-3 dark:hover:bg-meta-4 hover:cursor-pointer"
                >
                  <td className="border-b border-[#eee] py-5 px-4  dark:border-strokedark ">
                    <h5 className="font-medium text-black dark:text-white">
                      {item.id}
                    </h5>
                  </td>
                  <td className=" py-5 px-4  dark:border-strokedark ">
                    <div className="h-12.5 w-15 ">
                      <img
                        src={item.photo}
                        alt="Foto Event"
                        className="rounded-lg"
                      />
                    </div>
                  </td>
                  <td className=" flex flex-col border-b border-[#eee] py-5 px-4  dark:border-strokedark truncate">
                    <h5 className="font-medium text-black dark:text-white truncate">
                      {item.name}
                    </h5>
                    <p className="text-sm truncate">
                      Fecha: {formatDate(item.date)}
                    </p>
                    {/* <p className="text-sm truncate">
                    {item.description.slice(0, 25)}
                  </p> */}
                  </td>
                  {userRole === UserRoles.ADMINISTRADOR && (
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark truncate">
                      <p className="text-black dark:text-white">
                        {item.creator?.name}
                      </p>
                    </td>
                  )}

                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                        getStateAttributes(item.state).classes
                      }`}
                    >
                      {getStateAttributes(item.state).text}
                    </p>
                  </td>
                  {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <MdOutlineRemoveRedEye size={24} />
                    </button>
                    <button className="hover:text-primary">
                      <MdDeleteForever size={24} />
                    </button>
                    <button className="hover:text-primary">
                      <MdDownload size={24} />
                    </button>
                  </div>
                </td> */}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export { PanelTable };
