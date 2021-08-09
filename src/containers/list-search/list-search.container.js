// Library
import { useQuery } from 'react-query';

// Components
import { Loading, SearchNotFound } from "components";
import { CardSearchContainer } from "containers";

// Utils
import { convertToSlug } from 'utils';

// Api
import { getDetailPokemonAPI } from "../../services/api";

export default function ListSearch({ name }) {
  const slug = convertToSlug(name);
  const { data, isLoading, isError } =
    useQuery(`search/list/${name}`, () => getDetailPokemonAPI(slug));

  if (isLoading) return <Loading />;
  if (isError) return <SearchNotFound name={name} />;
  
  return <CardSearchContainer payload={data} />;
}