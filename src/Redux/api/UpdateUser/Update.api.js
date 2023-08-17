import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT_UPDATE, BASE_URL } from "../../apiTypes";
import { header } from "../../header";

export const UPDATE_API = createApi({
  reducerPath: "UPDATE_API",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers) => {
      return header(headers);
    },
    timeout: 20000,
  }),
  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    Update: builder.mutation({
      query: (payload) => ({
        url: API_ENDPOINT_UPDATE,
        method: "PUT",
        body: payload,
      }),
      providesTags: ["contacts"],
    }),
  }),
});
export const { useUpdateMutation } = UPDATE_API;
