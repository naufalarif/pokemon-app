import { useQuery } from "react-query";
import { getDetailAbilityAPI } from "services/api";

export default function useGetAbilityPokemon(queryFn = '', ability = '') {
  const { data, isLoading, isError, isSuccess } = useQuery(queryFn, () => getDetailAbilityAPI(ability));

  return { ability: data, isLoading, isError, isSuccess };
};