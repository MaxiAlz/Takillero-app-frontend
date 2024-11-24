import { MdDelete } from 'react-icons/md';

import { TicketItem } from '../../../hooks/useCardTicketStorage';

interface SummaryProductsTableProps {
  // pourchaseEventId: number;
  selectedProductsCart: TicketItem[];
  // onRemoveProduct?: (ticketTypeId: number) => void;
}

const SummaryProductsTable = ({
  selectedProductsCart,
}: SummaryProductsTableProps) => {
  return (
    <div className="border border-black rounded-lg mb-5 bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="w-1/3 py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Producto
              </th>
              <th className="w-1/3 py-4 px-4 font-medium text-black dark:text-white">
                Valor
              </th>
              <th className="w-1/3 py-4 px-4 font-medium text-black dark:text-white">
                Cantidad
              </th>
              <th className="w-1/3 py-4 px-4 font-medium text-black dark:text-white">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedProductsCart.map((product, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {product.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.price === 0 ? 'Gratuito' : `$ ${product.price}`}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.quantity}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    <MdDelete
                      size={20}
                      className="cursor-pointer hover:text-primary"
                      // onClick={() => handleRemoveProduct(product.ticketTypeId)}
                    />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { SummaryProductsTable };
