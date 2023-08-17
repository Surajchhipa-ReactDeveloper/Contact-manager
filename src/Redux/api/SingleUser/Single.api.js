import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT_CREATE, BASE_URL } from "../../apiTypes";
import { header } from "../../header";
export const GET_USER = createApi({
  reducerPath: "GET_USER",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      return header(headers);
    },
    timeout: 20000,
  }),
  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    GetSingleUser: builder.query({
      query: (payload) => ({
        url: API_ENDPOINT_CREATE,
        method: "GET",
        body: payload,
      }),
      providesTags: ["contacts"],
    }),
  }),
});
export const { useGetSingleUserQuery } = GET_USER;
