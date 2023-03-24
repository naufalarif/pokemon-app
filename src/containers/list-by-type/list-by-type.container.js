// Library
import isEmpty from 'lodash/isEmpty';

// Components
import { LoadingSkeleton } from 'components';
import { CardPokemonContainer } from 'containers';

// Hooks
import useGetPokemonByTypes from 'hooks/useGetPokemonByTypes';

const ListByType = ({ type }) => {
  const { pokemonByTypes, isLoading, isError } = useGetPokemonByTypes(`type/${type}`, type);
  
  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <div><span>Something wrong...</span></div>;
  
  let displayData;
  if (!isEmpty(pokemonByTypes)) {
    displayData = pokemonByTypes.map((item) => <CardPokemonContainer payload={item.pokemon} />);
  } else {
    displayData = (
      <div className="p-4 mb-7">
        <span className="text-center">Oops... There&apos;s no pokemon founded</span>
      </div>
    );
  }


  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-5 gap-4 pb-7 mb-7"
    >
      {displayData}
    </div>
  );
};

export default ListByType;