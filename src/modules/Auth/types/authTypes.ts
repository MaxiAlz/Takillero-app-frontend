export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  profileImage: string | null;
  role: UserRoles;
  email: string;
}

export interface UserProfile {
  message: string;
  data: UserData;
}

export enum UserRoles {
  PRODUCTOR = 'SELLER',
  ADMINISTRADOR = 'ADMIN',
  USUARIO = 'USUARIO',
  COMPRADOR = 'BUYER',
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
