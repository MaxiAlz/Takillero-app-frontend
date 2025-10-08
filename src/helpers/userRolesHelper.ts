import { UserRoles } from "../modules/Auth/types/authTypes";

  export const setUserRoleTag = (userRole: UserRoles | undefined) => {
    switch (userRole) {
      case UserRoles.PRODUCTOR:
        return 'PRODUCTOR';

      case UserRoles.ADMINISTRADOR:
        return 'ADMINISTRADOR';

      default:
        return 'USUARIO';
    }
  };
