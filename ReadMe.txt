
files
pokemon.js
solution.js

create a class  Pokemon api with following methods

1 - getPokemon({numberOfPokemon})
**********************************************************************
it calls the api  "https://pokeapi.co/api/v2/pokemon?limit=[numberOfPokemon]&offset=0";
and prints all the pokemon in an array.
ex - 
    input - getPokemon(2);
    output - ["bulbasaur","ivysaur"] 

    input - getPokemon(3);
    output - ["bulbasaur","ivysaur","venusaur"] 


2 - getPokemonDetail({nameOfPokemon},{property})
**********************************************************************
api "https://pokeapi.co/api/v2/pokemon/[nameOfPokemon]"
give the ouput of that property for given pokemon

ex - input - getPokemonDetail("charizard","weight")
     output - 905


     input - getPokemonDetail("charizard","types")
     output - [
                {
                "slot": 1,
                "type": {
                "name": "fire",
                "url": "https://pokeapi.co/api/v2/type/10/"
                }
                },
                {
                "slot": 2,
                "type": {
                "name": "flying",
                "url": "https://pokeapi.co/api/v2/type/3/"
                }
                }
                ]





