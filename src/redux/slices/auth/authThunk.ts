import { Action, Dispatch, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { apiService } from '../../../api/apiService';
import { logoutUser, setError, setUserAuthenticated } from './authSlice';
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
      console.log('response', response);
      if (response.status == 200) {
        dispatch(setUserAuthenticated(response.data));
        return response;
      }
    } catch (error) {
      dispatch(setError(`Failed to login ${error}`));
      dispatch(logoutUser());
    }
  };

const checkUserSession =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      const response = await apiService.get('/Auth/profile');
      if (response.status === 200) {
        dispatch(setUserAuthenticated(response.data)); 
      } else {
        
        dispatch(logoutUser()); 
      }
    } catch (error) {
      dispatch(logoutUser());
    }
  };

export { loginUser, checkUserSession };
