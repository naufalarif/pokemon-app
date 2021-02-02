import Image from 'next/image';
import { useRouter } from 'next/router';

// Utils
import { searchPokemonByName } from "../services/api";
import { imageConvert } from "../utils/imageUtils";
import { extractTypes } from "../utils/pokemonTypes";
import { firstUpperCase, removeSymbol } from "../utils/textFormat";

// Components
import Loading from "./Loading";

export default function SearchPokemon({ name }) {
  const { data, isLoading, isError } = searchPokemonByName(name);
  const router = useRouter();

  if (isLoading) return <Loading />
  if (isError) return <span>{`Oops.. ${firstUpperCase(name)} not found`}</span>

  const handleNavigation = () => {
    router.push({ pathname: `/pokemon/${data.name}` });
  }

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  // Check Image
  const { dream_world: { front_default } } = data.sprites.other;
  const img = imageConvert(front_default)

  // Loop Types
  const types = data.types.map((item, idx) => {
    const typeCheck = extractTypes(item.type.name);
    return <div key={idx} className={`mr-3 mb-1 ${typeCheck} px-3 py-1 rounded-xl font-bold`}>
        {firstUpperCase(item.type.name)}
      </div>
  });

  const capitalName = firstUpperCase(removeSymbol(data.name));

  return (
    <div className="flex grid grid-cols-2 gap-4
      bg-gray-100 rounded-xl p-4 mx-2 mb-4 cursor-pointer hover:shadow-2xl" 
      onClick={handleNavigation}
    >
      <div>
        <Image 
          loader={myLoader}
          src={`${img}`}
          alt='Pokemon'
          width={200}
          height={200}
        />
      </div>
      <div>
        <h4 className="font-extrabold text-xl mb-3">{capitalName} - #{data.order}</h4>
        <div className="flex flex-wrap mb-3">{types}</div>
        <div>
          <div className="flex items-center mb-2">
            <span className="font-bold text-gray-500 mr-2 w-16">HP</span> 
            <div className="bg-green-500 text-gray-100 py-1 px-3 rounded-xl" style={{ width: `${data.stats[0].base_stat}px` }}>
              <span className="font-extrabold">{data.stats[0].base_stat}</span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-bold text-gray-500 mr-2 w-16">Attack</span> 
            <div className="bg-red-500 text-gray-100 py-1 px-3 rounded-xl" style={{ width: `${data.stats[1].base_stat}px` }}>
              <span className="font-extrabold">{data.stats[1].base_stat}</span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-bold text-gray-500 mr-2 w-16">Defense</span> 
            <div className="bg-blue-500 text-gray-100 py-1 px-3 rounded-xl" style={{ width: `${data.stats[2].base_stat}px` }}>
              <span className="font-extrabold">{data.stats[2].base_stat}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}