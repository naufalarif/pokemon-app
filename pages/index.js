import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/adventure');
  }

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <content id="content" className={styles.content}>
            <div className="mb-8">
              <h1 className="font-extrabold text-5xl mb-4">
                Gotta Catch 'Em All!
              </h1>
              <span className="text-gray-500">
                Pokémon, also known as Pocket Monsters in Japan, is a Japanese media
                <br/>
                franchise managed by the Pokémon Company, a company founded by
                <br/>
                Nintendo.
              </span>
            </div>
            <div className="py-4">
              <button 
                type="button"
                className="rounded-3xl bg-blue-500 hover:bg-blue-700 py-2 px-8 text-gray-50 focus:outline-none font-extrabold"
                onClick={handleStart}
              >
                Catch Your Pokémon Now
              </button>
            </div>
          </content>

          <div id="banner" className={`${styles.banner} justify-center align-center flex`}>
            <Image 
              src="/imgs/charizard.png"
              alt="logo pokemon"
              width={600}
              height={600}
            />
          </div>
        </main>
      </div>
    </Layout>
  )
}