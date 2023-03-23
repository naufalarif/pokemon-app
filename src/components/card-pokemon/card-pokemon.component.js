/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import Image from 'next/image';

import ImageLoader from 'components/image-loader';

// Utils
import { firstUpperCase, removeSymbol, extractTypes, imageConvert } from 'utils';

// import styles from './card-component.module.css';

export default function CardPokemon({ payload }) {
  const router = useRouter();
  const name = removeSymbol(payload.name);

  // Image
  const { dream_world: { front_default: frontDefault } } = payload.sprites.other;
  const img = imageConvert(frontDefault);

  // Loop Types
  const types = payload.types.map((item) => {
    const typeCheck = extractTypes(item.type.name);
    return (
      <div key={item.type.name} className={`mx-1 mb-1 ${typeCheck} px-3 py-1 rounded-xl font-bold`}>
        {firstUpperCase(item.type.name)}
      </div>
    );
  });

  const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`;

  const handleNavigation = () => {
    router.push({ pathname: `/pokemon/${payload.name}` });
  };

  return (
    <div
      className={`bg-gray-100 rounded-xl 
        p-4 mx-2 mb-4 cursor-pointer hover:shadow-2xl`}
      onClick={handleNavigation}
    >
      <ImageLoader
        src={`${img}`}
        alt={`${name}`}
        fill
      />
      <div className="text-center">
        <h4 className="font-extrabold text-xl capitalize">{name} - #{payload.order}</h4>
        <div className="flex flex-wrap justify-center items-center my-3">{types}</div>
      </div>
    </div>
  );
}