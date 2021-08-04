// Library
import { useQuery } from 'react-query';

// Components
import { CardSearch, CardSkeleton } from 'components';

// Api
import { getDetailPokemon } from '../../services/api';

const CardSearchContainer = ({ payload }) => {
  const { data, isLoading, isError } =
    useQuery(`${payload.name}`, () => getDetailPokemon(payload.name));

  if (isLoading) return <CardSkeleton />;
  if (isError) return <div><span>Something Wrong...</span></div>;

  return <CardSearch payload={data} />;
};

export default CardSearchContainer;