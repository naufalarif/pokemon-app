// Components
import { CardPokemon, CardSkeleton } from 'components';

// Hooks
import useSearchPokemon from 'hooks/useSearchPokemon';

const CardPokemonContainer = ({ payload }) => {
  const { pokemon, isLoading, isError } = useSearchPokemon(`pokemon/${payload.name}`, payload.name);

  if (isLoading) return <CardSkeleton />;
  if (isError) return <div><span>Something Wrong...</span></div>;

  return <CardPokemon payload={pokemon} />;
};

export default CardPokemonContainer;