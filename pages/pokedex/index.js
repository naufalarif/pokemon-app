import { useState } from 'react';

// Components
import { 
  Layout, 
  PaginationPokemon, 
  ListPokemonByTypes, 
  SearchPokemon 
} from 'components';

// Utils
import config from 'config';
import { firstUpperCase } from 'utils';

import { Input, Space } from 'antd';

const { Search } = Input;

export default function Pokedex({ data }) {
  const [typeUrl, setTypeUrl] = useState('');
  const [pokemonName, setPokemonName] = useState('');

  const handleShowPokemonByType = (url) => {
    setTypeUrl(url)
  };

  const onSearch = (value) => {
    setPokemonName(value.toLowerCase());
  }

  // Ability Category 
  const displayTypes = data.results.map((item, idx) => {   
    const typesCapital = firstUpperCase(item.name);
    const active = typeUrl === item.url ? 'bg-blue-500 text-gray-100' : 'bg-gray-100 text-blue-500';
    return <div key={idx}
        className={`
          ${active} px-5 py-2 mr-4 rounded-3xl font-bold 
          hover:bg-blue-500 hover:text-gray-100
          focus:outline-none cursor-pointer`}
        onClick={() => handleShowPokemonByType(item.url)}>
          <span>{typesCapital}</span>
      </div>
  });

  // Show List
  const showList = 
    !typeUrl && !pokemonName ? <PaginationPokemon url={config.apiURL} /> 
    : !pokemonName ? <ListPokemonByTypes url={typeUrl} />
    : <SearchPokemon name={pokemonName} />

  return (
    <Layout active="pokedex">
      <div>
        <div id="search-bar" className="flex justify-center py-2 mt-4">
          <Space direction="vertical">
            <Search 
              className="w-full"
              placeholder="Search pokemon..." 
              allowClear 
              onSearch={onSearch}
            />
          </Space>
        </div>

        <div id="types" className="flex justify-center items-center p-4 pb-7 mb-1">
          <div className="flex flex-nowrap overflow-auto w-10/12 md:w-4/5 lg:w-3/5 mr-4">
            {displayTypes}
          </div>
          <div>
            <button 
              onClick={() => setTypeUrl('')}
              className="
                px-2 py-0.5 rounded-full
                bg-red-400 text-gray-100
                hover:bg-red-500 hover:text-gray-100
                focus:outline-none cursor-pointer"
            >
              &#10005;
            </button>
          </div>
        </div>

        <div id="list-pokemon" className="flex flex-col justify-center items-center">
          <div className="px-4">
            {showList}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/type?limit=20&offset=0');
  const data = await res.json();

  return { props: { data }, revalidate: 1 }
}