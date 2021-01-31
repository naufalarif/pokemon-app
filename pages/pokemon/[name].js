import Image from 'next/image';
import { getPokemonByName, getAllPokemon } from '../../services/api';

// Components
import Layout from '../../components/Layout';
import DetailAbility from '../../components/DetailAbility';
import DetailTypes from '../../components/DetailTypes';

// Utils
import { extractNumber, firstUpperCase, removeSymbol } from '../../utils/textFormat';
import { extractStats } from '../../utils/pokemonTypes';
import { imageConvert } from '../../utils/imageUtils';

export default function Pokemon({ data }) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const detailAbility = data.abilities.map((item, idx) => <DetailAbility key={idx} url={item.ability.url}/>);
  const detailTypes = data.types.map((item, idx) => <DetailTypes key={idx} url={item.type.url} />);

  const types = data.types.map((item, idx) => {
    const divider = idx + 1 === data.types.length ? '' : '/';
    return <span key={idx} className="text-2xl font-bold text-gray-400 mr-2">{`${firstUpperCase(item.type.name)} ${divider}`}</span>})
  
    const stats = data.stats.map((item, idx) => 
    <div key={idx} className="flex items-center mb-2">
      <span className="font-bold text-gray-500 mr-2 w-32">{firstUpperCase(removeSymbol(item.stat.name))}</span>
      <div className={`bg-${extractStats(item.stat.name)}-500 text-gray-100 py-1 px-3 rounded-xl`} 
        style={{ width: `${item.base_stat}px` }}>
        <span className="font-extrabold">{item.base_stat}</span>
      </div>
    </div>)

  const imgArtwork = imageConvert(data.sprites.other['official-artwork'].front_default);
  const imgDwFrontDef = imageConvert(data.sprites.other.dream_world.front_default);
  const imgBackDef = imageConvert(data.sprites.back_default);
  const imgFrontDef = imageConvert(data.sprites.front_default);
  const imgFrontShiny = imageConvert(data.sprites.front_shiny);
  const imgBackShiny = imageConvert(data.sprites.back_shiny);

  return (
    <Layout active="pokedex">
      <main className="py-4 px-7 bg-gray-200">
        <div className="flex flex-wrap flex-row justify-between items-end">
          <div className="py-9">
            <h4 className="text-2xl font-bold text-gray-400">{extractNumber(data.order)}</h4>
            <h2 className="text-5xl font-extrabold mb-2">{firstUpperCase(data.name)}</h2>
            <div>{types}</div>
          </div>
          <div>
            <img 
              src={imgArtwork}
              width="400px"
              height="400px"
              alt="pokemon"
            />
          </div>
        </div>
        
        <div className="flex grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-7 pb-7 mb-1">
          {/* Left */}
          <div id="left">
           {detailTypes}
          </div>
          {/* Left */}

          {/* Right */}
          <div id="right">
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

            {/* Image */}
            <div className="flex flex-row bg-white rounded-xl p-3 my-2">
              <Image 
                loader={myLoader}
                src={imgDwFrontDef}
                width={100}
                height={100}
                alt="pokemon"
              />
              <div className="ml-4">
                <span>{data.weight} Hg</span><br/>
                <span>{data.height} dm</span><br/>
                <span>{data.base_experience} Exp</span>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col bg-white rounded-xl p-3 my-2">
              <div className="text-center py-2 mb-3 border-b-2">
                <span className="text-gray-500 font-bold text-2xl cursor-default">Appearance</span>
              </div>
              <div className="flex flex-row">
                <Image 
                  loader={myLoader}
                  src={imgBackDef}
                  width="100px"
                  height="100px"
                  alt="pokemon"
                />
                <Image 
                  loader={myLoader}
                  src={imgFrontDef}
                  width="100px"
                  height="100px"
                  alt="pokemon"
                />
                <Image 
                  loader={myLoader}
                  src={imgFrontShiny}
                  width="100px"
                  height="100px"
                  alt="pokemon"
                />
                <Image 
                  loader={myLoader}
                  src={imgBackShiny}
                  width="100px"
                  height="100px"
                  alt="pokemon"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPokemon();
  return { paths, fallback: false } 
}

export async function getStaticProps({ params }) {
  const res = await getPokemonByName(params.name);
  const data = await res;
  return { props: { data } }
}