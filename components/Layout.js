import Head from 'next/head';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children, active }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Pokémon App</title>
        <link rel="icon" href="/icon.png" />
        <meta
          name="description"
          content="Pokémon Game App"
        />
      </Head>
      <Navbar active={active}/>
      {children}
      <Footer />
    </div>
  )
}