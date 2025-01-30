import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Calendar from "../components/schedule/Calendar";
import Select from "../components/ui/Select";

defaults.responsive = true;
defaults.maintainAspectRatio = true;

function BarChart({}) {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <Calendar />
        <Select name={"Seleccionar"} />
      </div>
      {/* <h1 className="text-center text-3xl font-medium uppercase text-[#513685]">
        Titulo
      </h1> */}
      <div className="border m-auto flex items-center justify-center grow max-h-full max-w-[1200px] w-full">
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
    </div>
  );
}

export default BarChart;
