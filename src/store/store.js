import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./generationSlice"
import individualPokemonReducer from "./individualPokemonSlice";
import { pokemonApi } from "./api/pokemonApi";
export const store = configureStore({
    reducer: {
        generation: userReducer,
        individual_pokemon: individualPokemonReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})