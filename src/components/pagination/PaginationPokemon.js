// Library
import isEmpty from "lodash/isEmpty";

// Components
import { Loading } from 'components';
import { CardPokemonContainer } from 'containers';
import { Waypoint } from "react-waypoint";

export default function PaginationPokemon(props) {
  const { payload, setLimit, isLoading, setIntervalMs } = props;

  const handleLoadMore = () => {
    // if (limit < totalPokemon) {
      setLimit((prevState) => prevState + 5);
      setIntervalMs(1000);
      setTimeout(() => {
        setIntervalMs(false);
      }, 1500);
    // }
  };

  // eslint-disable-next-line consistent-return
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
            className="grid grid-cols-2 sm:grid-cols-3
              md:grid-cols-4 lg:grid-cols-5 gap-4 pb-7 mb-7"
          >
            {payload.map((item) => <CardPokemonContainer payload={item} key={item.name} />)}
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