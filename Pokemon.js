import fetch from "node-fetch";

export const getPokemon = (numberOfPokemon)=>{
fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}&offset=0`)
.then(res=>res.json()).
then(listOfPokemon => console.log(listOfPokemon))
}


export const getPokemonDetail= (pokemonName,pokemonDetails)=>{
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then(res=>res.json()).
then(listOfPokemon => console.log(pokemonName,listOfPokemon[pokemonDetails]))
}