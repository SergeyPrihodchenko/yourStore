import {counterReducer, CounterState} from "@/Components/Counter/slice/counterSlice";
import {pokemonApi} from "@/Components/PokemonList/services/pokemon";


export interface StateTypes {
    counter: CounterState,
    [pokemonApi.reducerPath]: ReturnType<typeof pokemonApi.reducer>,
};
