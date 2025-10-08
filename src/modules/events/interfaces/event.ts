export type EventStatus = 'DRAFT' | 'PUBLISHED' | 'FINISHED';

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
  categoryId: number | null;
  isFree: boolean;
}

export interface TicketType {
  id?: number;
  name: string;
  description: string;
  price: number;
  endOfSale: Date | string;
  startOfSale: Date | string;
  isActive: boolean;
  totalAmount: number;
  maxAmountPerUser: number;
  eventId?: number;
}
export interface TicketLookLike {
  id?: number;
  name: string;
  description: string;
  price: number;
  endOfSale: string;
  startOfSale: string;
  totalAmount: number;
  maxAmountPerUser: number;
  eventId?: number;
}

export interface EvetsPaginated {
  items: ItemEvent[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ItemEvent {
  id: number;
  date: Date;
  subtitle: string;
  name: string;
  description: string;
  state: EventStatus;
  photo: string;
  verticalPhoto: string;
  creator?: EventCreator;
}

export interface EventCreator {
  id: number;
  name: string;
}

export interface EventDashboardData {
  eventId: number;
  eventName: string;
  totalTicketsSold: number;
  totalRevenue: number;
  ticketsByType: TicketsByType[];
}

export interface TicketsByType {
  ticketTypeId: number;
  ticketTypeName: string;
  soldCount: number;
}

// responses
export interface EventResponsePaginated {
  message: string;
  data: EvetsPaginated;
}
export interface EventResponse {
  message: string;
  data: EventLookLike;
}
export interface ResponseTicketTypes {
  message: string;
  data: TicketType[];
}

export interface EventDashboardResponse {
  message: string;
  data: EventDashboardData;
}
