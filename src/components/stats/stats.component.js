import isEmpty from "lodash/isEmpty";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineController,
  LineElement,
  TimeScale,
  Title,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

// Utils
import { firstUpperCase, removeSymbol } from 'utils';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineController,
  LineElement,
  TimeScale,
  Title,
  Filler,
  Tooltip,
  Legend,
);

const Stats = ({ data }) => {
  const payload = !isEmpty(data) ? data : "";
  const name = !isEmpty(payload) && removeSymbol(payload.name);
  const capitalName = !isEmpty(name) && firstUpperCase(name);
  const baseStat = !isEmpty(payload) && payload.stats.map((item) => item.base_stat);
  const dataset = {
    labels: [ 'HP', 'ATK', 'DEF', 'SP ATK', 'SP DEF', 'SPD' ],
    datasets: [
      {
        label: capitalName,
        data: baseStat,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
        },
        grid: {
        },
        ticks: {
          display: false,
        },
        beginAtZero: true,
        suggestedMax: 140,
        pointLabels: {
          // fontSize: 16,
          font: {
            weight: 'bold',
          },
        },
      },
    },
    elements: {
      radar: {
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        fill: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-3 my-2">
      <div className="text-center py-2 mb-2 border-b-2">
        <span className="text-gray-500 font-bold text-2xl">Stats</span>
      </div>
      <Radar className="chart-container" data={dataset} options={options} />
    </div>
  );
};

export default Stats;