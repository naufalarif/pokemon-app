import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Adventure.module.css';
import Layout from '../../components/Layout';
import CardAdventure from '../../components/CardAdventure';

export default function Adventure() {  
  const [id, setId] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const getRandomId = () => {
      let data = [];
      do {
        const randomNumber = Math.floor(Math.random() * 898) + 1;
        if (!data.includes(randomNumber)) {
          data.push(randomNumber)
        }
      } while (data.length < 7)

      setId(data);
    }

    getRandomId();
  }, []);

  const handleNext = () => {
    if (current + 1 < id.length) {
      setCurrent(prevState => prevState + 1)
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(prevState => prevState - 1)
    }
  }

  const lastIdx = current + 1 !== id.length 
    ? 'bg-gray-50 hover:bg-gray-400 hover:bg-opacity-50 cursor-pointer' 
    : 'bg-gray-600 cursor-default';
  const firstIdx = current !== 0 
    ? 'bg-gray-50 hover:bg-gray-400 hover:bg-opacity-50 cursor-pointer' 
    : 'bg-gray-600 cursor-default';

  return (
    <Layout active="adventure">
      <div className={styles.adventure}>
        <div className={`p-1 md:p-4 ${firstIdx} bg-opacity-50`} onClick={handlePrev}>
          <Image 
            src="/icons/left.png"
            alt="left"
            width={50}
            height={50}
          />
        </div>
        <div className="-mt-12">
          <CardAdventure id={id[current]} />
        </div>
        <div className={`p-1 md:p-4 ${lastIdx} bg-opacity-50`} onClick={handleNext}>
          <Image 
            src="/icons/right.png"
            alt="right"
            width={50}
            height={50}
          />
        </div>
      </div>
    </Layout>
  )
}