import { useEffect, useState } from "react";
import { CardMyPokemon, EmptyState, Layout } from "components";

export default function MyPokemon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getHistory = () => {
      const data = JSON.parse(localStorage.getItem('mine'));
      setData(data);
    };

    getHistory();
  }, []);

  const myPokemonList = !data || data.length <= 0 
  ? <EmptyState mine /> 
  : data.map((item, idx) => <CardMyPokemon key={idx} payload={item} />);

  return (
    <Layout active="mypokemon">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-7 text-3xl font-extrabold text-gray-700">My Pokémon</h1>
        <div className="w-11/12 sm:w-3/5 lg:w-3/5 xl:w-2/6 mb-7 border-t-2 pt-7">
          {myPokemonList}
        </div>
      </div>
    </Layout>
  )
}