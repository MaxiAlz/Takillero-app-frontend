export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserProfile {
  name: string;
  role: UserRoles;
  // id: number;
  // userName: string;
  email: string;
}

export enum UserRoles {
  PRODUCTOR = 'SELLER',
  ADMINISTRADOR = 'ADMIN',
  USUARIO = 'USUARIO',
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
