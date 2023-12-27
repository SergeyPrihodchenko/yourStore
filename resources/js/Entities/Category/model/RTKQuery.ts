import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const queryCategory = createApi({
    reducerPath: 'query/category',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/catalogs'}),
    tagTypes: ['Catalogs'],
    endpoints: (build) => ({

        getCategory: build.query({
            query: () => ({
                url: '/data',
                method: 'GET'
            }),
            providesTags: result => ['Catalogs']
        }),

        setCategory: build.query({
            query: () => ({
                url: 'setCategory',
                method: 'POST'
            })
        })
    })
});