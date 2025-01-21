import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart() {
  return (
    <Bar
      data={{
        labels: ["A", "B", "C", "D"],
        datasets: [
          { label: "A", data: [24, 19, 21, 32] },
          { label: "B", data: [10, 23, 15, 33] },
          { label: "C", data: [22, 32, 32, 44] },
          { label: "D", data: [31, 12, 12, 12] },
        ],
      }}
      options={{
        backgroundColor: [
          "#FF6900",
          "#513685",
          "#93D50A",
          "#E70081",
          "#FFBB3A",
        ],
      }}
    />
  );
}

export default BarChart;
