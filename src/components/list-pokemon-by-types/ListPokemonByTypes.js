import { getPokemonList } from '../../services/api';
import CardPokemon from '../card-pokemon';
import Loading from '../loading';

export default function ListPokemonByTypes({ url }) {
  const { data, isLoading, isError } = getPokemonList(url);

  if (isLoading) return <Loading />
  if (isError) return <div><span>Something wrong...</span></div>
  if (data.pokemon.length === 0) return <div className="p-4 mb-7"><span className="text-center">Oops... There's no pokemon founded</span></div>

  const displayPokemon = data.pokemon.map((item, idx) => <CardPokemon key={idx} url={item.pokemon.url} />)
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-7 mb-7">
        {displayPokemon}
      </div>
      <div className="px-5 pb-7">
        <div>
          <span>show {data.pokemon.length}</span>
        </div>
        <div>
          <span>{data.pokemon.length} total pokemon</span>
        </div>
      </div>
    </>
  )
}