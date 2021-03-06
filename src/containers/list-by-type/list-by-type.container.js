// Library
import isEmpty from 'lodash/isEmpty';
import { useQuery } from 'react-query';

// Components
import { Loading } from 'components';
import { CardPokemonContainer } from 'containers';

// Api
import { getPokemonByTypeAPI } from '../../services/api';

const ListByType = ({ type }) => {
  const { data, isLoading, isError } = useQuery(`type/${type}`, () => getPokemonByTypeAPI(type));
  
  if (isLoading) return <Loading />;
  if (isError) return <div><span>Something wrong...</span></div>;
  
  let displayData;
  if (!isEmpty(data.pokemon)) {
    displayData = data.pokemon.map((item) => <CardPokemonContainer payload={item.pokemon} />);
  } else {
    displayData = <div className="p-4 mb-7">
      <span className="text-center">Oops... There&apos;s no pokemon founded</span>
    </div>;
  }


  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-7 mb-7"
    >
      {displayData}
    </div>
  );
};

export default ListByType;