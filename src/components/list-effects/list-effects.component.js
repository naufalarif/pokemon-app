import { Loading } from "components";
import { Effects } from "containers";
import isEmpty from "lodash/isEmpty";

const ListEffects = ({ payload }) => {
  const displayEffects = !isEmpty(payload)
    ? payload.types.map((item) => <Effects key={item.type.name} types={item.type.name}/>)
    : <Loading />;

  return displayEffects;
};

export default ListEffects;