import { Chart as ChartJS, defaults } from "chart.js/auto";
import { useEffect, useState, useCallback } from "react";
import { Line } from "react-chartjs-2";
import useStore from "../store/store";
import timesobj from "../lib/timeslib";
import Calendar from "../components/schedule/Calendar";
import { getAllTrends, getTrendData } from "../utils/utils";
import objs from "../lib/objectslib";

defaults.responsive = true;
defaults.maintainAspectRatio = true;

function LineChart({}) {
  const { device, nameDevice } = useStore();

  const [data, setData] = useState([]);
  const [resolution, setResolution] = useState(86400);
  const [trendId, setTrendId] = useState(131);
  const [allTrends, setAllTrends] = useState([]);

  const [date, setDate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    day: new Date().getDate(),
  });

  const handleSubmitData = useCallback(async () => {
    const body = {
      // resolution: resolution,
      dates_curr: {
        start: { year: date.year, day: date.day, month: date.month + 1 },
        end: { year: date.year, day: date.day + 1, month: date.month + 1 },
      },
      id: trendId,
      dates_prev: {
        start: { year: 2025, day: 1, month: 1 },
        end: { year: 2025, day: 1, month: 3 },
      },
    };

    try {
      const data = await getTrendData(body);
      setData(data);
    } catch (error) {
      console.error(`Error al obtener datos de tendencias: ${error}`);
    }
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

  useEffect(() => {
    let obj = localbus.encodega(`${objs.modalLineChart[device]}`);
    let id = allTrends?.data?.filter((d) => d.object == obj)[0]?.id;
    setTrendId(id);
  }, [allTrends, device]);

  useEffect(() => {
    handleSubmitData();
  }, [trendId]);

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
              data: data?.current?.data,
              backgroundColor: "rgba(81,54,133,0.2)",
              borderColor: "rgba(81,54,133,1)",
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
