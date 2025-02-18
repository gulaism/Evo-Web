import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import{ adminApiSlice } from './services/adminApiSlice';
import authReducer from './services/authSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [adminApiSlice.reducerPath]: adminApiSlice.reducer,
    auth: authReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware) .concat(adminApiSlice.middleware),
});

export default store;
