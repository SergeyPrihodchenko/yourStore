import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const queryValueForOption = createApi({
    reducerPath: 'query/value',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/option/'}),
    tagTypes: ['Option'],
    endpoints: (build) => ({
        valueDelete: build.mutation({
            query: (arg: number) => ({
                url: 'deleteValueOption',
                method: 'DELETE',
                data: {id: arg}
            })
        }),
        valueUpdate: build.mutation({
            query: (arg: number) => ({
                url: 'updateValueOption',
                method: 'PUT',
                data: {id: arg}
            })
        })
    })
})

export const {
    useValueDeleteMutation,
    useValueUpdateMutation
} = queryValueForOption