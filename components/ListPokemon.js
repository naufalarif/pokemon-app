import { useState } from 'react';
import { getPokemonList } from '../services/api';
import CardPokemon from './CardPokemon';

export default function ListPokemon({ url }) {
  const [recentPage, setRecentPage] = useState(1);
  const [page, setPage] = useState('');

  const dynamicUrl = !page ? url : page;

  const { data, isLoading, isError } = getPokemonList(dynamicUrl);

  if (isLoading) return <div><span>Loading...</span></div>
  if (isError) return <div><span>Something wrong...</span></div>

  const handleNextPagination = () => {
    setPage(data.next);
    setRecentPage(prevState => prevState + 1);
  };

  const handlePrevPagination = () => {
    setPage(data.previous);
    setRecentPage(prevState => prevState - 1);
  };

  const totalPage = Math.floor(data.count / 20) + 1;

  const showNextBtn = data.next ? <button onClick={handleNextPagination} className="mx-3">Next</button> : null;
  const showPrevBtn = data.previous ? <button onClick={handlePrevPagination} className="mx-3">Prev</button> : null;  

  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-5  gap-4 px-4 pb-7 mb-7">
        {data.results.map((item, idx) => <CardPokemon key={idx} url={item.url} />)}
        <div>
          <div>
            <span>show {data.results.length}</span>
            <br/>
            <span>{data.count} total pokemon</span>
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