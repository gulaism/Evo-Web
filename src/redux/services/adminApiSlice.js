import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_SOME_KEY || "http://localhost:8080/api/v1"; // Default URL əlavə edildi

export const adminApiSlice = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else {
        console.warn("⚠️ Token yoxdur, API çağırışları işləməyəcək!");
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    checkAdminEmail: builder.query({
      query: () => "admin/checkAdminEmail",
    }),
    completeAdmin: builder.mutation({
      query: (adminData) => ({
        url: "admin/complete",
        method: "POST",
        body: adminData,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: `auth/forgot-password?email=${encodeURIComponent(email)}`,
        method: "POST",
      }),
    }),
    validateOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: `auth/validate-otp?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`,
        method: "POST",
        responseHandler: (response) => response.text(), // JSON kimi parse etməsin, text qaytarsın
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, newPassword, verifyPassword, resetToken }) => ({
        url: `auth/reset-password?email=${encodeURIComponent(email)}&newPassword=${encodeURIComponent(newPassword)}&verifyPassword=${encodeURIComponent(verifyPassword)}&resetToken=${encodeURIComponent(resetToken)}`,
        method: "POST",
        responseHandler: (response) => response.text(),
      }),
    }),
    
    // delete partner
    deletePartner: builder.mutation({
      query: (id) => ({
        url: `partner/${id}`,
        method: 'DELETE',
      }),
    }),
    
    createOrUpdateAbout: builder.mutation({
      query: (data) => ({
        url: "about/create",
        method: "POST",
        body: data,
      }),
    }),
    getAbout: builder.query({
      query: () => "about",
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useCheckAdminEmailQuery,
  useCompleteAdminMutation,
  useForgotPasswordMutation,
  useValidateOtpMutation,
  useResetPasswordMutation,
  useDeletePartnerMutation,
  useCreateOrUpdateAboutMutation,
  useGetAboutQuery,
} = adminApiSlice;
