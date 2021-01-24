import { useEffect, useState } from 'react';
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

  const lastIdx = current + 1 !== id.length ? 'bg-white hover:shadow-2xl' : 'bg-gray-500 cursor-default';
  const firstIdx = current !== 0 ? 'bg-white hover:shadow-2xl' : 'bg-gray-500 cursor-default';

  return (
    <Layout active="adventure">
      <div className={styles.adventure}>
        <div className="p-4">
          <button 
            type="button"
            onClick={handlePrev} 
            className={`${firstIdx} rounded-3xl py-3 px-2 font-bold`}>
              Prev
          </button>
        </div>
        <div>
          <CardAdventure id={id[current]} />
        </div>
        <div className="p-4">
          <button 
            type="button"
            onClick={handleNext} 
            className={`${lastIdx} rounded-3xl py-3 px-2 font-bold`}>
              Next
          </button>
        </div>
      </div>
    </Layout>
  )
}