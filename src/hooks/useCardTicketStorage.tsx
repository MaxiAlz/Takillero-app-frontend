import { useEffect, useState } from 'react';
import { CART_TICKET_STORAGE_KEY } from '../constants/storageKeys';
import { secureLocalStorage } from '../helpers/secureLocalStorage';

export interface TicketItem {
  ticketTypeId: number;
  name: string;
  price: number;
  quantity: number;
}

export interface EventCart {
  eventId: number;
  eventName: string;
  ticketItems: TicketItem[];
}

export interface TicketParams {
  id: number;
  name: string;
  price: number;
  maxAmountPerUser: number;
}

export const useCartTicketStorage = () => {
  const { setEncryptedItem, getEncryptedItem } = secureLocalStorage();

  const [cartsPurchase, setCartsPurchase] = useState<EventCart[]>(() => {
    const savedCart = getEncryptedItem<EventCart[]>(CART_TICKET_STORAGE_KEY);
    if (savedCart) {
      const filteredCart = savedCart.filter(
        (cart) => cart.ticketItems.length > 0,
      );
      setEncryptedItem(CART_TICKET_STORAGE_KEY, filteredCart);
      return filteredCart;
    }
    return [];
  });

  useEffect(() => {
    setEncryptedItem(CART_TICKET_STORAGE_KEY, cartsPurchase);
  }, [cartsPurchase, setEncryptedItem]);

  const addItem = (
    eventId: number,
    eventName: string,
    ticketItem: TicketParams,
    quantity: number,
  ) => {
    const newItem: TicketItem = {
      ticketTypeId: ticketItem.id,
      name: ticketItem.name,
      price: ticketItem.price,
      quantity: quantity,
    };

    setCartsPurchase((prev) => {
      const eventCart = prev.find((cart) => cart.eventId === eventId);

      if (eventCart) {
        const existingItemIndex = eventCart.ticketItems.findIndex(
          (cartItem) => cartItem.ticketTypeId === newItem.ticketTypeId,
        );

        if (existingItemIndex >= 0) {
          // Actualizar cantidad del item existente
          eventCart.ticketItems[existingItemIndex].quantity = quantity;
        } else {
          // Agregar nuevo ticket al evento existente
          eventCart.ticketItems.push(newItem);
        }
      } else {
        // Crear nuevo carrito de evento
        prev.push({ eventId, eventName, ticketItems: [newItem] });
      }

      // Filtrar eventos sin tickets antes de retornar
      return prev.filter((cart) => cart.ticketItems.length > 0);
    });
  };

  const removeItem = (ticketTypeId: number) => {
    setCartsPurchase((prev) =>
      prev.map((cart) => ({
        ...cart,
        ticketItems: cart.ticketItems.filter(
          (item) => item.ticketTypeId !== ticketTypeId,
        ),
      })),
    );
  };

  const removeEventCart = (eventId: number) => {
    setCartsPurchase((prev) => prev.filter((cart) => cart.eventId !== eventId));
  };

  const clearCart = () => {
    setCartsPurchase([]);
  };

  return { cartsPurchase, addItem, removeItem, clearCart, removeEventCart };
};
