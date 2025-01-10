export interface AccessCodeFormData {
  name: string;
  start: Date | string;
  end: Date | string;
  eventoId: number;
}

export interface AccessCode {
  code: string;
  name: string;
  end: Date | string;
  start: Date | string;
  id: number;
}
