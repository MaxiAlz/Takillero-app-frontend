import { Action, Dispatch, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { apiService } from '../../../services/apiService';
import { setError, setLogoutUser, setUserAuthenticated } from './authSlice';
import {
  UserLoginData,
  // UserProfile,
} from '../../../modules/Auth/types/authTypes';

const loginUser =
  (
    user: UserLoginData,
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      const response = await apiService.post('/Auth/login', user);

      if (response.status == 200) {
        dispatch(setUserAuthenticated(response.data));
        return response;
      }
    } catch (error) {
      dispatch(setError(`Failed to login ${error}`));
      dispatch(setLogoutUser());
    }
  };

const checkUserSession =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      const response = await apiService.get('/Auth/profile');
      console.log('/Auth/login', response);
      if (response.status === 200) {
        dispatch(setUserAuthenticated(response.data));
      } else {
        dispatch(setLogoutUser());
      }
    } catch (error) {
      dispatch(setLogoutUser());
    }
  };

const logoutUser =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      const response = await apiService.post('/Auth/logout');
      if (response.status === 200) {
        dispatch(setLogoutUser());
      }
    } catch (error) {
      setError('Error al salir de la sesion');
    }
  };

export { loginUser, checkUserSession, logoutUser };
