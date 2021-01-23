import Image from 'next/image';
import { getDetailPokemonByName, getEvolutionPokemon, getPokemonByName } from '../../services/api';
import Loading from '../../components/Loading';
import Layout from '../../components/Layout';
import DetailAbility from '../../components/DetailAbility';
import DetailTypes from '../../components/DetailTypes';
import { extractNumber, firstUpperCase, removeSymbol } from '../../utils/textFormat';

export default function DetailPokemon({ data }) {
  const detailAbility = data.abilities.map((item, idx) => <DetailAbility key={idx} url={item.ability.url}/>);
  const detailTypes = data.types.map((item, idx) => <DetailTypes key={idx} url={item.type.url} />);

  const types = data.types.map((item, idx) => {
    const divider = idx + 1 === data.types.length ? '' : '/';
    return <span key={idx} className="text-2xl font-bold text-gray-400 mr-2">{`${firstUpperCase(item.type.name)} ${divider}`}</span>})
  const stats = data.stats.map((item, idx) => 
    <p key={idx} className="mx-2">{firstUpperCase(removeSymbol(item.stat.name))}: {item.base_stat}</p>)

  const handleGacha = () => {
    const randomNumber = Math.random() * 10;
    const rate = 8.5;
    const success = randomNumber > rate;
    if (success) {
      localStorage.setItem(data.name);
    } else {
      
    }
  }

  return (
    <Layout active="pokedex">
      <main className="py-4 px-7 bg-gray-200">
        <div className="flex flex-row justify-between items-end">
          <div className="py-9">
            <h4 className="text-2xl font-bold text-gray-400">{extractNumber(data.order)}</h4>
            <h2 className="text-5xl font-extrabold mb-2">{firstUpperCase(data.name)}</h2>
            <div>{types}</div>
          </div>
          <div>
            <img 
              src={data.sprites.other['official-artwork'].front_default}
              width="400px"
              height="400px"
              alt="pokemon"
            />
          </div>
        </div>
        
        <div className="flex grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-7 pb-7 mb-1">
          {/* Left */}
          <div>
           {detailTypes}
          </div>

          {/* Right */}
          <div>
            {/* Ability */}
            <div className="bg-white rounded-xl p-3 my-2">
              <div className="text-center py-2 mb-3 border-b-2">
                <span className="text-gray-500 font-bold text-2xl cursor-default">Ability</span>
              </div>
              {detailAbility}
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl p-3 my-2">
              <div className="text-center py-2 mb-2 border-b-2">
                <span className="text-gray-500 font-bold text-2xl">Stats</span>
              </div>
              {stats}
            </div>

            {/* Base */}
            <div className="bg-white rounded-xl p-3 my-2">
              <span>Weight: {data.weight}</span><br/>
              <span>Base Exp: {data.base_experience}</span>
            </div>

            {/* Image */}
            <div className="flex flex-row bg-white rounded-xl p-3 my-2">
              <img 
                src={data.sprites.other.dream_world.front_default}
                width="100px"
                height="100px"
                alt="pokemon"
              />
            </div>

            {/* Form */}
            <div className="flex flex-row bg-white rounded-xl p-3 my-2">
              <img 
                src={data.sprites.back_default}
                width="100px"
                height="100px"
                alt="pokemon"
              />
              <img 
                src={data.sprites.front_default}
                width="100px"
                height="100px"
                alt="pokemon"
              />
              <img 
                src={data.sprites.front_shiny}
                width="100px"
                height="100px"
                alt="pokemon"
              />
              <img 
                src={data.sprites.back_shiny}
                width="100px"
                height="100px"
                alt="pokemon"
              />
            </div>
          
            {/* Gacha */}
            <div className="flex flex-col bg-white rounded-xl p-3 my-2 justify-center items-center">
              <Image 
                src="/icon.png"
                width={200}
                height={200}
                alt="pokeball"
              />
              <button  
                type="button"
                onClick={handleGacha}
                className="
                  rounded-3xl bg-red-500 hover:bg-red-700 py-2 px-8 text-gray-50 focus:outline-none
                  font-extrabold my-4
                ">
                  Catch Pokémon
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getPokemonByName();
  return { paths, fallback: false } 
}

export async function getStaticProps({ params }) {
  const res = await getDetailPokemonByName(params.name);
  const data = await res;
  return { props: { data } }
}