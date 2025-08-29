import { MdDelete, MdEdit, MdOutlineSearch } from 'react-icons/md';
import { RoundedFilledButton } from '../Buttons';
import { UsersItems } from '../../modules/panel/interfaces/adminTypes';
import { FaUser } from 'react-icons/fa6';
import { formatDateShortWithMonth } from '../../helpers/formatDate';
import { UserRoles } from '../../modules/Auth/types/authTypes';
import { useState } from 'react';
import { ModalCustom } from '../Modal/ModalCustom';
import { CreateUserForm } from '../../modules/panel/components/CreateUserForm';

interface UsersTableProps {
  usersItems: UsersItems[];
}
const UsersTable = ({ usersItems }: UsersTableProps) => {
  // const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const getRoleAttributes = (role: UserRoles | string) => {
    switch (role) {
      case UserRoles.ADMINISTRADOR:
        return {
          text: 'Administrador',
          classes: 'bg-success text-white',
        };
      case UserRoles.PRODUCTOR:
        return {
          text: 'Productor',
          classes: 'bg-primary text-white',
        };
      case UserRoles.COMPRADOR:
        return {
          text: 'Comprador',
          classes: 'bg-warning text-white',
        };
      default:
        return {
          text: role,
          classes: 'bg-blue-600 text-white  ',
        };
    }
  };

  return (
    <>
      <ModalCustom
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Crear Nuevo Usuario"
      >
        <CreateUserForm setOpenModal={setOpenModal} />
      </ModalCustom>
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
              onClick={() => setOpenModal(true)}
              className="flex items-center"
              icon={<FaUser />}
              text="Crear Nuevo usuario"
            />
          </div>
        </section>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className=" py-4 px-4 font-medium text-black dark:text-white ">
                  Usuario
                </th>
                <th className=" py-4 px-4 font-medium text-black dark:text-white ">
                  Rol
                </th>
                <th className=" py-4 px-4 font-medium text-black dark:text-white truncate">
                  Fecha de registro
                </th>
                <th className=" py-4 px-4 font-medium text-black dark:text-white">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200 dark:divide-gray-700">
              {usersItems.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full  bg-primary flex items-center justify-center">
                        <span className="text-white font-medium ">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {user.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        getRoleAttributes(user.role).classes
                      }`}
                    >
                      {getRoleAttributes(user.role).text}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatDateShortWithMonth(user.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      <button
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        // onClick={() => onEditUser?.(user)}
                        title="Editar usuario"
                      >
                        <MdEdit size={18} />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                        // onClick={() => onDeleteUser?.(user)}
                        title="Eliminar usuario"
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { UsersTable };
