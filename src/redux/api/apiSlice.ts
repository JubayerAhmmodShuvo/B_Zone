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
    postBook: builder.mutation({
      query: (bookData) => ({
        url: "/api/books",
        method: "POST",
        body: bookData,
      }),
    }),
    addToWishlist: builder.mutation({
      query: (bookId) => ({
        url: `/api/wishlist/${bookId}`,
        method: "POST",
        body: { bookId },
      }),
    }),

    addToReadingList: builder.mutation({
      query: (bookId) => ({
        url: `/api/readinglist/${bookId}`,
        method: "POST",
        body: { bookId },
      }),
    }),
    postReview: builder.mutation({
      query: (data) => ({
        url: `/api/books/${data.id}/reviews`,
        method: "POST",
        body: { comment: data.comment },
      }),
    }),
    getBookReviews: builder.query({
      query: (bookId) => `/api/books/${bookId}/reviews`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: "DELETE",
      }),
    }),

    
    updateBook: builder.mutation({
      query: ({ id, ...bookData }) => ({
        url: `/api/books/${id}`,
        method: "PUT",
        body: bookData,
      }),
    }),
  }),
});


export const { useSignupMutation, useLoginMutation,
  useGetBooksQuery, useGetLatestBookQuery, usePostBookMutation,
  useSingleBookQuery, useAddToReadingListMutation,
  useAddToWishlistMutation, usePostReviewMutation, useGetBookReviewsQuery,
  useDeleteBookMutation,useUpdateBookMutation,
 
} = api;
