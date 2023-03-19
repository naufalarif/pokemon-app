import { useMemo, useState } from 'react';

// Library
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { useQuery, useInfiniteQuery } from 'react-query';

// Components
import { Layout, PaginationPokemon, ListType, InputSearch, Loading } from 'components';
import { ListSearch, ListByType } from 'containers';

// Utils
import { getAllPokemonAPI, getTypePokemonAPI } from 'services/api';
import useStorePokemon from 'HOC/useStorePokemon';

// Server Side Rendering
// export async function getStaticProps() {
//   const resType = await getTypePokemonAPI(20);
//   const dataType = await resType;

//   const resPokemon = await getAllPokemonAPI(20);
//   const dataPokemon = await resPokemon;

//   return { props: { dataType, dataPokemon } };
// }

export default function Pokedex(props) {
  // State
  const [ type, setType ] = useState('');
  const [ limit, setLimit ] = useState(0);
  const [ pokemonName, setPokemonName ] = useState('');

  // React Query
  const { data: dataType } =
    useQuery('types', () => getTypePokemonAPI(20), { initialData: props.dataType });
  const { data: dataPokemon, isError, isLoading, fetchNextPage } =
    useInfiniteQuery(
      ['pokemon'],
      ({ pageParam }) => getAllPokemonAPI(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next ? lastPage.next : undefined,
      },
    );

  if (isLoading) return <Loading />;
  if (isError) return <span>Something wrong</span>;

  function storePokemon(data) {
    let res = [];
    data.forEach((items) => {
      res = [...res, ...items.results];
    });
    return res;
  }

  // Payload
  const payloadType = dataType.results;
  const total = get(dataPokemon, 'pages', []).length - 1;
  const payloadPokemon = !isEmpty(dataPokemon.pages) ? storePokemon(dataPokemon.pages) : [];
  const totalPokemon = !isEmpty(dataPokemon.pages) ? dataPokemon.pages[total].count : 0;

  // Display Data
  let displayData;
  if (!type && !pokemonName) {
    displayData =
      <PaginationPokemon
        payload={payloadPokemon}
        total={totalPokemon}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
      />;
  } else if (!pokemonName) {
    displayData = <ListByType type={type} />;
  } else {
    displayData = <ListSearch name={pokemonName} />;
  }

  return (
    <Layout active="pokedex">
      <InputSearch setPokemonName={setPokemonName} />
      <ListType
        payload={payloadType}
        setType={setType}
        type={type}
      />
      <div id="list-pokemon" className="flex flex-col justify-center items-center">
        <div className="px-2">
          {displayData}
        </div>
      </div>
    </Layout>
  );
}