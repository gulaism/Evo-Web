import { configureStore } from '@reduxjs/toolkit';
import { aboutApi } from './services/aboutApi';
import { differenceApi } from './services/differenceApi';
import { topPerformanceApi } from './services/topPerformanceApi';
import { fieldsOfApi } from './services/fieldsOfApi';

const store = configureStore({
  reducer: {
    [aboutApi.reducerPath]: aboutApi.reducer,
    [differenceApi.reducerPath]: differenceApi.reducer,
    [topPerformanceApi.reducerPath]: topPerformanceApi.reducer,
    [fieldsOfApi.reducerPath]: fieldsOfApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aboutApi.middleware).concat(differenceApi.middleware).concat(topPerformanceApi.middleware) .concat(fieldsOfApi.middleware),
});

export default store;
