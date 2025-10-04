import { configureStore } from '@reduxjs/toolkit';
import salonsReducer from '../features/salons/salonsSlice';

export const store = configureStore({
  reducer: {
    salons: salonsReducer,
  },
});