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
import Head from 'next/head';
import { useSearchPokemon } from 'hooks';

// Static Site Generotor
export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const res = await getAllPokemonAPI('/pokemon?limit=1118&offset=0');
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

export default function Pokemon({ params }) {
  const { pokemon, isError, isLoading } = useSearchPokemon(`detail/${params.name}`, params.name);
    
  if (isLoading) return <Loading />;
  if (isError) return <p>Something wrong...</p>;

  // Set Types
  const types = !isEmpty(pokemon.types) && pokemon.types.map((item, idx) => {
    const divider = idx + 1 === pokemon.types.length ? '' : '/';
    return (
      <span className="text-2xl font-bold text-gray-400 mr-2">
        {`${firstUpperCase(item.type.name)} ${divider}`}
      </span>
    );
  });

  const name = removeSymbol(pokemon.name);
  const order = extractNumber(pokemon.order);
  const species = !isEmpty(pokemon.species) ? pokemon.species.name : '';

  // Set Image
  const imgArtwork = !isEmpty(pokemon.sprites) &&
    imageConvert(pokemon.sprites.other['official-artwork'].front_default);
  const imgBackDef = !isEmpty(pokemon.sprites) ? imageConvert(pokemon.sprites.back_default) : '';
  const imgFrontDef = !isEmpty(pokemon.sprites) ? imageConvert(pokemon.sprites.front_default) : '';
  const imgFrontShiny = !isEmpty(pokemon.sprites) ? imageConvert(pokemon.sprites.front_shiny) : '';
  const imgBackShiny = !isEmpty(pokemon.sprites) ? imageConvert(pokemon.sprites.back_shiny) : '';
  const imgAppereance = [
    { idx: 1, img: imgBackDef },
    { idx: 2, img: imgFrontDef },
    { idx: 3, img: imgFrontShiny },
    { idx: 4, img: imgBackShiny },
  ];

  return (
    <Layout active="pokedex">
      <Head>
        <title>{firstUpperCase(name)} - Pokemon App</title>
      </Head>
      <main className="py-4 px-7 bg-gray-200">
        <div id="header" className="flex flex-wrap flex-row justify-between items-end">
          <div className="py-9">
            <h4 className="text-2xl font-bold text-gray-400">
              {order}
            </h4>
            <h2 className="text-5xl font-extrabold mb-2 capitalize" data-cy="name">
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
          <div id="left" data-cy="effect-list">
            <ListEffects payload={pokemon} />
          </div>

          {/* Right */}
          <div id="right" data-cy="information">
            <ListAbility payload={pokemon} />
            <Stats data={pokemon} />
            <Species name={species}/>
            <DetailForm payload={pokemon} />
            <DetailAppereance payload={imgAppereance} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
