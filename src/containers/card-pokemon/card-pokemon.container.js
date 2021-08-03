// Library
import isEmpty from "lodash/isEmpty";
import { useQuery } from 'react-query';

// Components
import { CardPokemon, CardSkeleton } from 'components';

// Api
import { getDetailPokemon } from '../../services/api';

const CardPokemonContainer = ({ payload }) => {
  const { data, isLoading, isError } =
    useQuery(`pokemon/${payload.name}`, () => getDetailPokemon(payload.name));

  if (isLoading) return <CardSkeleton />;
  if (isError) return <div><span>Something Wrong...</span></div>;
  
  const payloadPokemon = !isEmpty(data.data) ? data.data : {};

  return <CardPokemon payload={payloadPokemon} />;
};

export default CardPokemonContainer;