import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';


// Tipos para `useSelector` y `useDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export { store };
