import isEmpty from "lodash/isEmpty";

import { CardType } from "components";

const ListType = (props) => {
  const { payload, type, setType } = props;
  const displayType = !isEmpty(payload) &&
    payload.map((item) => (
      <CardType type={type} setType={setType} payload={item} key={item.name} />
    ));

  const handleClearType = () => setType('');

  return (
    <div id="types" className="flex justify-center items-center p-4 pb-7 mb-1">
      <div className="flex flex-nowrap overflow-auto mr-4">
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

export default ListType;
