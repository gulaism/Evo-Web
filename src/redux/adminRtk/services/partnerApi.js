// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const url = import.meta.env.VITE_SOME_KEY;

// export const partnerApi = createApi({
//     reducerPath: "partnerApi", // Reducer üçün unikal ad
//     baseQuery: fetchBaseQuery({ baseUrl: url + "/api/v1" }), // Back-end baza URL
//     endpoints: (builder) => ({
//         // POST /partner/save
//         savePartner: builder.mutation({
//             query: (body) => ({
//                 url: "/partner/save",
//                 method: "POST",
//                 body,
//             }),
//         }),
//         // DELETE /partner/delete/{partnersId}
//         deletePartner: builder.mutation({
//             query: (partnersId) => ({
//                 url: `/partner/delete/${partnersId}`,
//                 method: "DELETE",
//             }),
//         }),
//         // PUT /partner/update/{partnersId}
//         updatePartner: builder.mutation({
//             query: ({ partnersId, ...body }) => ({
//                 url: `/partner/update/${partnersId}`,
//                 method: "PUT",
//                 body,
//             }),
//         }),
//     }),
// });

// export const {
//     useSavePartnerMutation,
//     useDeletePartnerMutation,
//     useUpdatePartnerMutation,
// } = partnerApi;
