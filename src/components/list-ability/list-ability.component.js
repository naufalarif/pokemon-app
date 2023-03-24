import { Loading } from "components";
import { Ability } from "containers";
import isEmpty from "lodash/isEmpty";

const ListAbility = ({ payload }) => {
  const displayAbility = !isEmpty(payload)
    ? payload.abilities.map((item) => <Ability name={item.ability.name}/>)
    : <Loading />;

  return (
    <div className="bg-white rounded-xl p-3 my-2">
      <div className="text-center py-2 mb-3 border-b-2">
        <span className="text-gray-500 font-bold text-2xl cursor-default">Ability</span>
      </div>
      {displayAbility}
    </div>
  );
};

export default ListAbility;