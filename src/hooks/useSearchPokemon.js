import { useQuery } from "react-query";
import get from "lodash/get";

import { getDetailPokemonAPI } from "services/api";

export default function useSearchPokemon(queryFn = '', slug = '') {
  const { data, isLoading, isError, isSuccess } =
    useQuery(queryFn, () => getDetailPokemonAPI(slug));
  
  const isNotFound = get(data, 'name', '') === 'Error';

  return {
    pokemon: data,
    isLoading,
    isError,
    isSuccess,
    isNotFound,
  };
}
