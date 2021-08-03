// Library
import { useQuery } from 'react-query';
import isEmpty from 'lodash/isEmpty';

// Components
import { Loading, SearchNotFound } from "components";
import { CardSearchContainer } from "containers";

// Api
import { getSearchPokemon } from "../../services/api";

export default function ListSearch({ name }) {
  const { data, isLoading, isError } =
    useQuery(`search/list/${name}`, () => getSearchPokemon(name));

  const payloadPokemon = !isEmpty(data) ? data.data : {};

  if (isLoading) return <Loading />;
  if (isError) return <SearchNotFound name={name} />;
  
  return <CardSearchContainer payload={payloadPokemon} />;
}