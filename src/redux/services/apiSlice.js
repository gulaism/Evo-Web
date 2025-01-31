import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SOME_KEY;

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: url}), 
  endpoints: (builder) => ({
    getDifference: builder.query({
      query: (id) => `ourDifference/getOurDifferenceById/${id}`,
    }),
    getAbout: builder.query({
        query: () => 'about',
    }),
  }),
});

export const { useGetDifferenceQuery, useGetAboutQuery } = apiSlice;
