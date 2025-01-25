import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AuthStatus } from '../modules/Auth/types/authTypes';
import { Navigate } from 'react-router-dom';

interface ProtectecRouterProps {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: ProtectecRouterProps) => {
  const { status, user } = useSelector((state: RootState) => state.auth);

  if (!(user?.id && status === AuthStatus.AUTHENTICATED)) {
    return <Navigate to={'/auth/login'} />;
  } else return children;

};

export default ProtectedRoutes;
