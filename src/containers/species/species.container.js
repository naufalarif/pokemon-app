// Library
import isEmpty from "lodash/isEmpty";

// Components
import { Evolution } from "containers";
import { LoadingPokeball } from 'components';

// Hooks
import useGetSpeciesPokemon from "hooks/useGetSpeciesPokemon";

const Species = ({ name }) => {
  const { isLoading, isError, evolutionUrl } = useGetSpeciesPokemon(`species/${name}`, name);

  if (isLoading) return <LoadingPokeball />;
  if (isError) return <span>No Species Found.</span>;

  return (
    <div className="bg-white rounded-xl p-3 my-2">
      <div className="text-center py-2 mb-2 border-b-2">
        <span className="text-gray-500 font-bold text-2xl">Evolution</span>
      </div>
      <div>
        <Evolution name={name} url={evolutionUrl} />
      </div>
    </div>
  );
};

export default Species;