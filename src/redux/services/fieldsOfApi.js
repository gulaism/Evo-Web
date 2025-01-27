import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SOME_KEY;




export const fieldsOfApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: url, // API-nin əsas URL-i
  }),
  endpoints: (builder) => ({
    // Kateqoriyaları əldə etmək üçün GET request
    getCategories: builder.query({
      query: () => 'category',

    }),
    // Kateqoriya əsasında kursları əldə etmək üçün GET request
    getTabletsByCategory: builder.query({
      query: (category) => `category/getTablets?category=${category}`,
    }),
    
  }),
});

export const { useGetCategoriesQuery, useGetTabletsByCategoryQuery } = fieldsOfApi;
