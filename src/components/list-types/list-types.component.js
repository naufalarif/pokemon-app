import { Loading } from "components";
import { Types } from "containers";
import isEmpty from "lodash/isEmpty";

const ListTypes = ({ payload }) => {
  const displayAbility = !isEmpty(payload)
    ? payload.types.map((item) => <Types key={item.type.name} types={item.type.name}/>)
    : <Loading />;

  return displayAbility;
};

export default ListTypes;