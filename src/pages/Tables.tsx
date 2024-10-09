import {
  Breadcrumb,
  PageTitle,
  TableOne,
  TableThree,
  TableTwo,
} from '../components';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  return (
    <>
      <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
      <DefaultLayout>
        <Breadcrumb pageName="Tables" />

        <div className="flex flex-col gap-10">
          <TableOne />
          <TableTwo />
          <TableThree />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Tables;
