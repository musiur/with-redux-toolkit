import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerpath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rtk-query-with-nextjs.vercel.app/users/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (limit) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
