export interface InvitationCodesResponse {
  message: string;
  data: InvitationCode[];
}

export interface InvitationCode {
  id: number;
  name: string;
  code: string;
}

export interface InvitationCodeBody {
  name: string;
  eventId: number;
}
