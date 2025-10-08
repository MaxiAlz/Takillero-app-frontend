import { Breadcrumb, PageTitle } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CategoryManager } from '../components/CategoryManager';

const PersonalizePanel = () => {
  return (
    <>
      <PageTitle title="Personalizar" />
      <DefaultLayout>
        <Breadcrumb pageName="Personalizar" />
        <CategoryManager />
      </DefaultLayout>
    </>
  );
};

export { PersonalizePanel };
