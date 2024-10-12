export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserProfile {
  name: string;
  role: number;
  id: number;
  userName: string;
  email: string;
}

export enum AuthStatus {
  'CHECKING',
  'NOT-AUTHENTICATED',
  'AUTHENTICATED',
}

export interface LoginState {
  user: UserProfile | null;
  status: AuthStatus;
  error: string;
}

