import {
  Breadcrumb,
  CardDataStats,
  PageTitle,
  RoundedFilledButton,
} from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  MdCurrencyExchange,
  MdEventAvailable,
  MdAttachMoney,
} from 'react-icons/md';

import { GiTicket } from 'react-icons/gi';
import { useAlert } from '../../../context/AlertContext';

const OverviewPanel = () => {
  const { showSuccessToast, showErrorToast, showDefaultToast } = useAlert();

  return (
    <>
      <PageTitle title="Overview" />
      <DefaultLayout>
        <Breadcrumb pageName="Overview" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats
            title="Eventos creados"
            key={'Total eventos'}
            rate="5,25"
            levelUp
            total="1,3 K"
          >
            <MdEventAvailable size={30} />
          </CardDataStats>
          <CardDataStats
            title="Tickets vendidos"
            key={'Total Usuarios'}
            rate="25,25%"
            levelUp
            total="5.36 M"
          >
            <GiTicket size={30} />
          </CardDataStats>
          <CardDataStats
            title="Ventas"
            key={'Total ingresos'}
            rate="32,8%"
            levelUp
            total="$ 1.200 K"
          >
            <MdCurrencyExchange size={30} />
          </CardDataStats>
          <CardDataStats
            title="Ganancias"
            key={'Total Ganancias'}
            rate="2,1%"
            levelDown
            total="$ 48 K"
          >
            <MdAttachMoney size={30} />
          </CardDataStats>

          <RoundedFilledButton
            text="showDefaultToast"
            onClick={() => showDefaultToast('showDefaultToast')}
          />
          <RoundedFilledButton
            text="showSuccessToast"
            onClick={() => showSuccessToast('showSuccessToast')}
          />
        </div>
      </DefaultLayout>
    </>
  );
};

export { OverviewPanel };
