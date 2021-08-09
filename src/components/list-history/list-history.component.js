// Library
import isEmpty from "lodash/isEmpty";

// Components
import { EmptyState, CardHistory } from "components";

const ListHistory = ({ payload, sort }) => {
  const gachaSucces = [];
  const gachaFailure = [];
  const filterBySuccess = !isEmpty(payload) &&
    payload.filter((item) => item.status && gachaSucces.push(item));
  const filterByFailure = !isEmpty(payload) &&
    payload.filter((item) => !item.status && gachaFailure.push(item));

  const displayFilter = sort ? gachaSucces : gachaFailure;
  const displayData = sort === null ? payload : displayFilter;

  const displayHistory = !isEmpty(displayData)
    ? displayData.map((item, idx) => <CardHistory
        key={item.data} idx={idx} payload={item} />)
    : <EmptyState />;

  return (
    <div className="w-11/12 sm:w-3/5 lg:w-3/5 xl:w-2/6 mb-7 pt-7 border-t-2">
      {displayHistory}
    </div>
  );
};

export default ListHistory;
