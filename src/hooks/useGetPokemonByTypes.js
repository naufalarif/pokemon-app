import get from "lodash/get";
import { useQuery } from "react-query";
import { getPokemonByTypeAPI } from "services/api";


export default function useGetPokemonByTypes(queryFn = '', type = '') {
  const { data, isLoading, isError } = useQuery(queryFn, () => getPokemonByTypeAPI(type));

  return { pokemonByTypes: get(data, 'pokemon', []), type: data, isLoading, isError };
}