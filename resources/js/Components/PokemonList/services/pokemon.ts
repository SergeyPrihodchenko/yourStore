
import {createApi} from "@reduxjs/toolkit/query/react";
import {axiosBaseQuery} from "@/App/providers/StoreProvider/config/axiosConfigQuery";

type PokemonSprites = {
    back_default: string,
    front_default: string
}

type Pokemon = {
    id: number,
    name: string,
    order: number,
    weight: number,
    is_default: boolean,
    sprites: PokemonSprites,
    species: {name: string}
}
// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) =>({url: `pokemon/${name}`, method: 'GET'}),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
