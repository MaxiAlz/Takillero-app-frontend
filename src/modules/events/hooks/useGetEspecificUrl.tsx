import { UserRoles } from '../../Auth/types/authTypes';

const useGetSpecificUrl = (path: string, userRole: UserRoles) => {
  if (userRole === UserRoles.ADMINISTRADOR) {
    return `/admin${path}`;
  }
  if (userRole === UserRoles.PRODUCTOR) {
    return `/seller${path}`;
  }
  return path; // Si no es ninguno de los anteriores
};

export { useGetSpecificUrl };
