import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT_REGISTER, BASE_URL } from "../../apiTypes";
import { header } from "../../header";

export const REGISTER_API = createApi({
  reducerPath: "REGISTER_API",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      return header(headers);
    },
    timeout: 6000,
  }),
  tagTypes: ["register"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => ({
        url: API_ENDPOINT_REGISTER,
        method: "POST",
        body: payload,
      }),
      providesTags: ["register"],
    }),
  }),
});

export const { useRegisterMutation } = REGISTER_API;
