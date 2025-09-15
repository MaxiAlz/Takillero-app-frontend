export interface PourchaseResponse {
  message: string;
  data: PurchaseData | null;
}
export interface PourchaseFreeEventResponse {
  message: string;
  data: { externalReference: string };
}

export interface PurchaseData {
  eventData: EventData;
  personaData: PersonaData;
  tickets: Ticket[];
}

export interface EventData {
  name: string;
  date: Date | string;
  location: string;
  photo: string;
  verticalPhoto: string;
  venue: string;
}

export interface PersonaData {
  name: string;
  dni: string;
}

export interface Ticket {
  code: string;
  type: string;
}

export interface ExternalReferenceResponse {
  message: string;
  data: EventData;
}

export interface EventData {
  eventName: string;
  personName: string;
  totalPrice: number;
  tickets: Ticket[];
}

export interface Ticket {
  ticketTypeName: string;
  price: number;
  quantity: number;
}
