import { CardEvolution, Loading } from "components";
import useSearchPokemon from "hooks/useSearchPokemon";

const CardEvolutionContainer = ({ name }) => {
  const { pokemon, isLoading, isError } = useSearchPokemon(`evolution/${name}`, name);

  if (isLoading) return <Loading />;
  if (isError) return <span>This Pokemon doesn&apos;t have evolution</span>;

  return <CardEvolution payload={pokemon} />;
};

export default CardEvolutionContainer;