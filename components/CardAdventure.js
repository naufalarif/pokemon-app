import { useState } from 'react';
import Image from 'next/image';

// Utils
import { getPokemonById } from "../services/api";
import { firstUpperCase, removeSymbol } from '../utils/textFormat';

// Component
import LoadingPokeball from './LoadingPokeball';
import { Modal } from 'antd';


const FailedState = () => {
  return (
    <>
      <Image 
        src='/icon.png'
        width={200}
        height={200}
        alt='pikachu'
      />
      <h3 className="text-3xl font-extrabold text-red-400">Failed</h3>
      <span className="text-gray-700 text-lg font-bold">The Pokemon has running away!</span>
      <p className="text-gray-400 text-lg">Try to catch it again.</p>
    </>
  )
}

const SuccessState = () => {
  return (
    <>
      <Image 
        src='/icon.png'
        width={200}
        height={200}
        alt='pikachu'
      />
      <h3 className="text-3xl font-extrabold text-green-400">Success</h3> 
      <span className="text-gray-700 text-lg font-bold">You catch it!</span>
      <p className="text-gray-400 text-lg">Check your pokemon at My Pokemon.</p>
    </>
  )
}

export default function CardAdventure({ id }) {
  const { data, isLoading, isError } = getPokemonById(id);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(null);
  const [loading, setLoading] = useState(false);
  
  if (isLoading) return <LoadingPokeball />
  if (isError) return <span>Something wrong...</span>

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const handleGacha = () => {
    setIsModalVisible(true);
    setLoading(true);

    // Store Data
    let dataStore = {};
    let arrStore = [];

    // Gacha Calcutation
    const randomNumber = Math.random() * 10;
    const successRate = randomNumber > 8;
    const date = new Date();

    // Success Catch
    if (successRate) {
      // Set Data
      dataStore = { 
        date: date.toString(), 
        data: data.name, 
        status: true 
      };

      // Success Catch And History is Empty
      if (!localStorage.getItem('history')) {
        // Save to History
        arrStore.push(dataStore);
        localStorage.setItem('history', JSON.stringify(arrStore));
        
        // Save to Mine
        if (!localStorage.getItem('mine')) {
          localStorage.setItem('mine', JSON.stringify(arrStore));
        } else {
          const mine = JSON.parse(localStorage.getItem('mine'));
          mine.push(dataStore);
          localStorage.setItem('mine', JSON.stringify(mine));
        }

        // Fake Loading
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
          setFailed(false);
        }, 3000);
      
      // Success Catch But Not Empty
      } else {
        // Set Data
        const history = JSON.parse(localStorage.getItem('history'));
        dataStore = {
          date: date.toString(),
          data: data.name,
          status: true
        }

        // Save to History
        history.push(dataStore);
        localStorage.setItem('history', JSON.stringify(history));

        // Save to Mine
        if (!localStorage.getItem('mine')) {
          arrStore.push(dataStore);
          localStorage.setItem('mine', JSON.stringify(arrStore));
        } else {
          const mine = JSON.parse(localStorage.getItem('mine'));
          mine.push(dataStore);
          localStorage.setItem('mine', JSON.stringify(mine));
        }
        
        // Fake Loading
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
          setFailed(false);
        }, 3000);
      }

    // Failed Catch
    } else {

      // Failed Catch And History is Empty
      if (!localStorage.getItem('history')) {
        dataStore = { 
          date: date.toString(), 
          data: data.name, 
          status: false 
        };
        arrStore.push(dataStore);
        localStorage.setItem('history', JSON.stringify(arrStore));

        setTimeout(() => {
          setLoading(false);
          setFailed(true);
          setSuccess(false);
        }, 3000);
      
      // Failed Catch But Not Empty
      } else {
        const history = JSON.parse(localStorage.getItem('history'));
        dataStore = {
          date: date.toString(),
          data: data.name,
          status: false
        }
        history.push(dataStore);
        localStorage.setItem('history', JSON.stringify(history));
        
        setTimeout(() => {
          setLoading(false);
          setFailed(true);
          setSuccess(false);
        }, 3000);
      }
    }
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Check Image
  const { dream_world: { front_default } } = data.sprites.other;
  const img = front_default ? front_default : '/icon.png';

  const modalDesc = success && !failed ? <SuccessState /> : <FailedState />
  const showDesc = loading ? <LoadingPokeball /> : modalDesc
  const modalBtn = success && !loading 
    ? <button 
        onClick={handleCloseModal}
        className="px-4 py-2 rounded-xl bg-red-500 text-gray-50 font-bold"
      >
        Close
      </button> 
    : failed && !loading 
    ? <button 
        onClick={handleCloseModal}
        className="px-4 py-2 rounded-xl bg-red-500 text-gray-50 font-bold"
      >
        Try Again
      </button>
    : null;

  return ( 
    <div className="flex flex-col justify-center">
      <h4 className="text-3xl font-extrabold text-center text-white">{firstUpperCase(removeSymbol(data.name))}</h4>
      <div>
        <Image 
          loader={myLoader} 
          src={`${img}`} 
          alt='pokemon' 
          width={300} 
          height={300} 
        />
      </div>
      <div className="text-center absolute bottom-0 left-0 right-0">
        <Image 
          className="cursor-pointer"
          onClick={handleGacha}
          src='/icon.png' 
          alt='pokemon' 
          width={100} 
          height={100} 
        />
      </div>

      <Modal visible={isModalVisible} closable={false} footer={null}>
        <div className="flex flex-col items-center text-center mb-7">
          {showDesc}
        </div>
        <div className="text-center">
          {modalBtn}
        </div>
      </Modal>
    </div>
  )
}