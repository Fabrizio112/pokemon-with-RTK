import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetPokemonsQuery, useLazyGetPokemonsQuery } from "../store/api/pokemonApi";

function IndividualPokemon() {
    const navigate = useNavigate()
    const pokemon = useSelector(state => state.individual_pokemon)
    const { data: pokemonData } = useGetPokemonsQuery(pokemon)
    return (<>
        <button className="btn btn-dark" onClick={() => navigate(-1)}>←</button>
        <div className="card w-50 m-auto">
            <div className="card-body">
                <p className="text-center fs-4">{pokemonData?.id}</p>
                <h5 className="card-title text-capitalize display-3 text-center">{pokemonData?.name}</h5>
                <div>
                    <p className="fs-3"><span className="text-decoration-underline ">Weight:</span> {(pokemonData?.weight) / 10}kg</p>
                    <p className="fs-3"><span className="text-decoration-underline ">Height:</span> {(pokemonData?.height) / 10}m</p>

                </div>
            </div>
            <div style={{ width: "100%", height: "300px" }}>
                <img src={pokemonData?.sprites.other["official-artwork"].front_default} className="card-img-bottom w-100 h-100 object-fit-contain" alt={pokemonData.data?.name} />
            </div>
            <div className="w-100 d-flex justify-content-center gap-4 align-items-end " style={{ height: "100px" }}>
                {pokemonData?.types.map(el => <button className="btn btn-outline-dark btn-lg px-5 text-capitalize">{el.type.name}</button>)}
            </div>
        </div>
    </>);
}

export default IndividualPokemon;