import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://menugrizzlyreactn-default-rtdb.firebaseio.com/",
    }),
    endpoints: (builder) => ({
        getProductsByCategory:builder.query({
            query: (category) => `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (res) =>{
                const data = Object.values(res)
                return data
            }
        }),
        getCategories: builder.query({
            query: () => "/categories.json"
        }),
        getProduct:builder.query({
            query: (id) => `/products/${id}.json`
        })
    }),
});

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery, useGetProductQuery } = shopApi; 
