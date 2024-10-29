export interface Event {
  id: number;
  name: string;
  description: string;
  photo: string;
  verticalPhoto: string;
  venue: string;
  subtitle: string;
  location: string;
  date: Date;
}

export interface CreateEventData {
  name: string;
  subtitle: string;
  photo: string;
  verticalPhoto: string;
  venue: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface EventLookLike {
  id?: number;
  name: string;
  subtitle: string;
  photo: string;
  verticalPhoto: string;
  venue: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface TicketType {
  id?: number;
  name: string;
  description: string;
  price: number;
  endOfSale: Date;
  startOfSale: Date;
  totalAmount: number;
  maxAmountPerUser: number;
  eventId: number;
}
