import isEmpty from "lodash/isEmpty";
import { ImageLoader } from "components";
import { imageConvert } from "utils";

const DetailForm = ({ payload }) => {
  const imgDwFrontDef = !isEmpty(payload)
    ? imageConvert(payload.sprites.other.dream_world.front_default)
    : '';

  return (
    <div className="bg-white rounded-xl p-3 my-2">
      <div className="text-center py-2 mb-3 border-b-2">
        <span className="text-gray-500 font-bold text-2xl cursor-default">Form</span>
      </div>
      <div className="flex flex-row items-center ">
        <ImageLoader
          src={`${imgDwFrontDef}`}
          width={100}
          height={100}
          alt="pokemon"
        />
        <div className="ml-4">
          <span className="font-extrabold text-lg text-gray-700 mr-1">
            {payload.weight}
          </span>
          <span>Hg</span>
          <br/>
          <span className="font-extrabold text-lg text-gray-700 mr-1">
            {payload.height}
          </span>
          <span>dm</span>
          <br/>
          <span className="font-extrabold text-lg text-gray-700 mr-1">
            {payload.base_experience}
          </span>
          <span>Exp</span>
        </div>
      </div>
    </div>
  );
};

export default DetailForm;