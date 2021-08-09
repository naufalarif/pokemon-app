import { useQuery } from "react-query";
import { getPokemonByTypeAPI } from "services/api";
import { DetailEffect, Loading } from "components";

const Effects = ({ types }) => {
  const { data, isLoading, isError } =
    useQuery(`detail/types/${types}`, () => getPokemonByTypeAPI(types));

  if (isLoading) return <Loading />;
  if (isError) return <span>Something wrong</span>;

  return <DetailEffect data={data} />;
};

export default Effects;