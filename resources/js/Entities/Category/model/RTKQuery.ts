import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Category } from "./types.model";

export const queryCategory = createApi({
    reducerPath: 'query/category',
    baseQuery: axiosBaseQuery({baseUrl: '/api/admin/category'}),
    tagTypes: ['Category'],
    endpoints: (build) => ({

        getCategory: build.query<Category, string>({
            query: () => ({
                url: '/getAll',
                method: 'GET',
            }),
            providesTags: result => ['Category']
        }),

        setCategory: build.query({
            query: () => ({
                url: 'setCategory',
                method: 'POST',
            })
        })
    })
});

export const {useGetCategoryQuery, useSetCategoryQuery} = queryCategory