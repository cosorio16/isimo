import { Chart as ChartJS, defaults } from "chart.js/auto";
import { useEffect, useState, useCallback } from "react";
import { Line } from "react-chartjs-2";
import useStore from "../store/store";
import timesobj from "../lib/timeslib";
import Calendar from "../components/schedule/Calendar";
import { getAllTrends } from "../utils/utils";

defaults.responsive = true;
defaults.maintainAspectRatio = true;

function LineChart({}) {
  const {} = useStore();

  const [data, setData] = useState([]);
  const [resolution, setResolution] = useState([]);
  const [trendId, setTrendId] = useState([]);
  const [allTrends, setAllTrends] = useState([]);

  const [date, setDate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    day: new Date().getDate(),
  });

  const handleSubmitData = useCallback(async () => {
    const body = {
      resolution: resolution,
      dates_curr: {
        start: { year: date.year, day: date.day - 1, month: date.month },
        end: { year: date.year, day: date.day, month: date.month },
      },
      id: trendId,
      dates_prev: {
        start: { year: 2025, day: 1, month: 1 },
        end: { year: 2025, day: 1, month: 3 },
      },
    };

    // try {
    //   await createEvent(body);
    // } catch (error) {
    //   console.error(`Error al obtener datos de tendencias: ${error}`);
    // }
  }, [resolution, date, trendId]);

  useEffect(() => {
    const fetchAllTrends = async () => {
      try {
        const data = await getAllTrends();
        setAllTrends(data);
      } catch (error) {
        console.error(`Error al obtener todas las tendencias: ${error}`);
      }
    };

    fetchAllTrends();
  }, []);

  console.log(allTrends);

  return (
    <div className="h-full w-full flex flex-col p-2">
      <div>
        <Calendar date={date} setDate={setDate} />
      </div>
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
    </div>
  );
}

export default LineChart;
