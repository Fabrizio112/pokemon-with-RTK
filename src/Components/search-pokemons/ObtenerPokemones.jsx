
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
import { useLazyGetPokemonsQuery } from "../../store/api/pokemonApi";
import { useRef } from "react";

function ObtenerPokemones() {
    const navigate = useNavigate()
    const inputPokemon = useRef()

    const [getPokemons, { data: pokemonData, isError: pokemonError, isFetching: pokemonFetching }] = useLazyGetPokemonsQuery()

    const handleClick = (e) => {
        getPokemons(inputPokemon.current.value)
    }
    const handleBack = () => {
        navigate("/")
    }

    return (<>
        <button className="btn btn-dark" onClick={handleBack}> ← </button>
        <section className="w-100 h-100 d-flex flex-column justify-content-center align-items-center mt-5 ">
            <h1 className="p-3">Enter What Pokemon Do you want to know about?:</h1>
            <input ref={inputPokemon} name="pokemon" type="text" className="form-control form-control-lg w-50 text-center fs-3" />
            <button onClick={handleClick} className="btn btn-primary btn-lg my-5 px-5">Search Pokemon</button>
        </section>
        <section className="w-100 d-flex justify-content-center align-center-center my-5">
            {pokemonFetching && <h2>Loading ...</h2>}
            {pokemonError && <h2>Pokemon does not exists </h2>}
            {pokemonData && <PokemonCard data={pokemonData} />}
        </section>

    </>);
}

export default ObtenerPokemones;