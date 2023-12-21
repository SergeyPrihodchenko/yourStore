import {useGetPokemonByNameQuery} from "@/Components/PokemonList/services/pokemon";


const Pokemon = () =>{
    const { data, error, isLoading } = useGetPokemonByNameQuery('ditto')
    return (
        <div className="p-6">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>Name: {data.name}</h3>
                    <p>Weight: {data.weight}</p>
                    <img src={data.sprites.front_default} alt={data.species.name} />
                </>
            ) : null}
        </div>
    )
}

export default Pokemon;
