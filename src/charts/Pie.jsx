import { Chart as ChartJS } from "chart.js/auto";
import { Pie as PieChart } from "react-chartjs-2";

function Pie() {
  return (
    <PieChart
      options={{
        backgroundColor: [
          "#FF6900",
          "#513685",
          "#93D50A",
          "#E70081",
          "#FFBB3A",
        ],
      }}
      data={{
        labels: ["A", "B", "C"],
        datasets: [
          {
            label: "A",
            data: [20, 20, 40],
          },
        ],
      }}
    />
  );
}

export default Pie;
