import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthStatus,
  LoginState,
  UserProfile,
} from '../../../modules/Auth/types/authTypes';

const initialState: LoginState = {
  user: null,
  status: AuthStatus.CHECKING,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuthenticated: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
      state.status = AuthStatus.AUTHENTICATED;
    },
    setLogoutUser(state: LoginState) {
      state.user = null;
      state.status = AuthStatus['NOT-AUTHENTICATED'];
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      
    },
  },
});

// Exporta las acciones para usarlas en los componentes
export const { setUserAuthenticated, setLogoutUser, setError } =
  authSlice.actions;

// Exporta el reducer para incluirlo en el store
export default authSlice.reducer;
