// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const url = import.meta.env.VITE_SOME_KEY;  // URL burada təyin edilir

// export const fieldsOfApi = createApi({
//   reducerPath: 'fieldsOfApi',
//   baseQuery: fetchBaseQuery({ baseUrl: url }),  // baseUrl təyin edilir
//   endpoints: (builder) => ({
//     // Get Categories
//     getCategories: builder.query({
//       query: () => 'category', // Kateqoriyaları almaq üçün GET sorğusu
//     }),

//     // Get Tablets by Category
//     getTabletsByCategory: builder.query({
//       query: (category) => ({
//         url: `category/getTablets?trimmedCategory=${category}`, // category parametri query olaraq göndərilir
//         method: "GET", // GET sorğusu
//       }),
//     }),

//     // Digər endpointləri buraya əlavə edə bilərsiniz
//   }),
// });







// export const { useGetCategoriesQuery, useGetTabletsByCategoryQuery} = fieldsOfApi;

