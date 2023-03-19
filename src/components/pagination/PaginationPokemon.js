// Library
import isEmpty from "lodash/isEmpty";

// Components
import { Loading } from 'components';
import { CardPokemonContainer } from 'containers';
import { Waypoint } from "react-waypoint";
import LoadingSkeleton from "components/loading-skeleton";

export default function PaginationPokemon(props) {
  const { payload, isLoading, fetchNextPage } = props;

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const _renderWayPoint = () => {
    if (!isLoading) {
      return <Waypoint onEnter={handleLoadMore} />;
    }
    return null;
  };

  const _renderItem = () => {
    if (isEmpty(payload)) return <LoadingSkeleton />;
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
          <LoadingSkeleton />
        </div>
      </>
    );
  };

  return _renderItem();
}