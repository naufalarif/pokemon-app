import Image from 'next/image';

// Utils
import { getHistoryGacha } from "../services/api";
import { dateUtils, firstUpperCase, removeSymbol } from "../utils/textFormat";
import { extractTypes } from '../utils/pokemonTypes';

// Component
import CardSkeleton from "./CardSkeleton";
import { imageConvert } from '../utils/imageUtils';

export default function CardHistory({ payload }) {
  const { data, isLoading, isError } = getHistoryGacha(payload.data);
  if (isLoading) return <CardSkeleton />
  if (isError) return <span>Something wrong...</span>

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  // Check Image
  const { dream_world: { front_default } } = data.sprites.other;
  const img = imageConvert(front_default)

  // Loop Types
  const types = data.types.map((item, idx) => {
    const typeCheck = extractTypes(item.type.name);
    return <div key={idx} className={`mx-1 mb-1 ${typeCheck} px-3 py-1 rounded-xl font-bold`}>
        <span>{firstUpperCase(item.type.name)}</span>
      </div>
  });

  const name = removeSymbol(data.name);
  const capitalName = firstUpperCase(name);
  const status = payload.status 
    ? <div className="-mt-10 lg:mt-0"><span className="font-extrabold text-xl text-green-500">Success</span></div>
    : <div className="-mt-10 lg:mt-0"><span className="font-extrabold text-xl text-red-600">Failed</span></div>

  return (
    <div className="flex grid relative
      grid-cols-1 lg:grid-cols-3
      gap-2 md:gap-4 pb-2 mb-1
      bg-gray-100 rounded-xl p-4 mx-2 mb-4 cursor-pointer hover:shadow-2xl
    ">
      <div className="lg:hidden absolute top-1 right-1">
        <h4 className="font-extrabold text-gray-500 text-sm mr-2">{dateUtils(payload.date)}</h4>
      </div>
      <div className="text-center mt-4 md:mt-0">
        <Image 
          loader={myLoader}
          src={`${img}`}
          alt='Pokemon'
          width={100}
          height={100}
        />
      </div>
      <div className="text-center">
        <h4 className="font-extrabold text-xl">{capitalName} - #{data.order}</h4>
        <div className="flex flex-wrap justify-center my-3">{types}</div>
      </div>
      <div className="text-center mb-3">
        <h4 className="invisible lg:visible font-extrabold text-gray-500 text-sm mr-2">{dateUtils(payload.date)}</h4>
        {status}
      </div>
    </div>
  )
}