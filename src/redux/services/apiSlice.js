import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = import.meta.env.VITE_SOME_KEY;  // Base API URL

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),  
  tagTypes: ['Performance'], // Define tag types for caching (optional)
  endpoints: (builder) => ({
    // Home API
    getHome: builder.query({
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
      query: (data) => ({
        url: 'email/consultation',
        method: 'POST',
        body: data,
        headers: { "Content-Type": "application/json" },
        responseHandler: (response) => response.text(), // Explicitly parse response as text
      }),
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
    // Top Performance API
    getTopPerformance: builder.query({
      query: (id) => `performance/getById/${id}`,
      providesTags: ['Performance'], // Helps with caching & re-fetching
    }),
    // Appeal API
    sendAppeal: builder.mutation({
      query: (data) => ({
        url: 'email/appeal',
        method: 'POST',
        body: data,
        headers: { "Content-Type": "application/json"},
        responseHandler: (response) => response.text(),
      })
    }),
    getDropDown: builder.query({
      query: () => `category/getDropdown`,
    }),
    getCourseDetails: builder.query({
      query: (trimmedAreaName) => `course/${trimmedAreaName}`,
    }),
    getAllCourseNames: builder.query({
      query: () => `course/getCourseNames`,
    }),
    getAllPartners: builder.query({
      query: () => `partner`,
    }),
    getMeetData: builder.query({
      query: () => `meet`,
    })
  }),
});

export const { 
  useGetDifferenceQuery, 
  useGetAboutQuery, 
  useSendConsultationEmailMutation,
  useGetCategoriesQuery,
  useGetTabletsByCategoryQuery,
  useGetAllDataQuery,
  useGetTopPerformanceQuery,
  useSendAppealMutation,
  useGetHomeQuery,
  useGetDropDownQuery,
  useGetCourseDetailsQuery,
  useGetAllCourseNamesQuery,
  useGetAllPartnersQuery,
  useGetMeetDataQuery
} = apiSlice;
