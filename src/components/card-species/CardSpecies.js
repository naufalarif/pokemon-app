import { getSpeciesPokemon } from "../../services/api"
import CardEvolution from "../card-evolution";
import LoadingPokeball from '../loading-pokeball';

export default function CardSpecies({ url }) {
  const { dataSpecies, isLoading, isError } = getSpeciesPokemon(url)
  if (isLoading) return <LoadingPokeball />
  if (isError) return <span>No Species Found.</span>

  return (
    <>
      <div className="text-center py-2 mb-2 border-b-2">
        <span className="text-gray-500 font-bold text-2xl">Evolution</span>
      </div>
      <div>
        <CardEvolution url={dataSpecies.evolution_chain.url} />
      </div>
    </>
  )
}