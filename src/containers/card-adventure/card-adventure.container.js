import { CardAdventure, LoadingPokeball } from "components";
import { useQuery } from "react-query";
import { getDetailPokemonAPI } from "services/api";

const CardAdventureContainer = (props) => {
  const { id, setIsLoading, fakeProcess } = props;
  const { data, isLoading, isError } =
    useQuery(`adventure/pokemon/${id}`, () => getDetailPokemonAPI(id));
  
    if (isLoading) return <LoadingPokeball />;
    if (isError) return <div><span>Something Wrong...</span></div>;
    
  return <CardAdventure payload={data} setIsLoading={setIsLoading} fakeProcess={fakeProcess} />;
};

export default CardAdventureContainer;