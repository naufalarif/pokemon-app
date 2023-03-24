// Components
import { CardSearch, CardSkeleton } from 'components';
import { useSearchPokemon } from 'hooks';

const CardSearchContainer = ({ payload }) => {
  const { pokemon, isLoading, isError } = useSearchPokemon(`search/${payload.name}`, payload.name);

  if (isLoading) return <CardSkeleton />;
  if (isError) return <div><span>Something Wrong...</span></div>;

  return <CardSearch payload={pokemon} />;
};

export default CardSearchContainer;