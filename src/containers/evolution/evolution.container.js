import { useQuery } from "react-query";
import { Loading, ListEvolution } from "components";
import { getEvolutionAPI } from "services/api";

const Evolution = ({ url, name }) => {
  const { data, isLoading, isError } =
    useQuery(`list/evolution/${name}`, () => getEvolutionAPI(url));

  if (isLoading) return <Loading />;
  if (isError) return <span>This Pokemon doesn&apos;t have evolution</span>;

  return <ListEvolution data={data} />;
};

export default Evolution;
