import { configureStore } from '@reduxjs/toolkit';
import { aboutSlice } from './services/aboutSlice';

const store = configureStore({
  reducer: {
    [aboutSlice.reducerPath]: aboutSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aboutSlice.middleware),
});

export default store;
