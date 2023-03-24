import { useRouter } from 'next/router';
import Image from 'next/image';

export default function FourOhFour() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 h-full">
      <div className="flex flex-initial flex-row justify-center items-center">
        <Image
          src="/icons/4.png"
          className="iconFour"
          alt="4"
          width="75%"
          height="75%"
        />
        <Image
          src="/icon.png"
          className="iconPokeball"
          alt="poke-ball"
          width="100%"
          height="100%"
        />
        <Image
          src="/icons/4.png"
          className="iconFour"
          alt="4"
          width="75%"
          height="75%"
        />
      </div>
      <div className="text-center md:p-4">
        <h1 className="text-gray-700 font-extrabold text-4xl py-2">Uh-oh!</h1>
        <h3 className="text-gray-500">Something went wrong!</h3>
      </div>
      <div className="py-7">
        <button
          type="button"
          className="flex justify-center items-center py-3 px-6 bg-red-500 rounded-3xl"
          onClick={() => handleBack()}
        >
          <img
            className="mr-2"
            src="../icons/arrow-left-w.png"
            width="20px"
            alt="back"
          />
          <span className="text-gray-100">Go Back Home</span>
        </button>
      </div>
    </div>
  );
}