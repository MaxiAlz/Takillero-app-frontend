import { ReactNode } from 'react';
// import { Navigate } from 'react-router-dom';
// import { TOKEN_KEY } from '../services/auth/authService';

interface ProtectecRouterProps {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: ProtectecRouterProps) => {
  // if (!localStorage.getItem(TOKEN_KEY)) {
  //   <Navigate to={'/login'} />;
  // }
  return children;
};

export default ProtectedRoutes;
