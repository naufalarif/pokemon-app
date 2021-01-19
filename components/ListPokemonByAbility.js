import { getPokemonList } from '../services/api';
import CardPokemon from './CardPokemon';

export default function ListPokemon({ url }) {
  const { data, isLoading, isError } = getPokemonList(url);

  if (isLoading) return <div><span>Loading...</span></div>
  if (isError) return <div><span>Something wrong...</span></div>

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5  gap-4 pb-7 mb-2">
        {data.pokemon.map((item, idx) => <CardPokemon key={idx} url={item.pokemon.url} />)}
      </div>
      <div className="px-5 pb-7">
        <br/>
        <span>{data.pokemon.length} total pokemon</span>
      </div>
    </>
  )
}