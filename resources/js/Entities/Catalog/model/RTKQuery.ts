import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const queryCatalog = createApi({
    reducerPath: 'query/catalog',
    baseQuery: axiosBaseQuery({baseUrl: 'admin/catalog'}),
    tagTypes: ['Catalog'],
    endpoints: (build) => ({
        getCatalogs: build.query({
            query: (arg: string) => ({
                url: '',
                method: 'GET',
                data: arg
            }),
            providesTags: result => ['Catalog']
        }),
    })
});