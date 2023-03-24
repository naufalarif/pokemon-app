import { DetailEffect, Loading } from "components";
import useGetPokemonByTypes from "hooks/useGetPokemonByTypes";

const Effects = ({ types }) => {
  const { type, isLoading, isError } = useGetPokemonByTypes(`detail/types${types}`, types);

  if (isLoading) return <Loading />;
  if (isError) return <span>Something wrong</span>;

  return <DetailEffect data={type} />;
};

export default Effects;