import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: "/api/signup",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getBooks: builder.query({
      query: () => "/api/books",
    }),
    getLatestBook: builder.query({
      query: () => "/api/latest-books",
    }),
    singleBook: builder.query({
      query: (id) => `/api/books/${id}`,
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetBooksQuery,useGetLatestBookQuery,useSingleBookQuery } = api;
