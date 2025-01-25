import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Calendar from "../components/schedule/Calendar";

defaults.responsive = true;
defaults.maintainAspectRatio = true;

function BarChart({ calendar, title }) {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {calendar && <Calendar />}
      {title && (
        <h1 className="text-center text-3xl font-medium uppercase text-[#513685]">
          {title}
        </h1>
      )}
      <Bar
        className="self-center"
        data={{
          labels: ["Enero", "Febrero", "Marzo", "Abril"],
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
              borderRadius: 5,
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
