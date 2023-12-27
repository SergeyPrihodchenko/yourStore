import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const queryProduct = createApi({
    reducerPath: 'query/product',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/product'}),
    tagTypes: ['Products'],
    endpoints: (build) => ({

        getProducts: build.query({
            query: () => ({
                url: '/',
                method: 'GET'
            }),
            providesTags: result => ['Products']
        }),

        
    })
})