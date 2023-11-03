
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import PokemonCard from "../PokemonCard";
import { useGetGenerationQuery } from "../../store/api/pokemonApi";


function Generation() {
    const generation = useSelector(state => state.generation)
    const { data: generationData, isError: generationError } = useGetGenerationQuery(generation)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    return (
        generationData ? <>
            <button className="btn btn-dark" onClick={handleBack}> ← </button>

            <section>
                <h1 className="text-capitalize w-100 text-center py-5 display-4 ">{generationData.name} : {generationData.main_region.name}</h1>
                <section className="pokemons-grid">
                    {generationData?.pokemon_species.map((pokemon, index) => <PokemonCard key={index} name={pokemon.name} />)}
                </section>
            </section>
        </> : generationError ? <h1>Error</h1> : <>
            <h1>Cargando ...</h1>
        </>
    );
}
export default Generation;