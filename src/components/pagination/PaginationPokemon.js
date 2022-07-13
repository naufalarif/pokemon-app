// Library
import isEmpty from "lodash/isEmpty";

// Components
import { Loading } from 'components';
import { CardPokemonContainer } from 'containers';
import { Waypoint } from "react-waypoint";
import { useEffect } from "react";

export default function PaginationPokemon(props) {
  const { payload, limit, setLimit, total, isLoading, setIntervalMs } = props;

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