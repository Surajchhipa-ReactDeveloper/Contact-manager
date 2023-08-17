// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { API_ENDPOINT_CREATE, BASE_URL } from "../../apiTypes";
// import { header } from "../../header";

// export const CREATE_API = createApi({
//   reducerPath: "CREATE_API",
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,
//     prepareHeaders: (headers) => {
//       return header(headers);
//     },
//     timeout: 20000,
//   }),
//   tagTypes: ["contacts"],
//   endpoints: (builder) => ({
//     Create: builder.mutation({
//       query: (payload) => ({
//         url: API_ENDPOINT_CREATE,
//         method: "POST",
//         body: payload,
//       }),
//       providesTags: ["contacts"],
//     }),
//   }),
// });
// export const { useCreateMutation } = CREATE_API;
