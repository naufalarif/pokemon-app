import { Evolution } from "containers";
import isEmpty from "lodash/isEmpty";
import { useQuery } from "react-query";
import { getSpeciesAPI } from "../../services/api";
import LoadingPokeball from '../../components/loading-pokeball';

const Species = ({ species }) => {
  const { data, isLoading, isError } = useQuery(`species/${species}`, () => getSpeciesAPI(species));

  if (isLoading) return <LoadingPokeball />;
  if (isError) return <span>No Species Found.</span>;
  
  const url = !isEmpty(data.evolution_chain) ? data.evolution_chain.url : '';

  return (
    <div className="bg-white rounded-xl p-3 my-2">
      <div className="text-center py-2 mb-2 border-b-2">
        <span className="text-gray-500 font-bold text-2xl">Evolution</span>
      </div>
      <div>
        <Evolution name={species} url={url} />
      </div>
    </div>
  );
};

export default Species;