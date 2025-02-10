import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie as PieChart } from "react-chartjs-2";
import useStore from "../store/store";
import objs from "../lib/objectslib";

function Pie() {
  const { device, isAirDevice } = useStore();
  const [data, setData] = useState([]);
  const [energy, setEnergy] = useState([1, 1]);

  const handleCalculateData = () => {
    if (device > 4 && device < 8) {
      if (device == 5) {
        let consumeTotal = energy[0] - energy[1];
        setData([consumeTotal, energy[1]]);
      } else if (device == 6) {
        let consumeTotal = energy[0] - energy[2];
        setData([consumeTotal, energy[2]]);
      } else if (device == 7) {
        let consumeTotal = energy[0] - energy[3];
        setData([consumeTotal, energy[3]]);
      }
    } else {
      let airsCosume = energy[1] + energy[2] + energy[3];
      setData([energy[0] - airsCosume, airsCosume]);
    }
  };

  // useEffect(() => {
  //   let values = [...energy];
  //   const createCallBack = (index) => (e) => {
  //     values[index] = e;
  //     setEnergy([...values]);
  //   };

  //   const listeners = objs.totalEnergy.map((t, i) => {
  //     const callback = createCallBack(i);
  //     const direction = t.address;
  //     localbus.listen("object", direction, callback);
  //     return { direction, callback };
  //   });

  //   return () => {
  //     listeners.forEach(({ direction, callback }) => {
  //       localbus.unlisten("object", direction, callback);
  //     });
  //   };
  // }, [device]);

  useEffect(() => {
    handleCalculateData();
  }, [energy]);

  console.log(data, energy);

  return (
    <PieChart
      options={{
        backgroundColor: [
          "#93D50A",
          "#513685",
          "#FF6900",
          "#E70081",
          "#FFBB3A",
        ],
      }}
      data={{
        labels: ["Consumo General", "Consumo Circuito"],
        datasets: [
          {
            label: "A",
            data: [data[0], data[1]],
          },
        ],
      }}
    />
  );
}

export default Pie;
