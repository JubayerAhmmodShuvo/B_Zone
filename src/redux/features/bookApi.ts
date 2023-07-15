// import { api } from "../api/apiSlice";


// const bookApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => "/products",
//     }),
//     getBooks: builder.query({
//       query: () => "/api/books",
//     }),
//     singleProduct: builder.query({
//       query: (id) => `/product/${id}`,
//     }),
//     postComment: builder.mutation({
//       query: ({ id, data }) => ({
//         url: `/comment/${id}`,
//         method: "POST",
//         body: data,
//       }),
     
//     }),
//     getComment: builder.query({
//       query: (id) => `/comment/${id}`,
    
//     }),
//   }),
// });

// export const {
// useGetBooksQuery,
// } = bookApi;
