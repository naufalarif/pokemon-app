/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';

import { ImageLoader } from "components";

import { imageConvert, firstUpperCase, extractTypes } from "utils";

const CardEvolution = ({ payload }) => {
  const router = useRouter();

  // Check Images
  const { dream_world: { front_default: frontDefault } } = payload.sprites.other;
  const img = imageConvert(frontDefault);

  // Loop Types
  const types = payload.types.map((item, idx) => {
    const typeCheck = extractTypes(item.type.name);
    return <div className={`mr-3 mb-1 ${typeCheck} px-3 py-1 rounded-xl font-bold`}>
        {firstUpperCase(item.type.name)}
      </div>;
  });

  const handleNavigation = () => {
    router.push({ pathname: `/pokemon/${payload.name}` });
  };

  return (
    <div
      className="
        flex flex-row items-center
        bg-gray-100 rounded-xl py-5 px-4 my-4
        hover:bg-gray-50 cursor-pointer
      "
      onClick={handleNavigation}>
      <ImageLoader src={`${img}`} alt="Pokemon" width={100} height={100} />
      <div className="w-full pl-4">
        <h4 className="capitalize font-extrabold text-gray-500">{payload.name}</h4>
        <div className="flex flex-wrap mb-3">{types}</div>
      </div>
      <div>
        <ImageLoader src="/icons/right.png" alt="arrow" width={30} height={30} />
      </div>
    </div>
  );
};

export default CardEvolution;