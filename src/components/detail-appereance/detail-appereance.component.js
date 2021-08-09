import { ImageLoader } from "components";

const DetailAppereance = ({ payload }) => {
  const displayAppereance =
    payload.map((item) => <ImageLoader
      key={item.idx} src={item.img} width="100px" height="100px" alt="pokemon"/>);
  
  return (
    <div className="flex flex-col bg-white rounded-xl p-3 my-2">
      <div className="text-center py-2 mb-3 border-b-2">
        <span className="text-gray-500 font-bold text-2xl cursor-default">
          Appereance
        </span>
      </div>
      <div className="flex flex-row">
        {displayAppereance}
      </div>
    </div>
  );
};

export default DetailAppereance;