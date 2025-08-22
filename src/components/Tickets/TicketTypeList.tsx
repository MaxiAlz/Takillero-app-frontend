import { Card, Tooltip } from 'flowbite-react';
import { FaUsers } from 'react-icons/fa6';
import { IoTicketSharp } from 'react-icons/io5';
import {
  MdAccessTime,
  MdAttachMoney,
  MdDeleteForever,
  MdEventAvailable,
  MdEventBusy,
} from 'react-icons/md';
import { formatDateShortWithMonth } from '../../helpers/formatDate';

interface TicketTypeProps {
  setOpenModal: (open: boolean) => void;
  setSelectetTicket: (ticketId: number | undefined) => void;
  handleOpenModalConfirm: (ticketId: number, ticketName: string) => void;
  id?: number;
  name: string;
  totalAmount: number;
  price: number;
  description?: string;
  maxAmountPerUser: number;
  startOfSale: string;
  endOfSale: string;
}

const getTicketStatus = (startDate: string, endDate: string) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start)
    return {
      status: 'upcoming',
      label: 'Próximamente',
      color: 'bg-warning text-white',
    };
  if (now > end)
    return {
      status: 'expired',
      label: 'Expirada',
      color: 'bg-error  text-xs',
    };
  return {
    status: 'active',
    label: 'Activa',
    color: 'bg-success text-white text-xs',
  };
};

const getDaysRemaining = (endDate: string) => {
  const now = new Date();
  const end = new Date(endDate);
  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const TicketTypeList = ({
  setOpenModal,
  setSelectetTicket,
  handleOpenModalConfirm,
  id,
  name,
  totalAmount,
  price,
  description,
  maxAmountPerUser,
  startOfSale,
  endOfSale,
}: TicketTypeProps) => {
  const ticketStatus = getTicketStatus(startOfSale, endOfSale);
  const daysRemaining = getDaysRemaining(endOfSale);

  const getSaleMessage = () => {
    if (ticketStatus.status === 'active') {
      return `Quedan ${daysRemaining} día${daysRemaining !== 1 ? 's' : ''}`;
    }
    if (ticketStatus.status === 'upcoming') {
      return `Disponible el ${formatDateShortWithMonth(startOfSale)}`;
    }
    if (ticketStatus.status === 'expired') {
      return `Finalizó el ${formatDateShortWithMonth(endOfSale)}`;
    }
    return '';
  };

  return (
    <div key={id + name} className="flex items-center justify-between my-3">
      <Card
        className="dark:bg-black w-full ml-2 hover:cursor-pointer hover:shadow-primary"
        onClick={() => {
          setOpenModal(true);
          setSelectetTicket(id!);
        }}
      >
        <section className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <div
                className={`flex items-center gap-1 ${ticketStatus.color} rounded-md ml-2 px-1 py-1 text-sm font-medium`}
              >
                {ticketStatus.status === 'active' && <MdEventAvailable />}
                {ticketStatus.status === 'expired' && <MdEventBusy />}
                {ticketStatus.status === 'upcoming' && <MdAccessTime />}
                Venta: <span className="font-bold">{ticketStatus.label}</span>
              </div>
            </div>
            <p>{description}</p>
          </div>
          <div>
            <Tooltip content="Eliminar Ticket" className="bg-primary">
              <button
                className="text-primary hover:text-red-700"
                onClick={(e) => {
                  e.stopPropagation(); // 👈 evita que llegue al onClick del Card
                  handleOpenModalConfirm(id!, name);
                }}
              >
                <MdDeleteForever size={30} />
              </button>
            </Tooltip>
          </div>
        </section>

        <section className="flex justify-between items-center">
          <div></div>
          <div className="flex items-center ">
            <MdAttachMoney size={25} className="text-primary" />
            <span className="font-bold text-lg">
              {price === 0 ? 'Gratuito' : price}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IoTicketSharp size={25} className="text-primary" />
            <p>
              Total:<span className="font-bold">{totalAmount}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers size={25} className="text-primary" />
            <p>
              Máximo:<span className="font-bold">{maxAmountPerUser}</span>
            </p>
          </div>

          <Tooltip
            content={`${formatDateShortWithMonth(
              startOfSale,
            )} al ${formatDateShortWithMonth(endOfSale)}`}
            className="bg-primary text-white"
          >
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <MdAccessTime size={25} className="text-primary" />
              <span>{getSaleMessage()}</span>
            </div>
          </Tooltip>
        </section>
      </Card>
    </div>
  );
};

export { TicketTypeList };
