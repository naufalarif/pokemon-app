import { useState } from 'react';
import ListPokemon from '../../components/ListPokemon';
import ListPokemonByAbility from '../../components/ListPokemonByAbility';

export default function Adventure({ pokemon, ability }) {
  const [abilityUrl, setAbilityUrl] = useState('');

  const handleShowPokemonByAbility = (url) => {
    setAbilityUrl(url)
  }

  // Ability Category
  const abilityPayload = ability.results ?? [];
  const displayAbility = abilityPayload.map((item, idx) => {   
    const ability = item.name.replace(/[^a-zA-Z ]/g, " ");
    const abilityCapital = ability.charAt(0).toUpperCase() + ability.slice(1);
    const active = abilityUrl === item.url ? 'bg-blue-500 text-gray-100' : 'bg-gray-100 text-blue-500';

    return (
      <button
        key={idx}
        className={`
          ${active} px-3 py-2 rounded-3xl 
          hover:bg-blue-500 hover:text-gray-100
          focus:outline-none
          cursor-pointer`}
        onClick={() => handleShowPokemonByAbility(item.url)}
      >
        {abilityCapital}
      </button>
    )
  })

  // Show List
  const showList = !abilityUrl ? <ListPokemon url={pokemon} /> : <ListPokemonByAbility url={abilityUrl} />;

  console.log(abilityUrl)
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="grid grid-cols-5 md:grid-cols-9 gap-4 px-4 pb-7 mb-1">
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
  )
}

export async function getStaticProps(ctx) {
  const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';
  // const resPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0');
  // const dataPokemon = await resPokemon.json();

  const resAbility = await fetch('https://pokeapi.co/api/v2/ability/?limit=8&offset=0');
  const dataAbility = await resAbility.json();

  return {
    props: {
      pokemon: pokemonAPI,
      ability: dataAbility
    },
    revalidate: 1
  }
}