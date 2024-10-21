import { APP_TEXT } from '../../../common/text';
import { CardDataStats, PageTitle } from '../../../components';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  MdCurrencyExchange,
  MdEventAvailable,
  MdOutlinePeople,
  MdAttachMoney,
} from 'react-icons/md';

const OverviewPanel = () => {
  return (
    <>
      <PageTitle title={`Overview | ${APP_TEXT.app_name}`} />
      <DefaultLayout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats
            title="Eventos creados"
            key={'Total eventos'}
            rate="5,25"
            levelUp
            total="5.36 M"
          >
            <MdEventAvailable size={30} />
          </CardDataStats>
          <CardDataStats
            title="Usuarios totales"
            key={'Total Usuarios'}
            rate="25,25%"
            levelUp
            total="1.2 K"
          >
            <MdOutlinePeople size={30} />
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
            key={'Total ingresos'}
            rate="2,1%"
            levelDown
            total="$ 48 K"
          >
            <MdAttachMoney size={30} />
          </CardDataStats>
        </div>
      </DefaultLayout>
    </>
  );
};

export { OverviewPanel };
