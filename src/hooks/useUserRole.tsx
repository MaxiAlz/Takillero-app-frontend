import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useUserRole = () => {
  const userRole = useSelector((state: RootState) => state.auth.user!.role);
  return userRole;
};
export { useUserRole };
