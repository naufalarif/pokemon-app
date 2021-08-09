// Library
import isEmpty from 'lodash/isEmpty';

// Components
import {
  Layout,
  ListAbility,
  ListEffects,
  Stats,
  Loading,
  DetailForm,
  DetailAppereance,
} from 'components';
import { Species } from 'containers';

// Utils
import { extractNumber, firstUpperCase, removeSymbol, imageConvert } from 'utils';

// Api
import { getAllPokemonAPI, getDetailPokemonAPI } from 'services/api';
import { useQuery } from 'react-query';


// Static Site Generotor
export async function getStaticPaths() {
  const res = await getAllPokemonAPI(1118);
  const paths = res.results.map((pokemon) => ({
    params: { name: pokemon.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await getDetailPokemonAPI(params.name);
  const data = await res;
  return { props: { data, params } };
}

export default function Pokemon(props) {
  const { data, isLoading, isError } =
    useQuery(
      `detail/${props.params.name}`,
      () => getDetailPokemonAPI(props.params.name),
      { initialData: props.data,
    });
    
  if (isLoading) return <Loading />;
  if (isError) return <p>Something wrong...</p>;

  // Set Types
  const types = !isEmpty(data.types) && data.types.map((item, idx) => {
    const divider = idx + 1 === data.types.length ? '' : '/';
    return <span className="text-2xl font-bold text-gray-400 mr-2">
      {`${firstUpperCase(item.type.name)} ${divider}`}</span>;
  });

  const name = removeSymbol(data.name);
  const order = extractNumber(data.order);
  const species = !isEmpty(data.species) ? data.species.name : '';

  // Set Image
  const imgArtwork = !isEmpty(data.sprites) &&
    imageConvert(data.sprites.other['official-artwork'].front_default);
  const imgBackDef = !isEmpty(data.sprites) ? imageConvert(data.sprites.back_default) : '';
  const imgFrontDef = !isEmpty(data.sprites) ? imageConvert(data.sprites.front_default) : '';
  const imgFrontShiny = !isEmpty(data.sprites) ? imageConvert(data.sprites.front_shiny) : '';
  const imgBackShiny = !isEmpty(data.sprites) ? imageConvert(data.sprites.back_shiny) : '';
  const imgAppereance = [
    { idx: 1, img: imgBackDef },
    { idx: 2, img: imgFrontDef },
    { idx: 3, img: imgFrontShiny },
    { idx: 4, img: imgBackShiny },
  ];

  return (
    <Layout active="pokedex">
      <main className="py-4 px-7 bg-gray-200">
        <div id="header" className="flex flex-wrap flex-row justify-between items-end">
          <div className="py-9">
            <h4 className="text-2xl font-bold text-gray-400">
              {order}
            </h4>
            <h2 className="text-5xl font-extrabold mb-2 capitalize">
              {name}
            </h2>
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
        
        <div
          id="content"
          className="flex grid grid-cols-1
            md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-7 pb-7 mb-1"
        >
          {/* Left */}
          <div id="left">
            <ListEffects payload={data} />
          </div>

          {/* Right */}
          <div id="right">
            <ListAbility payload={data} />
            <Stats data={data} />
            <Species species={species}/>
            <DetailForm payload={data} />
            <DetailAppereance payload={imgAppereance} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
