/* eslint-disable no-lonely-if */

// Component
import { ImageLoader } from 'components';

// Utils
import { imageConvert, removeSymbol } from 'utils';

export default function CardAdventure(props) {
  const { payload, setIsLoading, fakeProcess } = props;
  const { dream_world: { front_default: frontDefault } } = payload.sprites.other;
  const img = imageConvert(frontDefault);
  const name = removeSymbol(payload.name);

  const handleGacha = () => {
    setIsLoading(true);

    // Variable Store
    let dataStore = {};
    const arrStore = [];

    // Gacha Calcutation
    const randomNumber = Math.random() * 10;
    const isSuccess = randomNumber > 8;
    const date = new Date();

    // Success Catch
    if (isSuccess) {
      // Set Data
      dataStore = {
        date: date.toString(),
        data: payload,
        status: true,
      };

      // Success Catch And History is Empty
      if (!localStorage.getItem('history')) {
        // Save to History
        arrStore.unshift(dataStore);
        localStorage.setItem('history', JSON.stringify(arrStore));
        
        // Save to Mine
        if (!localStorage.getItem('mine')) {
          localStorage.setItem('mine', JSON.stringify(arrStore));
        } else {
          const mine = JSON.parse(localStorage.getItem('mine'));
          mine.unshift(dataStore);
          localStorage.setItem('mine', JSON.stringify(mine));
        }

        // Fake Loading
        fakeProcess();
      
      // Success Catch But Not Empty
      } else {
        // Set Data
        const history = JSON.parse(localStorage.getItem('history'));
        dataStore = {
          date: date.toString(),
          data: payload,
          status: true,
        };

        // Save to History
        history.unshift(dataStore);
        localStorage.setItem('history', JSON.stringify(history));

        // Save to Mine
        if (!localStorage.getItem('mine')) {
          arrStore.unshift(dataStore);
          localStorage.setItem('mine', JSON.stringify(arrStore));
        } else {
          const mine = JSON.parse(localStorage.getItem('mine'));
          mine.unshift(dataStore);
          localStorage.setItem('mine', JSON.stringify(mine));
        }
        
        // Fake Process
        fakeProcess();
      }

    // Failed Catch
    } else {

      // Failed Catch And History is Empty
      if (!localStorage.getItem('history')) {
        dataStore = {
          date: date.toString(),
          data: payload,
          status: false,
        };
        arrStore.unshift(dataStore);
        localStorage.setItem('history', JSON.stringify(arrStore));

        fakeProcess(false);

      // Failed Catch But Not Empty
      } else {
        const history = JSON.parse(localStorage.getItem('history'));
        dataStore = {
          date: date.toString(),
          data: payload,
          status: false,
        };
        history.unshift(dataStore);
        localStorage.setItem('history', JSON.stringify(history));
        
        fakeProcess(false);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="-mt-8">
        <h4 className="text-3xl font-extrabold text-center text-white capitalize">{name}</h4>
        <ImageLoader
          src={`${img}`}
          alt="pokemon"
          width={300}
          height={300}
        />
      </div>
      
      <div className="text-center absolute bottom-0 left-0 right-0">
          <ImageLoader
            className="cursor-pointer"
            onClick={handleGacha}
            src="/imgs/pokeball.png"
            alt="pokemon"
            layout="fixed"
            width={150}
            height={150}
          />
      </div>
    </div>
  );
}