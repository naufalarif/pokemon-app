// Library
import { useQuery } from 'react-query';

// Components
import { Loading, SearchNotFound } from "components";
import { CardSearchContainer } from "containers";

// Api
import { getDetailPokemon } from "../../services/api";

export default function ListSearch({ name }) {
  const { data, isLoading, isError } =
    useQuery(`search/list/${name}`, () => getDetailPokemon(name));

  if (isLoading) return <Loading />;
  if (isError) return <SearchNotFound name={name} />;
  
  return <CardSearchContainer payload={data} />;
}