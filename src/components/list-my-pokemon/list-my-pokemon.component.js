import isEmpty from "lodash/isEmpty";
import { EmptyState, CardMyPokemon } from "components";

const ListMyPokemon = ({ payload }) => {
  const myPokemonList = !isEmpty(payload)
    ? payload.map((item) => <CardMyPokemon key={item.name} payload={item} />)
    : <EmptyState mine />;

  return (
    <div className="w-11/12 sm:w-3/5 lg:w-3/5 xl:w-2/6 mb-7 border-t-2 pt-7">
      {myPokemonList}
    </div>
  );
};

export default ListMyPokemon;