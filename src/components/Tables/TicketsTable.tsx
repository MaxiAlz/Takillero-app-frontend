import { MdAttachMoney, MdDoDisturbAlt } from 'react-icons/md';
import { IoTicketSharp } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa6';
import { FiAlertTriangle } from 'react-icons/fi';
import { ticketsHelper } from '../../helpers/ticketsHelper';
import {
  formatDateShortWithMonth,
  getDaysRemaining,
} from '../../helpers/formatDate';
import { useDisableTicketByIdMutation } from '../../modules/events/hooks/useTicketMutation';
import { useAlert } from '../../context/AlertContext';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { ModalCustom } from '../Modal/ModalCustom';
import { RoundedFilledButton, RoundedOutlineButton } from '../Buttons';
import { EventDashboardData, TicketType } from '../../modules/events';

interface TicketsTableProps {
  tableItems: TicketType[];
  ticketsInfo: EventDashboardData;
}

interface SelectedTicket {
  id: number;
  name: string;
}

const TicketsTable = ({ tableItems, ticketsInfo }: TicketsTableProps) => {
  console.log('tableItems', ticketsInfo);
  console.log('tableItems', tableItems);

  const disableTicketMutation = useDisableTicketByIdMutation();
  const queryClient = useQueryClient();
  const { showErrorToast, showSuccessToast } = useAlert();

  const [selectedTicket, setSelectedTicket] = useState<SelectedTicket | null>(
    null,
  );
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (ticket: SelectedTicket) => {
    setSelectedTicket(ticket);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setSelectedTicket(null);
    setOpenModal(false);
  };

  const handleDisable = () => {
    if (!selectedTicket) return;
    disableTicketMutation.mutate(selectedTicket.id, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: ['ticket-types'],
        });
        showSuccessToast(`El ticket "${data.name}" fue pausado correctamente`);
      },
      onError: () => {
        showErrorToast('Hubo un error al pausar el ticket');
      },
    });
  };

  const getSaleMessage = (
    ticketStatus: any,
    daysRemaining: number,
    start: string,
    end: string,
  ) => {
    if (ticketStatus.status === 'active') {
      return `Quedan ${daysRemaining} día${daysRemaining !== 1 ? 's' : ''}`;
    }
    if (ticketStatus.status === 'upcoming') {
      return `Disponible el ${formatDateShortWithMonth(start)}`;
    }
    if (ticketStatus.status === 'expired') {
      return `Finalizó el ${formatDateShortWithMonth(end)}`;
    }
    return '';
  };

  return (
    <>
      <ModalCustom
        title="Pausar Ticket"
        openModal={openModal}
        setOpenModal={handleCloseModal}
      >
        <div>
          <p className="dark:text-white">
            ¿Esta seguro que desea desactivar las ventas del ticket{' '}
            <span className="font-bold">{selectedTicket?.name}</span> ? Esta
            accion no se puede deshacer
          </p>

          <div className="flex justify-between mt-5">
            <RoundedOutlineButton
              text="Cancelar"
              onClick={() => handleCloseModal()}
            />
            <RoundedFilledButton
              onClick={() => handleDisable()}
              disabled={disableTicketMutation.isPending}
              text="Desactivar ventas"
              isLoading={disableTicketMutation.isPending}
            />
          </div>
        </div>
      </ModalCustom>
      <div className="rounded-sm border my-4 border-stroke bg-white px-5 pt-6 pb-2.5 shadow-md dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <section className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Visualizador de entradas</h2>
        </section>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left dark:bg-meta-4">
                <th className="py-3 px-4">Tipo de ticket</th>
                <th className="py-3 px-4">Total Ventas</th>
                <th className="py-3 px-4">Ingresos</th>
                <th className="py-3 px-4">Estado</th>
                <th className="py-3 px-4">Periodo</th>
                <th className="py-3 px-4">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {tableItems?.map((item, key) => {
                const ticketStatus = ticketsHelper.getTicketStatus(
                  item.startOfSale,
                  item.endOfSale,
                );
                const daysRemaining = getDaysRemaining(item.endOfSale);
                const saleMessage = getSaleMessage(
                  ticketStatus,
                  daysRemaining,
                  item.startOfSale as string,
                  item.endOfSale as string,
                );

                return (
                  <tr key={key} className="">
                    {/* Columna ticket */}
                    <td className="border-b py-5 px-4">
                      <h5 className="font-medium text-black dark:text-white">
                        {item.name}
                      </h5>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>

                      <section className="mt-2 flex gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MdAttachMoney className="text-primary" />
                          <span className="font-semibold">
                            {item.price === 0 ? 'Gratuito' : `$${item.price}`}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IoTicketSharp className="text-primary" />
                          <p>
                            Total:{' '}
                            <span className="font-semibold">
                              {item.totalAmount}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUsers className="text-primary" />
                          <p>
                            Máximo:{' '}
                            <span className="font-semibold">
                              {item.maxAmountPerUser}
                            </span>
                          </p>
                        </div>
                      </section>
                    </td>

                    {/* Columna ventas */}
                    <td className="border-b py-5 px-4">
                      {(() => {
                        // Encontramos el ticket correspondiente en ticketsInfo
                        const ticketSoldInfo = ticketsInfo.ticketsByType.find(
                          (t) => t.ticketTypeId === item.id,
                        );

                        const soldCount = ticketSoldInfo?.soldCount || 0;
                        const total = item.totalAmount;
                        const percentage =
                          total > 0 ? (soldCount / total) * 100 : 0;

                        return (
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {soldCount} / {total}
                            </span>
                            <span className="text-gray-500 text-sm mt-1">
                              {percentage.toFixed(1)}% vendido
                            </span>
                            {percentage > 70 && (
                              <FiAlertTriangle className="inline ml-2 text-yellow-500" />
                            )}
                          </div>
                        );
                      })()}
                    </td>

                    <td className="border-b py-5 px-4">
                      {(() => {
                        const ticketSoldInfo = ticketsInfo.ticketsByType.find(
                          (t) => t.ticketTypeId === item.id,
                        );

                        const soldCount = ticketSoldInfo?.soldCount || 0;
                        const revenue = soldCount * item.price;

                        return (
                          <div className="flex flex-col">
                            <span className=" mt-1">${revenue}</span>
                          </div>
                        );
                      })()}
                    </td>

                    {/* Columna estado */}
                    <td className="border-b py-5 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                          item.isActive ? 'bg-success' : 'bg-error'
                        }`}
                      >
                        {item.isActive ? 'Venta Activa' : 'Venta Inactiva'}
                      </span>
                    </td>

                    {/* Columna periodo */}
                    <td className="border-b py-5 px-4 text-sm text-gray-700 dark:text-gray-300">
                      <p>
                        {formatDateShortWithMonth(item.startOfSale)} →{' '}
                        {formatDateShortWithMonth(item.endOfSale)}
                      </p>
                      <p className="text-primary text-gray-500 mt-1">
                        {saleMessage}
                      </p>
                    </td>

                    {/* Columna acciones */}
                    <td className="border-b py-5 px-4">
                      <div className="flex gap-2">
                        <button
                          className={`${
                            item.isActive
                              ? 'bg-error hover:shadow-error hover:shadow-1 '
                              : 'bg-error/20 '
                          }  rounded-full flex items-center gap-2 p-1  `}
                          disabled={!item.isActive}
                          onClick={() =>
                            handleOpenModal({ id: +item.id!, name: item.name })
                          }
                        >
                          <MdDoDisturbAlt size={20} className="text-white" />

                          <p
                            className={`text-sm ${
                              item.isActive ? 'text-white' : 'text-error'
                            }`}
                          >
                            Desactivar ventas
                          </p>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { TicketsTable };
