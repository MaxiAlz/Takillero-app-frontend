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

