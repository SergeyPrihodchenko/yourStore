import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const queryCatalog = createApi({
    reducerPath: 'query/catalog',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/catalog'}),
    tagTypes: ['Catalog'],
    endpoints: (build) => ({
        getCatalogs: build.query({
            query: () => ({
                url: '',
                method: 'GET',
            }),
            providesTags: result => ['Catalog']
        }),
        getCatalogsById: build.query({
            query: (arg: number) => ({
                url: '/catalogsByCategory/'+arg,
                method: 'GET',
            }),
            providesTags: result => ['Catalog']
        })
    })
});

export const {
    useGetCatalogsQuery,
    useGetCatalogsByIdQuery
} = queryCatalog;