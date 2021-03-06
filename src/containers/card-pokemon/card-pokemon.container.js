// Library
import { useQuery } from 'react-query';

// Components
import { CardPokemon, CardSkeleton } from 'components';

// Api
import { getDetailPokemonAPI } from '../../services/api';

const CardPokemonContainer = ({ payload }) => {
  const { data, isLoading, isError } =
    useQuery(`pokemon/${payload.name}`, () => getDetailPokemonAPI(payload.name));

  if (isLoading) return <CardSkeleton />;
  if (isError) return <div><span>Something Wrong...</span></div>;

  return <CardPokemon payload={data} />;
};

export default CardPokemonContainer;