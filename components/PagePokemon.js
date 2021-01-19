import config from "../config";
import { getPokemonList } from "../services/api";
import CardPokemon from "./CardPokemon";
import Loading from "./Loading";

export default function PagePokemon({ page }) {
  const { data, isLoading, isError } = getPokemonList(page);

  if (isLoading) return <Loading />
  if (isError) return <div><span>Something wrong...</span></div>

  const displayPokemon = data.results.map((item, idx) => <CardPokemon key={idx} url={item.url} />)

  return (
    <>
      {displayPokemon}
    </>
  )
}