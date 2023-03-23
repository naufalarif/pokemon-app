import get from "lodash/get";
import { useQuery } from "react-query";
import { getTypePokemonAPI } from "services/api";

export const useGetPokemonTypes = () => {
  const { data, isError, isSuccess, isLoading } = useQuery('types', () => getTypePokemonAPI(20));

  return {
    types: get(data, 'results', []),
    isError,
    isSuccess,
    isLoading,
  };
};