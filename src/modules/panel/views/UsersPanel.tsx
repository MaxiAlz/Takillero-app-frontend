import {
  Breadcrumb,
  PageTitle,
  UsersTable,
} from '../../../components';
import Loader from '../../../components/Loader';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useGetUsers } from '../hooks/useGetUsers';

const UsersPanel = () => {
  const { usersData, isLoading, setPage } = useGetUsers();

  console.log('users', usersData);
  return (
    <>
      <PageTitle title="Usuarios" />
      <DefaultLayout>
        <Breadcrumb pageName="Usuarios" />
        {isLoading && !usersData?.data.items && <Loader />}

        {usersData?.data.items && (
          <UsersTable usersItems={usersData.data} setPage={setPage} />
        )}
      </DefaultLayout>
    </>
  );
};

export { UsersPanel };
