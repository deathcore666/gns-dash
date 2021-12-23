import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { GetDeclarationTinCountInterface } from "../../shared/interfaces/dataCardInterface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "x" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

export const BarChartEdeclaration = () => {
  const [barChart, setBarChart] = useState<GetDeclarationTinCountInterface>();

  useEffect(() => {
    async function barChartEdeclaration() {
      const res = await axios.get(
        "http://10.111.15.123:5085/api/Edeclaration/GetDeclarationTinCount"
      );
      setBarChart(res.data);
    }

    barChartEdeclaration();
  }, []);

  const labels: Number[] = [];
  barChart?.map((o) =>
    labels.includes(o.receiveYear) ? null : labels.push(o.receiveYear)
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Количество отчетов за год",
        data: barChart?.map((obj) => obj.sumTinCount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
