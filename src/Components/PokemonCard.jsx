import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePokemon } from "../store/individualPokemonSlice";
import { useGetPokemonsQuery } from "../store/api/pokemonApi"

function PokemonCard({ name }) {
    const { data: pokemonData, isFetching: pokemonFetching } = useGetPokemonsQuery(name)
    const dispatch = useDispatch()

    const handleSelected = () => {
        dispatch(changePokemon(name))
    }

    return (
        pokemonData ?
            <div className="d-flex flex-column justify-content-center align-items-center card mx-2" >
                <span>{pokemonData.id}</span>
                <img src={pokemonData.sprites.front_default && pokemonData.sprites.front_default} alt={pokemonData.name} />
                <h1 className="fs-2 text-capitalize">{pokemonData.name}</h1>
                <Link className="btn btn-outline-secondary my-3" to={`/${pokemonData?.id}`} onClick={handleSelected}>View More</Link>
            </div > :
            pokemonFetching && <h1>Cargando...</h1>
    );
}

export default PokemonCard;