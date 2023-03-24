import { CardAdventure, LoadingPokeball } from "components";
import useSearchPokemon from "hooks/useSearchPokemon";

const CardAdventureContainer = (props) => {
  const { id, setIsLoading, fakeProcess } = props;
  const { pokemon, isLoading, isError } = useSearchPokemon(`adventure/pokemon/${id}`, id);

  if (isLoading) return <LoadingPokeball />;
  if (isError) return <div><span>Something Wrong...</span></div>;
    
  return <CardAdventure payload={pokemon} setIsLoading={setIsLoading} fakeProcess={fakeProcess} />;
};

export default CardAdventureContainer;