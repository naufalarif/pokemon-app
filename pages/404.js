import { useRouter } from 'next/router';

export default function FourOhFour() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 h-4/5">
      <div className="flex flex-initial flex-row justify-center items-center">
        <img 
          src="./icons/4.png"
          className="iconFour"
          alt="4"
        />
        <img 
          src="./icon.png"
          className="iconPokeball"
          alt="poke-ball"
        />
        <img 
          src="./icons/4.png"
          className="iconFour"
          alt="4"
        />
      </div>
      <div className="text-center md:p-4">
        <h1 className="text-gray-700 font-extrabold text-4xl py-2">Uh-oh!</h1>
        <h3 className="text-gray-500">You look lost on your journey!</h3>
      </div>
      <div className="md:py-7">
        <button 
          className="flex justify-center items-center py-3 px-6 bg-red-500 rounded-3xl"
          onClick={handleBack}  
        >
          <img 
            src="../icons/arrow-left-w.png"
            width="20px"
            className="mr-2"
          />
          <span className="text-gray-100">Go Back Home</span>
        </button>
      </div>

      <style jsx> {`
        @media (min-width: 1280px) {
          .iconFour {
            width: 14% !important;
          }
        
          .iconPokeball {
            width: 20% !important;
          }
        }
        
        .iconFour {
          width: 25%;
        }
        
        .iconPokeball {
          width: 35%;
        }
      `} </style>
    </div>
  )
}