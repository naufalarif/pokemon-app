import { useEffect, useState } from "react";

// Components
import { Layout, ListMyPokemon } from "components";

export default function MyPokemon() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);
  
  function getHistory() {
    const mine = JSON.parse(localStorage.getItem('mine'));
    setData(mine);
  };

  return (
    <Layout active="mypokemon">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-7 text-3xl font-extrabold text-gray-700">My Pokémon</h1>
        <ListMyPokemon payload={data} />
      </div>
    </Layout>
  );
}