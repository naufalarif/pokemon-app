import isEmpty from "lodash/isEmpty";

import { CardType } from "components";

const Categories = (props) => {
  const { payload, type, setType } = props;
  const displayType = !isEmpty(payload) &&
    payload.map((item) => <CardType type={type} setType={setType} payload={item} />);

  const handleClearType = () => {
    setType('');
  };

  return (
    <div id="types" className="flex justify-center items-center p-4 pb-7 mb-1">
      <div className="flex flex-nowrap overflow-auto w-10/12 md:w-4/5 lg:w-3/5 mr-4">
        {displayType}
      </div>
      <div>
        <button
          type="button"
          onClick={handleClearType}
          className="
            px-2 py-0.5 rounded-full
            bg-red-400 text-gray-100
            hover:bg-red-500 hover:text-gray-100
            focus:outline-none cursor-pointer"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default Categories;
