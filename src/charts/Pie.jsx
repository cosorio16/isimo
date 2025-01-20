import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function Pie() {
  return (
    <Doughnut
      options={{ backgroundColor: ["#9f88f1", "#906be9", "#824fdc"] }}
      data={{
        labels: ["A", "B", "C"],
        datasets: [
          {
            label: "A",
            data: [20, 20, 39],
          },
        ],
      }}
    />
  );
}

export default Pie;
