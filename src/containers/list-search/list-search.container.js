// Library
import { useQuery } from 'react-query';

// Components
import { Loading, SearchNotFound } from "components";
import { CardSearchContainer } from "containers";

// Api
import { getSearchPokemon } from "../../services/api";

export default function ListSearch({ name }) {
  const { data, isLoading, isError } =
    useQuery(`search/list/${name}`, () => getSearchPokemon(name));

  if (isLoading) return <Loading />;
  if (isError) return <SearchNotFound name={name} />;
  
  return <CardSearchContainer payload={data} />;
}