import { useQuery } from "react-query";
import { getPokemonByTypeAPI } from "services/api";
import { DetailTypes, Loading } from "components";

const Types = ({ types }) => {
  const { data, isLoading, isError } =
    useQuery(`detail/types/${types}`, () => getPokemonByTypeAPI(types));

  if (isLoading) return <Loading />;
  if (isError) return <span>Something wrong</span>;

  return <DetailTypes data={data} />;
};

export default Types;