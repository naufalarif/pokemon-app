import get from "lodash/get";
import { useQuery } from "react-query";
import { getPokemonByTypeAPI } from "services/api";


export default function useGetPokemonByTypes(type = '') {
  const { data, isLoading, isError } = useQuery(`type/${type}`, () => getPokemonByTypeAPI(type));

  return { pokemonByTypes: get(data, 'pokemon', []), isLoading, isError };
}