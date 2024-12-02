import { useEffect, useState } from 'react';
const CART_TICKET_STORAGE_KEY = 'cartItemStorage';

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
  const [cartsPurchase, setCartsPurchase] = useState<EventCart[]>(() => {
    const savedCart = localStorage.getItem(CART_TICKET_STORAGE_KEY);
    if (savedCart) {
      const parsedCart: EventCart[] = JSON.parse(savedCart);
      const filteredCart = parsedCart.filter(
        (cart) => cart.ticketItems.length > 0,
      );
      localStorage.setItem(
        CART_TICKET_STORAGE_KEY,
        JSON.stringify(filteredCart),
      );
      return filteredCart;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      CART_TICKET_STORAGE_KEY,
      JSON.stringify(cartsPurchase),
    );
  }, [cartsPurchase]);

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

  return { cartsPurchase, addItem, removeItem, clearCart,removeEventCart };
};
