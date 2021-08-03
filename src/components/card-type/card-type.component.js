/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { firstUpperCase } from "utils";

const CardType = ({ payload, type, setType }) => {
  const typeName = firstUpperCase(payload.name);
  const active = type === payload.name ? 'bg-blue-500 text-gray-100' : 'bg-gray-100 text-blue-500';

  const handleSetTypeURL = () => {
    setType(payload.name);
  };

  return <div
    className={`
      ${active} px-5 py-2 mr-4 rounded-3xl font-bold
      hover:bg-blue-500 hover:text-gray-100
      focus:outline-none cursor-pointer`}
      onClick={handleSetTypeURL}
    >
      <span>{typeName}</span>
    </div>;
};

export default CardType;