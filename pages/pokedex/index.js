// Library
import { useState } from 'react';

// Components
import { Layout, PaginationPokemon, ListType, InputSearch, Loading } from 'components';
import { ListSearch, ListByType } from 'containers';

// Hooks
import { useGetAllPokemon } from 'hooks/useGetAllPokemon';
import { useGetPokemonTypes } from 'hooks/useGetPokemonTypes';

export default function Pokedex() {
  // State
  const [ type, setType ] = useState('');
  const [ pokemonName, setPokemonName ] = useState('');

  // Hooks
  const { types } = useGetPokemonTypes();
  const { pokemons, isError, isLoading, fetchNextPage, total } = useGetAllPokemon();

  if (isLoading) return <Loading />;
  if (isError) return <span>Something wrong</span>;

  // Display Data
  let displayData;
  if (!type && !pokemonName) {
    displayData =
      <PaginationPokemon
        payload={pokemons}
        total={total}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
      />;
  } else if (!pokemonName) {
    displayData = <ListByType type={type} />;
  } else {
    displayData = <ListSearch name={pokemonName} pokemonName={pokemonName} />;
  }

  return (
    <Layout active="pokedex">
      <InputSearch setName={setPokemonName} name={pokemonName} />
      <ListType
        payload={types}
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