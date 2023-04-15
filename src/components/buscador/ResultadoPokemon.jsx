import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ResultadoPokemon =()=>{
    const buscador = useSelector((state)=>state.buscador);
 
    
    return(
        <div>
            <h3 className="text-white">Resultado: </h3>
           {buscador.loading && <div className="text-warning">Buscando...</div>}
           
            {buscador.pokemon && <div className="text-succes">
                <img src={buscador.pokemon.sprites.back_default} alt={buscador.pokemon.name} />
                    <span>{buscador.pokemon.name}</span>
            </div>}

            {buscador.error !== "" && <span className="text-danger">No se encontró el pokemon</span>}
        </div>
    )
}

export default ResultadoPokemon;