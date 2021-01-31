import { useEffect, useState } from "react";
import CardHistory from "../../components/CardHistory";
import Layout from "../../components/Layout";
import { dateUtils } from "../../utils/textFormat";

export default function History() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    const getHistory = () => {
      const data = JSON.parse(localStorage.getItem('history'));
      setData(data);
    };

    getHistory();
  }, []);
  
  const toggleSort = (status) => {
    setSort(status);
  };

  const filterData = sort === null ? data 
    : sort ? data.filter(item => item.status === true) 
    : data.filter(item => item.status === false); 

  const history = !data || filterData.length <= 0 
    ? <span>Empty</span> 
    : filterData.map((item, idx) => 
        <CardHistory key={idx} payload={item} />
      );
  const filterSuccess = sort ? 'bg-blue-500 text-gray-100' : 'bg-gray-100 text-blue-500';
  const filterFailed = sort === false ? 'bg-blue-500 text-gray-100' : 'bg-gray-100 text-blue-500';

  return (
    <Layout active="history">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-7 text-3xl font-extrabold text-gray-700">Gacha History</h1>
        <div className="mb-1 flex items-center border-b-2 pb-6">
          <h4 className="font-extrabold text-gray-500 text-xl mr-3">Filter by</h4>
          <button
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
        <div className="md:w-2/6 lg:w-5/12 mb-7 pt-7">
          {history}
        </div>
      </div>
    </Layout>
  )
}