import {counterReducer, CounterState} from "@/Components/Counter/slice/counterSlice";
import {pokemonApi} from "@/Components/PokemonList/services/pokemon";
import {queryCatalog} from "@/Entities/Catalog/model/RTKQuery";
import {queryCategory} from "@/Entities/Category/model/RTKQuery";
import { queryOption } from "@/Entities/Option/model/RTKQuery";
import { queryProduct } from "@/Entities/Product/model/RTKQuery";
import { queryValueForOption } from "@/Entities/ValuesForOption/model/RTKQuery";


export interface StateTypes {
    counter: CounterState,
    [pokemonApi.reducerPath]: ReturnType<typeof pokemonApi.reducer>,
    [queryCatalog.reducerPath]: ReturnType<typeof queryCatalog.reducer>,
    [queryCategory.reducerPath]: ReturnType<typeof queryCategory.reducer>,
    [queryProduct.reducerPath]: ReturnType<typeof queryProduct.reducer>,
    [queryOption.reducerPath]: ReturnType<typeof queryOption.reducer>,
    [queryValueForOption.reducerPath]: ReturnType<typeof queryValueForOption.reducer>
};
