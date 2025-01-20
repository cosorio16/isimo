import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart() {
  return (
    <Bar
      data={{
        labels: ["A", "B", "C", "D"],
        datasets: [
          { label: "A", data: [24, 19, 21, 32], backgroundColor: "#b5aaf7" },
          { label: "B", data: [10, 23, 15, 33], backgroundColor: "#9f88f1" },
          { label: "C", data: [22, 32, 32, 44], backgroundColor: "#906be9" },
          { label: "D", data: [31, 12, 12, 12], backgroundColor: "#824fdc" },
        ],
      }}
    />
  );
}

export default BarChart;
