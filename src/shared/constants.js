const REGEX_LABEL_FORM = /quer encontrar seu pokémon favorito\? digita o número dele aqui abaixo\./i;
const REGEX_ALERT_POKEMON_NOT_FOUND = /nenhum pokémon corresponde à sua pesquisa!/i;
const REGEX_TITLE_FOUND_THE_POKEMONS = /você encontrou o pokémon:/i;
const REGEX_MSG_NUMBER_BETWEEN = /você precisa digitar um número entre 1 e 898\./i;

const DATA_POKEMON = {
    name: 'bulbasaur',
    sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    },
}

export default {
    REGEX_LABEL_FORM,
    REGEX_ALERT_POKEMON_NOT_FOUND,
    REGEX_TITLE_FOUND_THE_POKEMONS,
    REGEX_MSG_NUMBER_BETWEEN,
    DATA_POKEMON
};
