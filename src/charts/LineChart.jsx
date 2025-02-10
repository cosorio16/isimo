import { Chart as ChartJS, defaults } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import useStore from "../store/store";
import timesobj from "../lib/timeslib";

defaults.responsive = true;
defaults.maintainAspectRatio = true;

function LineChart() {
  const {} = useStore();
  const [data, setData] = useState([]);

  return (
    <Line
      data={{
        labels: timesobj.timeDay,
        datasets: [
          {
            label: "Circuito 1",
            data: [24, 19, 21, 32],
            backgroundColor: "rgba(81,54,133,0.2)",
            borderColor: "rgba(81,54,133,1)",
            borderWidth: 2,
            hoverBorderWidth: 4,
          },
          {
            label: "Circuito 2",
            data: [22, 32, 32, 44],
            backgroundColor: "rgba(147,213,10,0.2)",
            borderColor: "rgba(147,213,10,1)",
            borderWidth: 2,
            hoverBorderWidth: 4,
          },
          {
            label: "Circuito 3",
            data: [10, 23, 15, 33],
            backgroundColor: "rgba(255,185,0,0.2)",
            borderColor: "rgba(255,185,0,1)",
            borderWidth: 2,
            hoverBorderWidth: 4,
          },
          {
            label: "Circuito 4",
            data: [31, 12, 12, 12],
            backgroundColor: "rgba(255,105,0,0.2)",
            borderColor: "rgba(255,105,0,1)",
            borderWidth: 2,
            hoverBorderWidth: 4,
          },
        ],
      }}
      options={{
        layout: {
          padding: 20,
        },
        plugins: {
          legend: {
            position: "bottom",
          },
        },
        elements: {
          bar: {
            borderRadius: 10,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
      }}
    />
  );
}

export default LineChart;
