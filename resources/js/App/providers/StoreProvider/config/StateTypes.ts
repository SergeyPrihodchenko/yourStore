import {counterReducer, CounterState} from "@/Components/Counter/slice/counterSlice";
import {pokemonApi} from "@/Components/PokemonList/services/pokemon";
import {queryCatalog} from "@/Entities/Catalog/model/RTKQuery";
import {queryCategory} from "@/Entities/Category/model/RTKQuery";


export interface StateTypes {
    counter: CounterState,
    [pokemonApi.reducerPath]: ReturnType<typeof pokemonApi.reducer>,
    [queryCatalog.reducerPath]: ReturnType<typeof queryCatalog.reducer>,
    [queryCategory.reducerPath]: ReturnType<typeof queryCategory.reducer>,
};
