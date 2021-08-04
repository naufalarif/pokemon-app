// Library
import isEmpty from "lodash/isEmpty";

// Components
import { Loading } from 'components';
import { CardPokemonContainer } from 'containers';
import { Waypoint } from "react-waypoint";

export default function PaginationPokemon(props) {
  const { payload, limit, setLimit, total, isLoading } = props;
  const handleLoadMore = () => {
    // if (limit < totalPokemon) {
      setLimit((prevState) => prevState + 5);
    // }
  };

  const _renderWayPoint = () => {
    if (!isLoading) {
      return <Waypoint onEnter={handleLoadMore} />;
    }
  };

  const _renderItem = () => {
    if (!isEmpty(payload)) {
      return (
        <>
          <div
            className="grid grid-cols-1 sm:grid-cols-3
              md:grid-cols-4 lg:grid-cols-5 gap-4 pb-7 mb-7"
          >
            {payload.map((item) => <CardPokemonContainer payload={item} />)}
          </div>
          <div>
            {_renderWayPoint()}
            <Loading />
          </div>
        </>
      );
    }

    return <Loading />;
  };

  return _renderItem();
}