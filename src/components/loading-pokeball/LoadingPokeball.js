import styles from './loading.module.css';

export default function LoadingPokeball() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-4">
      <div className="mb-1">
        <img
          className={styles.logo}
          src="/icons/pokeball.png"
          alt="pokeball"
        />
      </div>
    </div>
  );
}