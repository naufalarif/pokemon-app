import { useState } from 'react';

// Library
import isEmpty from 'lodash/isEmpty';
import { useQuery, useInfiniteQuery } from 'react-query';

// Components
import { Layout, PaginationPokemon, ListType, InputSearch, Loading } from 'components';
import { ListSearch, ListByType } from 'containers';

// Utils
import { getAllPokemonAPI, getTypePokemonAPI } from 'services/api';

// Server Side Rendering
export async function getStaticProps() {
  const resType = await getTypePokemonAPI(20);
  const dataType = await resType;

  const resPokemon = await getAllPokemonAPI(20);
  const dataPokemon = await resPokemon;

  return { props: { dataType, dataPokemon } };
}

export default function Pokedex(props) {
  // State
  const [ type, setType ] = useState('');
  const [ limit, setLimit ] = useState(20);
  const [ pokemonName, setPokemonName ] = useState('');

  // React Query
  const { data: dataType } =
    useQuery('types', () => getTypePokemonAPI(20), { initialData: props.dataType });
  const { data: dataPokemon, isError, isLoading } =
    useInfiniteQuery('pokemon', () => getAllPokemonAPI(limit), { initialData: props.dataPokemon });

  if (isLoading) return <Loading />;
  if (isError) return <span>Something wrong</span>;

  // Payload
  const payloadType = dataType.results;
  const payloadPokemon = !isEmpty(dataPokemon.pages) ? dataPokemon.pages[0].results : [];
  const totalPokemon = !isEmpty(dataPokemon.pages) ? dataPokemon.pages[0].count : 0;

  // Display Data
  let displayData;
  if (!type && !pokemonName) {
    displayData =
      <PaginationPokemon
        payload={payloadPokemon}
        limit={limit}
        setLimit={setLimit}
        total={totalPokemon}
        isLoading={isLoading}
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
        <div className="px-4">
          {displayData}
        </div>
      </div>
    </Layout>
  );
}