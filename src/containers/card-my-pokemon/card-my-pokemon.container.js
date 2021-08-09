// Library
import { useQuery } from 'react-query';

// Components
import { CardMyPokemon, CardSkeleton } from 'components';

// Api
import { getDetailPokemonAPI } from '../../services/api';

const CardMyPokemonContainer = ({ payload }) => {
  const { data, isLoading, isError } =
    useQuery(`my-pokemon/${payload.data}`, () => getDetailPokemonAPI(payload.data));

  if (isLoading) return <CardSkeleton />;
  if (isError) return <div><span>Something Wrong...</span></div>;

  return <CardMyPokemon payload={data} />;
};

export default CardMyPokemonContainer;