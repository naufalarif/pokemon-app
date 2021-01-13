import Head from 'next/head';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Pokemon App</title>
        <link rel="icon" href="/icon.png" />
        <meta
          name="description"
          content="Pokemon Game App"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}