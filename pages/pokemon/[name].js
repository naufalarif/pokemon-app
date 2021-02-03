import Image from 'next/image';
import { getPokemonByName, getAllPokemon } from '../../services/api';

// Lib
import { Radar } from 'react-chartjs-2';

// Components
import Layout from '../../components/Layout';
import DetailAbility from '../../components/DetailAbility';
import DetailTypes from '../../components/DetailTypes';

// Utils
import { extractNumber, firstUpperCase, removeSymbol } from '../../utils/textFormat';
import { imageConvert } from '../../utils/imageUtils';

export default function Pokemon({ data }) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const detailAbility = data.abilities.map((item, idx) => <DetailAbility key={idx} url={item.ability.url}/>);
  const detailTypes = data.types.map((item, idx) => <DetailTypes key={idx} url={item.type.url} />);

  const types = data.types.map((item, idx) => {
    const divider = idx + 1 === data.types.length ? '' : '/';
    return <span key={idx} className="text-2xl font-bold text-gray-400 mr-2">
      {`${firstUpperCase(item.type.name)} ${divider}`}</span>})

  const imgArtwork = imageConvert(data.sprites.other['official-artwork'].front_default);
  const imgDwFrontDef = imageConvert(data.sprites.other.dream_world.front_default);
  const imgBackDef = imageConvert(data.sprites.back_default);
  const imgFrontDef = imageConvert(data.sprites.front_default);
  const imgFrontShiny = imageConvert(data.sprites.front_shiny);
  const imgBackShiny = imageConvert(data.sprites.back_shiny);

  const baseStat = data.stats.map(item => item.base_stat);
  const dataset = {
    labels: ['HP', 'ATK', 'DEF', 'SP ATK', 'SP DEF', 'SPD'],
    datasets: [{
      label: firstUpperCase(removeSymbol(data.name)),
      data: baseStat,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 4
    }]
  }

  const options = {
    maintainAspectRatio: false,
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        beginAtZero: true,
        suggestedMax: 140,
      },
      pointLabels: {
        fontSize: 16,
        fontStyle: 'bold'
      },
    }
  };

  return (
    <Layout active="pokedex">
      <main className="py-4 px-7 bg-gray-200">
        <div id="header" className="flex flex-wrap flex-row justify-between items-end">
          <div className="py-9">
            <h4 className="text-2xl font-bold text-gray-400">{extractNumber(data.order)}</h4>
            <h2 className="text-5xl font-extrabold mb-2 capitalize">{removeSymbol(data.name)}</h2>
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
        
        <div id="content" className="flex grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-7 pb-7 mb-1">
          {/* Left */}
          <div id="left">
           {detailTypes}
          </div>

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
              {/* {stats} */}
              <Radar className="chart-container" type="chart" data={dataset} options={options} />
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