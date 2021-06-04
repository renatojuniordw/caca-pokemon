import API from './api.ts';

const getPokemonById = (idPokemon) => API.get(`/pokemon/${idPokemon}`);

export default getPokemonById;
