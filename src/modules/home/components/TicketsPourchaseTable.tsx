import { GiTicket } from 'react-icons/gi';
import { RoundedFilledButton } from '../../../components';
import { TicketType } from '../types/homeTypes';

interface TicketsPourchaseTablePorps {
  tickets: TicketType[];
}

const TicketsPourchaseTable = ({ tickets }: TicketsPourchaseTablePorps) => {
  return (
    <div className="rounded-sm border mb-5 border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Tipo de entrada
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Precio/Valor
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Pantidad
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticketType, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-1 px-4  dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {ticketType.name}
                  </h5>
                  <p className="text-sm">{ticketType.description}</p>
                </td>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {ticketType.price === 0
                      ? 'Gratuito'
                      : `$ ${ticketType.price}`}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                  <select
                    name="categoryId"
                    id="categories"
                    className="border rounded-lg block w-full py-2.5 dark:bg-black focus:border-primary my-2"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.categoryId}
                  >
                    {Array.from({ length: ticketType.maxAmountPerUser }).map(
                      (_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ),
                    )}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex items-end justify-end ">
        <RoundedFilledButton text="Comprar tickets" icon={<GiTicket size={25}/>} />
      </div>
    </div>
  );
};

export { TicketsPourchaseTable };
