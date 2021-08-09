import { EmptyState } from "components";
import { CardMyPokemonContainer } from "containers";

const ListMyPokemon = ({ payload }) => {
  const myPokemonList = !payload || payload.length <= 0
    ? <EmptyState mine />
    : payload.map((item) => <CardMyPokemonContainer key={item.name} payload={item} />);

  return <div className="w-11/12 sm:w-3/5 lg:w-3/5 xl:w-2/6 mb-7 border-t-2 pt-7">
    {myPokemonList}</div>;
};

export default ListMyPokemon;