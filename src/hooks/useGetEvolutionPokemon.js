import { useQuery } from "react-query";
import { getEvolutionAPI } from "services/api";

export default function useGetEvolutionPokemon(queryFn = '', url) {
  const { data, isLoading, isError, isSuccess } = useQuery(queryFn, () => getEvolutionAPI(url));

  return { evolutions: data, isLoading, isError, isSuccess };
};