import ImageLoader from 'components/image-loader';

import styles from './input-search.module.css';

const SearchPokemon = ({ setName, name }) => {
  const onSearch = (e) => {
    if (e) e.preventDefault();
    const value = e.target.value && e.target.value.toLowerCase();
    setName(value);
  };

  const submitSearch = (e) => {
    if (e) e.preventDefault();
  };

  const clearSearch = () => setName('');

  return (
    <div id="search-bar" className="flex justify-center py-2 mt-4">
      <form onSubmit={submitSearch} className={styles.form}>
        <input
          className={styles.search}
          placeholder="Search pokemon..."
          onChange={onSearch}
          value={name}
        />
        {name && (
          <button type="button" onClick={clearSearch} className={styles.clear}>
            <ImageLoader
              src="/icons/delete.png"
              width={18}
              height={18}
            />
          </button>
        )}
        <button onClick={submitSearch} type="submit">
          <ImageLoader
            src="/icons/search.png"
            alt="search"
            width={24}
            height={24}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchPokemon;