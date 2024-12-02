import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartTicketStorage } from '../../hooks/useCardTicketStorage';

import { MdDeleteOutline, MdOutlineShoppingCart } from 'react-icons/md';
import { formatUrlToString } from '../../helpers';

const DropdownShoppingCart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { cartsPurchase, clearCart } = useCartTicketStorage();
  const [itemCount, setItemCount] = useState(0);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // Actualizar contador de items
  useEffect(() => {
    const totalItems = cartsPurchase.reduce(
      (total, cart) =>
        total + cart.ticketItems.reduce((sum, item) => sum + item.quantity, 0),
      0,
    );
    setItemCount(totalItems);
  }, [cartsPurchase]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // Cerrar con tecla ESC
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        to="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        {itemCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 z-1 h-4 w-4 rounded-full bg-meta-1 flex items-center justify-center text-xs text-white">
            {itemCount}
          </span>
        )}

        <MdOutlineShoppingCart />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">
            Carrito de Compras
          </h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {cartsPurchase.length === 0 ? (
            <li className="px-4.5 py-3 text-sm text-center text-bodydark2">
              Tu carrito está vacío
            </li>
          ) : (
            cartsPurchase.map((cart) => (
              <li
                key={cart.eventId}
                className="hover:cursor-pointer"
                onClick={() =>
                  navigate(
                    `/${formatUrlToString(cart.eventName)}/${cart.eventId}`,
                  )
                }
              >
                <div className="flex flex-col border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-black dark:text-white mb-2 truncate">
                      {cart.eventName}
                    </div>
                  </div>
                  {cart.ticketItems.map((item) => (
                    <div
                      key={item.ticketTypeId}
                      className="flex justify-between items-center mb-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded-full flex items-center justify-center text-xs">
                          {item.quantity}x
                        </span>
                        <h6 className="text-sm font-medium ">{item.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            ))
          )}
        </ul>

        {cartsPurchase.length > 0 && (
          <div className="w-full absolute bottom-0 left-0">
            <div className="w-full border-t border-stroke dark:border-strokedark my-2"></div>
            <button
              onClick={clearCart}
              className="w-full text-primary hover:text-primary/80 flex items-center justify-center gap-2 pb-2"
            >
              <MdDeleteOutline /> <p>Vaciar carrito</p>
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export { DropdownShoppingCart };
