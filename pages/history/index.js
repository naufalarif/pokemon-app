import { useEffect, useState } from "react";

// Components
import { Layout, ListHistory } from "components";

export default function History() {
  const [ data, setData ] = useState([]);
  const [ sort, setSort ] = useState(null);

  const filterSuccess = sort ? 'bg-blue-500 text-gray-100' : 'bg-gray-100 text-blue-500';
  const filterFailed = sort === false ? 'bg-blue-500 text-gray-100' : 'bg-gray-100 text-blue-500';

  useEffect(() => {
    getHistory();
  }, []);

  function getHistory() {
    const history = JSON.parse(localStorage.getItem('history'));
    if (history) {
      setData(history);
    }
  };

  const toggleSort = (status) => setSort(status);

  return (
    <Layout active="history">
      <div className="flex flex-col items-center">
        <h1 className="py-7 text-3xl font-extrabold text-gray-700">Gacha History</h1>
        <div className="flex flex-wrap items-center mb-1 pb-6 px-4">
          <div>
            <h4 className="font-extrabold text-gray-500 text-xl mr-3">Filter by</h4>
          </div>
          <div>
            <button
              type="button"
              className={`
                px-5 py-2 rounded-3xl font-bold
                ${filterSuccess} mr-4
                hover:bg-blue-500 hover:text-gray-100
                focus:outline-none cursor-pointer`}
              onClick={() => toggleSort(true)}
            >
              Success
            </button>
            <button
              type="button"
              className={`
                px-5 py-2 rounded-3xl font-bold
                ${filterFailed} mr-4
                hover:bg-blue-500 hover:text-gray-100
                focus:outline-none cursor-pointer`}
              onClick={() => toggleSort(false)}
            >
              Failed
            </button>
            <button
              type="button"
              className={`
                px-4 py-2 rounded-3xl font-bold
                bg-red-200 text-red-500
                hover:bg-red-500 hover:text-gray-100
                focus:outline-none cursor-pointer`}
              onClick={() => toggleSort(null)}
            >
              X
            </button>
          </div>
        </div>
        <ListHistory payload={data} sort={sort} />
      </div>
    </Layout>
  );
}