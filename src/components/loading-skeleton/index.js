const { default: CardSkeleton } = require("components/card-skeleton");

const LoadingSkeleton = () => (
  <div
    className="grid grid-cols-2 sm:grid-cols-3
      md:grid-cols-4 lg:grid-cols-5 gap-4 pb-7 mb-7"
  >
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </div>
);

export default LoadingSkeleton;