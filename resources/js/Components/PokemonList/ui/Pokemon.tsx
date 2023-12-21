import {useGetPokemonByNameQuery} from "@/Components/PokemonList/services/pokemon";
import Typography from "@mui/material/Typography";


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
                    <Typography variant={'h4'} sx={{color: 'tomato'}}>Name: {data.name}</Typography>
                    <p>Weight: {data.weight}</p>
                    <img src={data.sprites.front_default} alt={data.species.name} />
                </>
            ) : null}
        </div>
    )
}

export default Pokemon;
