import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SOME_KEY;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: url}), // Buraya öz backend baz URL-ni yaz
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => 'about',
    }),
  }),
});

export const { useGetAboutQuery } = apiSlice;
