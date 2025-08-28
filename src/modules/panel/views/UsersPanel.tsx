import { Breadcrumb, PageTitle, UsersTable } from '../../../components';
import Loader from '../../../components/Loader';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useGetUsers } from '../hooks/useGetUsers';

const UsersPanel = () => {
  const { users, isLoading } = useGetUsers();

  return (
    <>
      <PageTitle title="Usuarios" />
      <DefaultLayout>
        <Breadcrumb pageName="Usuarios" />
        {isLoading && !users?.data.items && <Loader />}

        {users?.data.items && <UsersTable usersItems={users.data.items} />}
      </DefaultLayout>
    </>
  );
};

export { UsersPanel };
