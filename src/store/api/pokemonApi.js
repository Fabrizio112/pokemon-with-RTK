import { CONSTANST } from "../../constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const pokemonApi = createApi({
    reducerPath: 'pokemon',
    baseQuery: fetchBaseQuery({
        baseUrl: `${CONSTANST.URL_BASE}`
    }),
    endpoints: (builder) => ({
        getGenerationButtons: builder.query({
            query: () => `${CONSTANST.GENERATION}`
        }),
        getPokemons: builder.query({
            query: (pokemon) => `${CONSTANST.POKEMON}/${pokemon}`
        }),
        getGeneration: builder.query({
            query: (generation) => `${CONSTANST.GENERATION}/${generation}`
        }),
        getItems: builder.query({
            query: () => `${CONSTANST.ITEMS}`
        }),
        getLocations: builder.query({
            query: () => `${CONSTANST.LOCATIONS}`
        })

    })
})
export const { useGetGenerationButtonsQuery, useGetItemsQuery, useGetLocationsQuery, useGetGenerationQuery, useLazyGetPokemonsQuery, useGetPokemonsQuery } = pokemonApi;