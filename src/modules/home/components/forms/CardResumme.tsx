import { BUSSINES_DATA } from '../../../../constants/bussinessData/businesData';
import { PourchaseProductItem } from '../../types/homeTypes';

interface CardResumeProps {
  selectedProductsCart: PourchaseProductItem[];
  hasPaidProducts: boolean;
}

const CardResume = ({
  selectedProductsCart,
  hasPaidProducts,
}: CardResumeProps) => {
  const { SERVICE_CHARGE_PERCENTAGE, TAX_PERCENTAGE } = BUSSINES_DATA;

  const formatPrice = (price: number): string => {
    return price.toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
    });
  };

  return (
    <div className="border border-black rounded-lg mb-5 w-full bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-white dark:bg-boxdark sm:px-7.5">
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Resumen de Compra
      </h2>

      <div className="flex justify-between mb-2">
        <span className="text-gray-600 dark:text-gray-400">
          Productos({selectedProductsCart.length})
        </span>
        <span className="font-semibold text-black dark:text-white">
          {formatPrice(
            selectedProductsCart.reduce(
              (acc, curr) => acc + curr.price * curr.quantity,
              0,
            ),
          )}
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600 dark:text-gray-400">
          Cargos por servicio
        </span>
        <span className="font-semibold text-black dark:text-white">
          {formatPrice(
            hasPaidProducts
              ? selectedProductsCart.reduce(
                  (acc, curr) => acc + curr.price * curr.quantity,
                  0,
                ) * SERVICE_CHARGE_PERCENTAGE
              : 0,
          )}
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600 dark:text-gray-400">Impuestos</span>
        <span className="font-semibold text-black dark:text-white">
          {formatPrice(
            hasPaidProducts
              ? selectedProductsCart.reduce(
                  (acc, curr) => acc + curr.price * curr.quantity,
                  0,
                ) * TAX_PERCENTAGE
              : 0,
          )}
        </span>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
      <div className="flex justify-between mb-4">
        <span className=" font-bold text-xl text-black dark:text-white">
          Total a pagar:
        </span>
        <span className="font-semibold text-xl text-black dark:text-white">
          {formatPrice(
            hasPaidProducts
              ? selectedProductsCart.reduce(
                  (acc, curr) => acc + curr.price * curr.quantity,
                  0,
                ) +
                  selectedProductsCart.reduce(
                    (acc, curr) => acc + curr.price * curr.quantity,
                    0,
                  ) *
                    SERVICE_CHARGE_PERCENTAGE +
                  selectedProductsCart.reduce(
                    (acc, curr) => acc + curr.price * curr.quantity,
                    0,
                  ) *
                    TAX_PERCENTAGE
              : 0,
          )}
        </span>
      </div>
    </div>
  );
};

export { CardResume };
