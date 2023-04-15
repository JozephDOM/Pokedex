import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ResultadoPokemon =()=>{
    const buscador = useSelector((state)=>state.buscador);

    useEffect(()=>{
        console.log(buscador.pokemon);
    },[])
 
    
    return(
        <div>
            <h3 className="text-white">Resultado: </h3>
           {buscador.loading && <div className="text-warning">Buscando...</div>}
           
            {buscador.pokemon.sprites != null && <div className="text-succes">
                <img src={buscador.pokemon.sprites.front_default} alt={buscador.pokemon.name} />
                    <span>{buscador.pokemon.name}</span>
            </div>}

            {buscador.error !== "" && <span className="text-danger">No se encontró el pokemon</span>}
        </div>
    )
}

export default ResultadoPokemon;