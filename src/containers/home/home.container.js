import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// Components
import { Layout } from 'components';

// Styles
import styles from './home.module.css';

const Home = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/adventure');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <div id="content" className={styles.content}>
            <div className="mb-8">
              <h1 className="font-extrabold text-5xl mb-4">
                Gotta Catch &apos;Em All!
              </h1>
              <span className="text-gray-500">
                Pokémon, also known as Pocket Monsters in Japan, is a Japanese
                media
                <br />
                franchise managed by the Pokémon Company, a company founded by
                <br />
                Nintendo.
              </span>
            </div>
            <div className="py-4">
              <Link href="/adventure" data-cy="link-adventure">
                <button
                  type="button"
                  className="rounded-3xl bg-blue-500 hover:bg-blue-700 py-2
                    px-8 text-gray-50 focus:outline-none font-extrabold"
                  // onClick={handleStart}
                >
                  Catch Your Pokémon Now
                </button>
              </Link>
            </div>
          </div>

          <div
            id="banner"
            className={`${styles.banner} justify-center align-center flex`}
          >
            <Image
              src="/imgs/charizard.png"
              alt="logo pokemon"
              // layout="responsive"
              width={600}
              height={600}
            />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
