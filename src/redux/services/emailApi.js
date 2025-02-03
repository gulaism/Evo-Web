import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SOME_KEY;

export const emailApi = createApi({
  reducerPath: 'emailApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: url,
    responseHandler: "text", // JSON-a çevirmək yerinə, string kimi saxla
  }),
  endpoints: (builder) => ({
    sendConsultationEmail: builder.mutation({
      query: (data) => ({
        url: 'email/consultation',
        method: 'POST',
        body: data,
        headers: {
          "Content-Type": "application/json", // Request JSON formatında göndərilsin
        },
      }),
    }),
  }),
});

export const { useSendConsultationEmailMutation } = emailApi;
