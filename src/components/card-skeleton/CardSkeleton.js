import React from "react";
import ContentLoader from "react-content-loader";
import styles from './CardSkeleton.module.css';

const CardSkeleton = (props) => (
  <div
    className={`${ styles.container} overflow-hidden
      justify-center items-center rounded-xl mx-2`}
  >
    <ContentLoader
      speed={2}
      width={272}
      height={416}
      viewBox="9 9 272 416"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="9" y="9" rx="12" ry="12" width="100%" height="100%" />
    </ContentLoader>
  </div>
);

export default CardSkeleton;

