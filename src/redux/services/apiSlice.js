import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = import.meta.env.VITE_SOME_KEY;  // Base API URL

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: url }),  
  tagTypes: ['Performance'], // Define tag types for caching (optional)
  endpoints: (builder) => ({

    // Home API
    getHomeData: builder.query({
      query: () => 'home',
    }),
   
    
    // Our Difference API
    getDifference: builder.query({
      query: (id) => `ourDifference/getOurDifferenceById/${id}`,
    }),

    // About API
    getAbout: builder.query({
      query: () => 'about',
    }),

    // Consultation Email API
    sendConsultationEmail: builder.mutation({
      async queryFn(data, _queryApi, _extraOptions, baseQuery) {
        const response = await baseQuery({
          url: 'email/consultation',
          method: 'POST',
          body: data,
          headers: { "Content-Type": "application/json" },
        });

        if (response.error) return { error: response.error };

        return { data: await response.data.text() }; // Convert only this response to text
      },
    }),

    // Fields of API (Categories & Tablets)
    getCategories: builder.query({
      query: () => 'category',
    }),

    getTabletsByCategory: builder.query({
      query: (category) => ({
        url: `category/getTablets?trimmedCategory=${category}`,
        method: "GET",
      }),
    }),

    // Graduate API
    getAllData: builder.query({
      query: () => 'graduate',
    }),

   
  }),
});

export const { 
  useGetDifferenceQuery, 
  useGetAboutQuery, 
  useSendConsultationEmailMutation,
  useGetCategoriesQuery,
  useGetTabletsByCategoryQuery,
  useGetAllDataQuery,
  useGetHomeDataQuery
} = apiSlice;
