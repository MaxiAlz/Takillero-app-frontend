import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { AuthStatus } from '../modules/Auth/types/authTypes';

interface LoginRouterProps {
  children: ReactNode;
}

const NoRoutesForAuthenticated = ({ children }: LoginRouterProps) => {
  const { status, user } = useSelector((state: RootState) => state.auth);

  if (user?.data.role && status === AuthStatus.AUTHENTICATED) {
    return <Navigate to={'/'} />;
  } else return children;
};

export default NoRoutesForAuthenticated;
