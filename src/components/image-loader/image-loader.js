import isEmpty from 'lodash/isEmpty';
import Image from 'next/image';
import styles from './image-loader.module.css';

const ImageLoader = (props) => {
  const { src, width, height, alt, quality, className, onClick, fill, containerStyles, ...rest } = props;
  
  const customLoader = () => `${src}?w=${width}&q=${quality || 75}`;

  const displayImage = !isEmpty(src) && (
    <div className={`${fill ? styles.container : ''} ${containerStyles}`}>
      <Image
        className={className}
        onClick={onClick}
        loader={customLoader}
        src={src}
        fill={fill}
        width={width}
        height={height}
        alt={`${alt}`}
        {...rest}
      />
    </div>
  );

  return displayImage;
};

export default ImageLoader;
