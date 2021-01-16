import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/adventure');
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <content className={styles.content}>
          <div className="mb-8">
            <h1 className="font-extrabold text-5xl mb-4">
              Gotta Catch 'Em All!
            </h1>
            <span className="text-gray-500">
              Pokemon, also known as Pocket Monsters in Japan, is a Japanese media
              <br/>
              franchise managed by the Pokemon Company, a company founded by
              <br/>
              Nintendo.
            </span>
          </div>
          <div className="py-4">
            <button 
              type="button"
              className="rounded-3xl bg-blue-500 hover:bg-blue-700 py-2 px-8 text-gray-50 focus:outline-none"
              onClick={handleStart}
            >
              Catch Your Pokemon Now
            </button>
          </div>
        </content>
        <div className={`${styles.content} ${styles.banner} justify-center align-center flex`}>
          <img 
            src="/imgs/charizard.png"
            width="92%"
            alt="logo pokemon"
          />
        </div>
      </main>
    </div>
  )
}
