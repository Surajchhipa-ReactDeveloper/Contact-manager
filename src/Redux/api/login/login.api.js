import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT_LOGIN, BASE_URL } from "../../apiTypes";

export const LOGIN_API = createApi({
  reducerPath: "LOGIN_API",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers) => {
    //   return header(headers);
    // },
    // timeout: 5000,
  }),
  tagTypes: ["login"],
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (payload) => ({
        url: API_ENDPOINT_LOGIN,
        method: "POST",
        body: payload,
      }),
      providesTags: ["login"],
    }),
  }),
});

export const { useSigninMutation } = LOGIN_API;
