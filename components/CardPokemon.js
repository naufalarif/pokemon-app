import { useRouter } from 'next/router';
import Image from 'next/image';
import { getDetailPokemon } from '../services/api';

export default function CardPokemon({ url }) {
  const router = useRouter();
  const { data, isLoading, isError } = getDetailPokemon(url)

  if (isLoading) return <div><span>Loading...</span></div>
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
  const displayStat = data.stats.map((item, idx) => {
    const stat = item.stat.name.replace(/[^a-zA-Z ]/g, " ")
    return (
      <div className="text-left" key={idx}>
        <span>{stat}: {item.base_stat}</span>
      </div>
    )
  });

  const name = data.name.replace(/[^a-zA-Z ]/g, " ");
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div 
      className="bg-gray-100 rounded-xl p-4 mx-2 mb-4 cursor-pointer hover:shadow-2xl"
      onClick={handleNavigation}
    >
      <Image 
        loader={myLoader}
        src={`${img}`}
        alt='Pokemon'
        width={200}
        height={200}
      />
      <div className="text-center">
        <h4 className="font-extrabold text-xl">{capitalName}</h4>
        {displayStat}
      </div>
    </div>
  )
}