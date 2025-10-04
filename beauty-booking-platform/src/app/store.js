import { configureStore } from '@reduxjs/toolkit';
import salonsReducer from '../features/salons/salonsSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    salons: salonsReducer,
    auth: authReducer,
  },
});