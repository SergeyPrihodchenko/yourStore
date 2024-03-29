import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const queryOption = createApi({
    reducerPath: 'query/option',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/option/'}),
    tagTypes: ['Option'],
    endpoints: (build) => ({
        ValuesForOption: build.mutation({
            query: (arg: number) => ({
                url: 'valuesForOption',
                method: 'POST',
                data: {id: arg}
            })
        }),

        deleteOption: build.mutation({
            query: (arg: number) => ({
                url: 'deleteOption',
                method: 'DELETE',
                data: {id: arg}
            })
        }),

        updateOption: build.mutation({
            query: (arg: number) => ({
                url: 'updateOption',
                method: 'PUT',
                data: {id: arg}
            })
        })
    })
})

export const {
    useValuesForOptionMutation,
    useDeleteOptionMutation,
    useUpdateOptionMutation
} = queryOption