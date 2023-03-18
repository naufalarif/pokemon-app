import { useQuery } from "react-query";
import { getDetailPokemonAPI } from "services/api";
import { CardEvolution, Loading } from "components";

const CardEvolutionContainer = ({ name, ...rest }) => {
  const { data, isLoading, isError } =
    useQuery(`evolution/${name}`, () => getDetailPokemonAPI(name));
  if (isLoading) return <Loading />;
  if (isError) return <span>This Pokemon doesn&apos;t have evolution</span>;

  return <CardEvolution payload={data} />;
};

export default CardEvolutionContainer;