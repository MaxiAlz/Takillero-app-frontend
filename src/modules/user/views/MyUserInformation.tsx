import { PageTitle } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CardUserInfo } from '../components/CardUserInfo';

const MyUserInformation = () => {
  return (
    <>
      <PageTitle title="Informacion personal" />
      <DefaultLayout>
        <CardUserInfo />
      </DefaultLayout>
    </>
  );
};

export { MyUserInformation };
