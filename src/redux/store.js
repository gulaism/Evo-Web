import { configureStore } from '@reduxjs/toolkit';
import { aboutApi } from './services/aboutApi';
import { differenceApi } from './services/differenceApi';
import { topPerformanceApi } from './services/topPerformanceApi';
import { fieldsOfApi} from './services/fieldsOfApi';
import { emailApi } from './services/emailApi';
import { graduateApi } from './services/graduateApi';

const store = configureStore({
  reducer: {
    [aboutApi.reducerPath]: aboutApi.reducer,
    [differenceApi.reducerPath]: differenceApi.reducer,
    [topPerformanceApi.reducerPath]: topPerformanceApi.reducer,
    [fieldsOfApi.reducerPath]: fieldsOfApi.reducer,
    [emailApi.reducerPath]: emailApi.reducer,
    [graduateApi.reducerPath]: graduateApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aboutApi.middleware).concat(differenceApi.middleware).concat(topPerformanceApi.middleware) .concat(fieldsOfApi.middleware) .concat(emailApi.middleware).concat(graduateApi.middleware),
});

export default store;
