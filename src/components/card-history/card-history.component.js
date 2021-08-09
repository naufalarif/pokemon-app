// Components
import { ImageLoader } from 'components';

// Utils
import { dateUtils, removeSymbol, extractTypes, imageConvert } from "utils";

export default function CardHistory({ payload }) {
  const { data } = payload;

  // Check Image
  const { dream_world: { front_default: frontDefault } } = data.sprites.other;
  const img = imageConvert(frontDefault);

  // Loop Types
  const types = data.types.map((item) => {
    const typeCheck = extractTypes(item.type.name);
    return (
      <div
        key={item.type.name}
        className={`mx-1 mb-1 
        ${typeCheck} px-3 py-1 rounded-xl font-bold`}
      >
        <span className="capitalize">{item.type.name}</span>
      </div>
    );
  });

  const name = removeSymbol(data.name);
  const displayStatus = payload.status
    ? <div className="-mt-10 lg:mt-0">
        <span className="font-extrabold text-xl text-green-500">
          Success
        </span>
      </div>
    : <div className="-mt-10 lg:mt-0">
        <span className="font-extrabold text-xl text-red-600">
          Failed
        </span>
      </div>;

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
        <ImageLoader
          src={`${img}`}
          alt="Pokemon"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center">
        <h4 className="font-extrabold text-xl capitalize">{name} - #{data.order}</h4>
        <div className="flex flex-wrap justify-center my-3">{types}</div>
      </div>
      <div className="text-center mb-3">
        <h4 className="invisible lg:visible font-extrabold text-gray-500 text-sm mr-2">
          {dateUtils(payload.date)}
        </h4>
        {displayStatus}
      </div>
    </div>
  );
}