import isEmpty from 'lodash/isEmpty';
import Image from 'next/image';

const ImageLoader = (props) => {
  const { src, width, height, alt, quality, className, onClick } = props;
  
  const customLoader = () => `${src}?w=${width}&q=${quality || 75}`;

  const displayImage = !isEmpty(src) &&
    <Image
      className={className}
      onClick={onClick}
      loader={customLoader}
      src={src}
      width={width}
      height={height}
      alt={`${alt}`}
    />;

  return displayImage;
};

export default ImageLoader;
