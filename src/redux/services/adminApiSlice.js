import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_SOME_KEY;

export const adminApiSlice = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
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
        url: `auth/forgot-password?email=${email}`,
        method: "POST",
      }),
    }),
    validateOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: `auth/validate-otp?email=${email}&otp=${otp}`,
        method: "POST",
        responseHandler: (response) => response.text(), // JSON kimi parse etməsin, sadəcə text kimi oxusun
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, newPassword, verifyPassword, resetToken }) => ({
        url: `auth/reset-password?email=${encodeURIComponent(email)}&newPassword=${encodeURIComponent(newPassword)}&verifyPassword=${encodeURIComponent(verifyPassword)}&resetToken=${encodeURIComponent(resetToken)}`,
        method: "POST",
        responseHandler: (response) => response.text(), // JSON yox, TEXT kimi parse edir
      }),
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
} = adminApiSlice;
