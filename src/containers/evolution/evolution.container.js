import { useQuery } from "react-query";
import isEmpty from "lodash/isEmpty";
import { getEvolutionAPI } from "services/api";
import { Loading } from "components";
import { ListEvolution } from "containers";

const Evolution = ({ url, name }) => {
  const { data, isLoading, isError } =
    useQuery(`list/evolution/${name}`, () => getEvolutionAPI(url));

  if (isLoading) return <Loading />;
  if (isError) return <span>This Pokemon doesn&apos;t have evolution</span>;

  return <ListEvolution data={data} />;
};

export default Evolution;
