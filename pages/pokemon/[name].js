import { useRouter } from 'next/router';
import { getDetailPokemon, getDetailPokemonByName, getEvolutionPokemon, getPokemonByName } from '../../services/api';
import Loading from '../../components/Loading';
import Layout from '../../components/Layout';
import { Radar } from 'react-chartjs-2';
import { extractNumber, firstUpperCase, removeSymbol } from '../../utils/textFormat';

export default function DetailPokemon({ data }) {
  const { data: chain, isLoading, isError } = getEvolutionPokemon(data.id);

  const dataEvolution = isLoading ? 'Loading' : !isLoading && !isError ? chain : 'something worng...'

  const abilities = data.abilities.map((item, idx) => 
    <div><span key={idx} className="mx-2">{firstUpperCase(removeSymbol(item.ability.name))}</span></div>)
  const types = data.types.map((item, idx) => 
    <span key={idx} className="text-2xl font-bold text-gray-400 mr-2">{firstUpperCase(item.type.name)}</span>)
  const stats = data.stats.map((item, idx) => 
    <p key={idx} className="mx-2">{firstUpperCase(removeSymbol(item.stat.name))}: {item.base_stat}</p>)

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
        
        <div className="flex flex-row">
          <div className="bg-white rounded-xl p-3 my-2 mr-7 w-2/4">
            <div className="text-center py-2 mb-2 border-b-2">
              <span className="text-gray-500 font-bold text-xl cursor-default">Ability</span>
            </div>
            {abilities}
          </div>
          <div className="bg-white rounded-xl p-3 my-2 w-2/4">
            <div className="text-center py-2 mb-2 border-b-2">
              <span className="text-gray-500 font-bold text-xl">Stats</span>
            </div>
            {stats}
          </div>
        </div>
        
        <span>Weight: {data.weight}</span><br/>
        <span>Base Exp: {data.base_experience}</span>
        <div className="flex flex-row">
          <img 
            src={data.sprites.other.dream_world.front_default}
            width="100px"
            height="100px"
            alt="pokemon"
          />
        </div>
        <div className="flex flex-row">
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