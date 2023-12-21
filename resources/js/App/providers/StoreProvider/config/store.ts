import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateTypes} from "@/App/providers/StoreProvider/config/StateTypes";
import {counterReducer} from "@/Components/Counter/slice/counterSlice";
import {pokemonApi} from "@/Components/PokemonList/services/pokemon";


export function createReduxStore(initialState?: StateTypes){
    const rootReducers:  ReducersMapObject<StateTypes> = {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    };
    const store = configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pokemonApi.middleware)

    });

    return store;
}

export type RootState = ReturnType<typeof createReduxStore>['getState'];

// экспортируем тип dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
