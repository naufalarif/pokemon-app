import { useQuery } from "react-query";
import { getDetailPokemon } from "services/api";
import { CardEvolution, Loading } from "components";

const CardEvolutionContainer = ({ name }) => {
  const { data, isLoading, isError } =
    useQuery(`evolution/${name}`, () => getDetailPokemon(name));
  if (isLoading) return <Loading />;
  if (isError) return <span>This Pokemon doesn&apos;t have evolution</span>;

  return <CardEvolution payload={data} />;
};

export default CardEvolutionContainer;