import { Breadcrumb, PageTitle } from '../components';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
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
