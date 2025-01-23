import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SOME_KEY;

export const differenceApi = createApi({
  reducerPath: 'differenceApi',
  baseQuery: fetchBaseQuery({ baseUrl: url}), 
  endpoints: (builder) => ({
    getDifference: builder.query({
      query: (id) => `ourDifference/getOurDifferenceById/${id}`,
    }),
  }),
});

export const { useGetDifferenceQuery } = differenceApi;
