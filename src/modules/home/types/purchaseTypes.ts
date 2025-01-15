export interface PourchaseResponse {
  message: string;
  data: PurchaseData | null;
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
