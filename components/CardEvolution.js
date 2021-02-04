import Image from 'next/image';
import { useRouter } from 'next/router';

// Utils
import { getEvolutionPokemon, getEvolutionList } from "../services/api"
import { imageConvert } from "../utils/imageUtils";
import { firstUpperCase } from '../utils/textFormat';
import { extractTypes } from '../utils/pokemonTypes';
import isEmpty from 'lodash/isEmpty';

// Components
import LoadingPokeball from './LoadingPokeball';

const CardPokemon = ({ name }) => {
  const router = useRouter();
  const { data, isLoading, isError } = getEvolutionPokemon(name);
  if (isLoading) return <LoadingPokeball />
  if (isError) return <span>This Pokemon doesn't have evolution</span>

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  const handleNavigation = () => {
    router.push({ pathname: `/pokemon/${data.name}` });
  }

  // Check Images
  const { dream_world: { front_default } } = data.sprites.other;
  const img = imageConvert(front_default);

  // Loop Types
  const types = data.types.map((item, idx) => {
    const typeCheck = extractTypes(item.type.name);
    return <div key={idx} className={`mr-3 mb-1 ${typeCheck} px-3 py-1 rounded-xl font-bold`}>
        {firstUpperCase(item.type.name)}
      </div>
  });

  return (
    <div className="
        flex flex-row items-center 
        bg-gray-100 rounded-xl py-5 px-4 my-4
        hover:bg-gray-50 cursor-pointer
      " 
      onClick={handleNavigation}>
      <Image loader={myLoader} src={`${img}`} alt='Pokemon' width={100} height={100} />
      <div className="w-full pl-4">
        <h4 className="capitalize font-extrabold text-gray-500">{data.name}</h4>
        <div className="flex flex-wrap mb-3">{types}</div>
      </div>
      <div>
        <Image loader={myLoader} src='/icons/right.png' alt='arrow' width={30} height={30} />
      </div>
    </div>
  )
}

export default function CardEvolution({ url }) {
  const { dataEvolve, isLoading, isError } = getEvolutionList(url);
  if (isLoading) return <LoadingPokeball />
  if (isError) return <span>This Pokemon doesn't have evolution</span>
  
  // Store Evolution
  let arrEvolve = []
  const chainning = dataEvolve?.chain;

  // Current
  const chain = chainning.species.name;
  arrEvolve.push(chain);

  // First Evolve
  const firstChain = chainning.evolves_to.map(item => item);
  const first = firstChain.map(item => item.species.name);
  const firstEvolve = chainning.evolves_to.length > 0 
    ? arrEvolve.push(first.join()) : null
  
  // Second Evolve
  const secondChain = firstChain.map(item => item.evolves_to);
  const chainMore = chainning.evolves_to.map(chain => chain.evolves_to);
  const second = chainMore.map(item => item.map(item => item.species.name));
  const secondEvolve = secondChain.length > 0 
    ? arrEvolve.push(second.join()) : null

  // Display Evolution
  const displayPokemon = arrEvolve.length > 0 ? arrEvolve.map((item, idx) => 
    !isEmpty(item) ? <CardPokemon key={idx} name={item} /> : null
  ): null

  return (
    <div className="py-2">
      {displayPokemon}
    </div>
  )
}