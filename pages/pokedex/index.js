import { useState } from 'react';

// Components
import Layout from '../../components/Layout';
import PaginationPokemon from '../../components/PaginationPokemon';
import ListPokemonByAbility from '../../components/ListPokemonByAbility';

// Utils
import config from '../../config';
import { firstUpperCase, removeSymbol } from '../../utils/textFormat';

export default function Pokedex({ data }) {
  const [abilityUrl, setAbilityUrl] = useState('');

  const handleShowPokemonByAbility = (url) => {
    setAbilityUrl(url)
  };

  // Ability Category 
  const displayAbility = data.results.map((item, idx) => {   
    const abilityCapital = firstUpperCase(removeSymbol(item.name));
    const active = abilityUrl === item.url ? 'bg-blue-500 text-gray-100' : 'bg-gray-100 text-blue-500';
    return <button key={idx}
        className={`
          ${active} px-3 py-2 rounded-3xl font-bold
          hover:bg-blue-500 hover:text-gray-100
          focus:outline-none cursor-pointer`}
        onClick={() => handleShowPokemonByAbility(item.url)}>
        {abilityCapital}
      </button>
  });

  // Show List
  const showList = !abilityUrl ? <PaginationPokemon url={config.apiURL} /> : <ListPokemonByAbility url={abilityUrl} />;

  return (
    <Layout active="pokedex">
      <div className="flex flex-col justify-center items-center p-4">
        <div className="
          grid grid-cols-2 
          md:grid-cols-5 sm:grid-cols-4 lg:grid-cols-9 
          gap-4 px-4 pb-7 mb-1"
        >
          {displayAbility}
          <button 
            onClick={() => setAbilityUrl('')}
            className="
              px-4 py-1 rounded-3xl 
              bg-red-400 text-gray-100
              hover:bg-red-500 hover:text-gray-100
              focus:outline-none cursor-pointer"
          >
            remove
          </button>
        </div>
        <div className="px-4">
          {showList}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/ability/?limit=8&offset=0');
  const data = await res.json();

  return { props: { data }, revalidate: 1 }
}