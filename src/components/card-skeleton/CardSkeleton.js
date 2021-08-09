import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => (
  <div className="overflow-hidden justify-center items-center">
    <ContentLoader
      speed={2}
      width={200}
      height={250}
      viewBox="0 0 200 250"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="9" y="9" rx="12" ry="12" width="180" height="230" />
    </ContentLoader>
  </div>
);

export default CardSkeleton;

