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
        })
    })
})

export const {
    useValuesForOptionMutation
} = queryOption