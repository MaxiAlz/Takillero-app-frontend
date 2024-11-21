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
  state: string;
  photo: string;
  verticalPhoto: string;
  minimumPrice: number;
}

export interface EventDetailLookLike {
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

export interface TicketType {
  id: number;
  name: string;
  description: string;
  price: number;
  endOfSale: Date;
  startOfSale: Date;
  totalAmount: number;
  maxAmountPerUser: number;
}
