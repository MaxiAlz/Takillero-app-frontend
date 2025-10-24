export interface PublicEvents {
  items: EventItem[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface EventItem {
  id: number;
  date: Date;
  name: string;
  description: string;
  subtitle: string;
  venue: string;
  location: string;
  state: string;
  photo: string;
  verticalPhoto: string;
  minimumPrice: number;
  categoryName: string;
  categoryColor: string;
}

export interface PublicEventData {
  name: string;
  description: string;
  subtitle: string;
  photo: string;
  verticalPhoto: string;
  date: Date;
  location: string;
  venue: string;
  ticketTypes: TicketType[];
}

export interface PublicEventsPaginated {
  items: EventItem[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface EventDatailLookLike {
  message: string;
  data: PublicEventsPaginated;
}

export interface EventDetailsResponse {
  message: string;
  data: PublicEventData;
}
export interface TicketType {
  id?: number;
  name: string;
  description: string;
  price: number;
  endOfSale: string;
  isActive?: boolean;
  startOfSale: string;
  totalAmount: number;
  maxAmountPerUser: number;
}

export type PourchaseProductItem = {
  ticketTypeId: number;
  name: string;
  price: number;
  quantity: number;
};

export interface PurchaseEventProductsPayload {
  ticketItems: PourchaseProductItem[];
  email: string;
  name: string;
  dni: string;
  invitationCode?: string;
}
