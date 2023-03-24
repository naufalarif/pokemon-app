import get from "lodash/get";
import { useQuery } from "react-query";
import { getSpeciesAPI } from "services/api";

export default function useGetSpeciesPokemon(queryFn = '', species) {
  const { data, isLoading, isError, isSuccess } = useQuery(queryFn, () => getSpeciesAPI(species));

  return { species: data, evolutionUrl: get(data, 'evolution_chain.url', ''), isLoading, isError, isSuccess };
}