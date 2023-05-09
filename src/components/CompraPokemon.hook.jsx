import React from "react";
import { buy_pokemon_action, return_pokemon_action } from "../redux/acions/gameShopAction";
import { useDispatch } from "react-redux";

const CompraPokemonHook =()=> {

   const dispatch = useDispatch();

    return(
        <div>
               <button className="btn btn-dark btn-sm mb-2" onClick={()=>
                {dispatch(buy_pokemon_action(1))}}>Mandar a moravia</button>
               <button className="btn btn-dark btn-sm " onClick={()=> 
                {dispatch(return_pokemon_action(1))}} >Regresar pokemon</button>
            </div>
    )
}

export default CompraPokemonHook;