import { Loading, ListEvolution } from "components";
import useGetEvolutionPokemon from "hooks/useGetEvolutionPokemon";

const Evolution = ({ url, name }) => {
  const { evolutions, isLoading, isError  } = useGetEvolutionPokemon(`list/evolution/${name}`, url);

  if (isLoading) return <Loading />;
  if (isError) return <span>This Pokemon doesn&apos;t have evolution</span>;

  return <ListEvolution data={evolutions} />;
};

export default Evolution;
