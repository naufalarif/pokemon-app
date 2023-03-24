// Components
import { LoadingSkeleton, SearchNotFound } from "components";
import { CardPokemonContainer } from "containers";

// Utils
import { convertToSlug } from 'utils';
import { useSearchPokemon } from 'hooks';

export default function ListSearch({ name }) {
  const slug = convertToSlug(name);
  const { pokemon, isLoading, isError, isNotFound } = useSearchPokemon(name, slug);

  if (isLoading) return <LoadingSkeleton />;
  if (isError || isNotFound) return <SearchNotFound name={name} />;

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-5 gap-4 pb-7 mb-7"
    >
      <CardPokemonContainer payload={pokemon} />
    </div>
  );
}