import { configureStore } from '@reduxjs/toolkit';
import { aboutApi } from './services/aboutApi';
import { differenceApi } from './services/differenceApi';

const store = configureStore({
  reducer: {
    [aboutApi.reducerPath]: aboutApi.reducer,
    [differenceApi.reducerPath]: differenceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aboutApi.middleware).concat(differenceApi.middleware),
});

export default store;
