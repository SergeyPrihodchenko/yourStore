import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateTypes} from "@/App/providers/StoreProvider/config/StateTypes";
import {counterReducer} from "@/Components/Counter/slice/counterSlice";
import {pokemonApi} from "@/Components/PokemonList/services/pokemon";
import { queryCatalog } from "@/Entities/Catalog/model/RTKQuery";
import { queryCategory } from "@/Entities/Category/model/RTKQuery";
import { queryProduct } from "@/Entities/Product/model/RTKQuery";
import { queryOption } from "@/Entities/Option/model/RTKQuery";
import { queryValueForOption } from "@/Entities/ValuesForOption/model/RTKQuery";


export function createReduxStore(initialState?: StateTypes){
    const rootReducers:  ReducersMapObject<StateTypes> = {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [queryCatalog.reducerPath]: queryCatalog.reducer,
        [queryCategory.reducerPath]: queryCategory.reducer,
        [queryProduct.reducerPath]: queryProduct.reducer,
        [queryOption.reducerPath]: queryOption.reducer,
        [queryValueForOption.reducerPath]: queryValueForOption.reducer
    };
    const store = configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                pokemonApi.middleware,
                queryCatalog.middleware,
                queryCategory.middleware, 
                queryProduct.middleware,
                queryOption.middleware,
                queryValueForOption.middleware
            ])
    });

    return store;
}

export type RootState = ReturnType<typeof createReduxStore>['getState'];

// экспортируем тип dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
