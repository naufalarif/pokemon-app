/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { useRouter } from 'next/router';

// Utils
import { imageConvert, extractTypes, firstUpperCase, removeSymbol } from "utils";

const CardSearch = ({ payload }) => {
  const router = useRouter();
  const { dream_world: { front_default: frontDefault } } = payload.sprites.other;
  const img = imageConvert(frontDefault);

  // Loop Types
  const types = payload.types.map((item) => {
    const typeCheck = extractTypes(item.type.name);
    return <div className={`mr-3 mb-1 ${typeCheck} px-3 py-1 rounded-xl font-bold`}>
        {firstUpperCase(item.type.name)}
      </div>;
  });
  const name = removeSymbol(payload.name);

  const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`;

  const handleNavigation = () => {
    router.push({ pathname: `/pokemon/${payload.name}` });
  };

  return (
    <div
      className="flex grid grid-cols-2 gap-4
        bg-gray-100 rounded-xl p-4 mx-2 mb-4 cursor-pointer hover:shadow-2xl"
      onClick={handleNavigation}
    >
      <div>
        <Image
          loader={myLoader}
          src={`${img}`}
          alt="Pokemon"
          width={200}
          height={200}
        />
      </div>
      <div>
        <h4 className="font-extrabold text-xl capitalize mb-3">{name} - #{payload.order}</h4>
        <div className="flex flex-wrap mb-3">{types}</div>
        <div>
          <div className="flex items-center mb-2">
            <span className="font-bold text-gray-500 mr-2 w-16">HP</span>
            <div
              className="bg-green-500 text-gray-100 py-1 px-3 rounded-xl"
              style={{ width: `${payload.stats[0].base_stat}px` }}
            >
              <span className="font-extrabold">{payload.stats[0].base_stat}</span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-bold text-gray-500 mr-2 w-16">Attack</span>
            <div
              className="bg-red-500 text-gray-100 py-1 px-3 rounded-xl"
              style={{ width: `${payload.stats[1].base_stat}px` }}
            >
              <span className="font-extrabold">{payload.stats[1].base_stat}</span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-bold text-gray-500 mr-2 w-16">Defense</span>
            <div
              className="bg-blue-500 text-gray-100 py-1 px-3 rounded-xl"
              style={{ width: `${payload.stats[2].base_stat}px` }}
            >
              <span className="font-extrabold">{payload.stats[2].base_stat}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;