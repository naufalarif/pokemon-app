import { useState } from 'react';
import { getPokemonList } from '../services/api';
import CardPokemon from './CardPokemon';
import CardSkeleton from './CardSkeleton';
import Loading from './Loading';

export default function ListPokemon({ url }) {
  const [recentPage, setRecentPage] = useState(1);
  const [page, setPage] = useState('');

  const dynamicUrl = !page ? url : page;

  const { data, isLoading, isError } = getPokemonList(dynamicUrl);

  if (isLoading) return <Loading />
  if (isError) return <div><span>Something wrong...</span></div>

  const handleNextPagination = () => {
    setPage(data.next);
    setRecentPage(prevState => prevState + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevPagination = () => {
    setPage(data.previous);
    setRecentPage(prevState => prevState - 1);
    window.scrollTo(0, 0);
  };

  const totalPage = Math.floor(data.count / 20) + 1;

  const showNextBtn = data.next ? <button onClick={handleNextPagination} className="mx-3 focus:outline-none">Next</button> : null;
  const showPrevBtn = data.previous ? <button onClick={handlePrevPagination} className="mx-3 focus:outline-none">Prev</button> : null;  

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-7 mb-7">
        {/* <CardSkeleton /> */}
        {data.results.map((item, idx) => <CardPokemon key={idx} url={item.url} />)}
        <div>
          <div>
            <span>show {data.results.length}</span>
            <br/>
            <span>{data.count} total pokémon</span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          {showPrevBtn}
          <span>{recentPage} - {totalPage}</span>
          {showNextBtn}
        </div>
      </div>
    </>
  )
}