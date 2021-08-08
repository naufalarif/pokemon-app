/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

// Components
import { Layout, ModalSuccess, ModalFailure, ModalLoading, ImageLoader } from 'components';
import { CardAdventureContainer } from 'containers';

import { gachaList } from 'utils';

import styles from './adventure.module.css';

export default function Adventure() {
  const [ isSuccess, setIsSuccess ] = useState(false);
  const [ isFailure, setIsFailure ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ current, setCurrent ] = useState(0);

  const data = gachaList();

  const lastIdx = current + 1 !== data.length
    ? 'bg-gray-50 hover:bg-gray-400 hover:bg-opacity-50 cursor-pointer'
    : 'bg-gray-600 cursor-default';
  const firstIdx = current !== 0
    ? 'bg-gray-50 hover:bg-gray-400 hover:bg-opacity-50 cursor-pointer'
    : 'bg-gray-600 cursor-default';

  const handleNext = () => (current + 1 < data.length) && setCurrent((prevState) => prevState + 1);
  const handlePrev = () => (current > 0) && setCurrent((prevState) => prevState - 1);

  const fakeLoadingProcess = (status = true) => {
    setTimeout(() => {
      setIsLoading(false);
      if (status) {
        setIsSuccess(true);
        setIsFailure(false);
      } else {
        setIsSuccess(false);
        setIsFailure(true);
      }
    }, 3000);
  };

  const handleCloseModal = () => {
    setIsSuccess(false);
    setIsFailure(false);
  };
    
  return (
    <Layout active="adventure">
      <div className={styles.adventure}>
        <div className={`p-1 md:p-4 ${firstIdx} bg-opacity-50`} onClick={handlePrev}>
          <ImageLoader
            src="/icons/left.png"
            alt="left"
            width={50}
            height={50}
          />
        </div>
        <div className="-mt-12">
          <CardAdventureContainer
            id={data[current]}
            setIsLoading={setIsLoading}
            setIsFailure={setIsFailure}
            setIsSuccess={setIsSuccess}
            fakeProcess={fakeLoadingProcess}
          />
        </div>
        <div className={`p-1 md:p-4 ${lastIdx} bg-opacity-50`} onClick={handleNext}>
          <ImageLoader
            src="/icons/right.png"
            alt="right"
            width={50}
            height={50}
          />
        </div>
        <ModalSuccess isVisible={isSuccess} onClick={handleCloseModal} />
        <ModalFailure isVisible={isFailure} onClick={handleCloseModal} />
        <ModalLoading isVisible={isLoading} />
      </div>
    </Layout>
  );
}