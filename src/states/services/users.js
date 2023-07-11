import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerpath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/users/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (limit) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
