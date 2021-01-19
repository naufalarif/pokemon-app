import { useRouter } from 'next/router';
import Image from 'next/image';
import { getDetailPokemon } from '../services/api';
import pokemonTypes from '../utils/pokemonTypes';
import firstUpperCase from '../utils/firstUpperCase';
import CardSkeleton from './CardSkeleton';

export default function CardPokemon({ url }) {
  const router = useRouter();
  const { data, isLoading, isError } = getDetailPokemon(url)

  if (isLoading) return <CardSkeleton />
  if (isError) return <div><span>Something Wrong...</span></div>

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const handleNavigation = () => {
    router.push({
      pathname: `/pokemon/${data.name}`,
      query: { pid: data.id }
    })
  }

  const sprites = data.sprites;
  const img = sprites.other.dream_world.front_default ? sprites.other.dream_world.front_default : '/icon.png';
  const types = data.types.map((item, idx) => {
    const typeCheck = pokemonTypes(item.type.name);
    return (
      <div 
        key={idx} 
        className={`mx-1 mb-1 ${typeCheck} px-3 py-1 rounded-xl font-bold`}
      >
        {firstUpperCase(item.type.name)}
      </div>
    )
  })
  const name = data.name.replace(/[^a-zA-Z ]/g, " ");
  const capitalName = firstUpperCase(name);

  return (
    <div 
      className="bg-gray-100 rounded-xl p-4 mx-2 mb-4 cursor-pointer hover:shadow-2xl"
      onClick={handleNavigation}
    >
      {/* <Image 
        loader={myLoader}
        src={`${img}`}
        alt='Pokemon'
        width={200}
        height={200}
      /> */}
      <img 
        src={`${img}`}
        alt='Pokemon'
        width='200px'
        height='200px'
      />
      <div className="text-center">
        <h4 className="font-extrabold text-xl">{capitalName} - #{data.order}</h4>
        <div className="flex flex-wrap justify-center items-center my-3">{types}</div>
      </div>
    </div>
  )
}