import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img 
          src="/imgs/logo.png"
          width="50%"
          alt="logo pokemon"
        />
        <h1 className={styles.title}>
          Gotta Catch em all!
        </h1>
      </main>
    </div>
  )
}
