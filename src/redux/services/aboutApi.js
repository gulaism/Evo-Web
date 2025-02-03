import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SOME_KEY;

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({ baseUrl: url}), 
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => 'about',
    }),
  }),
});

export const { useGetAboutQuery } = aboutApi;
