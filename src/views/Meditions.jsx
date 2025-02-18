import Header from "../components/ui/Header";
import MeditionCard from "../components/data/MeditionCard";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import Datacard from "../components/data/Datacard";
import Pie from "../charts/Pie";
import objs from "../lib/objectslib";
import { useEffect, useState } from "react";
import Calendar from "../components/schedule/Calendar";

function Meditions() {
  const [meditions, setMeditions] = useState([]);

  const circuitData = [
    { circuit: "1", data: objs.circuit1 },
    { circuit: "2", data: objs.circuit2 },
    { circuit: "3", data: objs.circuit3 },
    { circuit: "4", data: objs.circuit4 },
  ];

  const meditions1 = [
    { title: "Energia Total", icon: "2", unit: "kWh", data: meditions[0] || 0 },
    { title: "Potencia Total", icon: "2", unit: "W", data: meditions[1] || 0 },
    {
      title: "Factor de Potencia",
      icon: "2",
      unit: "",
      data: meditions[2] || 0,
    },
    {
      title: "Temperatura Recinto",
      icon: "3",
      unit: "°C",
      data: meditions[3] || 0,
    },
  ];

  const meditions2 = [
    {
      title: "Potencia Reactiva",
      icon: "2",
      unit: "Var",
      data: meditions[4] || 0,
    },
    {
      title: "Potencia Aparente",
      icon: "2",
      unit: "VA",
      data: meditions[5] || 0,
    },
    {
      title: "Energia Reactiva",
      icon: "2",
      unit: "kvarh",
      data: meditions[6] || 0,
    },
    { title: "Consumo Aires", icon: "2", unit: "kWh", data: meditions[7] || 0 },
  ];

  // useEffect(() => {
  //   let currentMeditions = [...meditions];
  //   let sum = [];

  //   const createCallback = (index) => (e) => {
  //     currentMeditions[index] = e;
  //     setMeditions([...currentMeditions]);
  //   };

  //   const callbackAir = (index) => (e) => {
  //     sum[index] = e;
  //     let total = sum.reduce((a, b) => a + b);
  //     currentMeditions[7] = total;
  //     setMeditions([...currentMeditions]);
  //   };

  //   const listeners = objs.meditionsObjects.map((o, i) => {
  //     const callback = createCallback(i);
  //     localbus.listen("object", o, callback);
  //     return { o, callback };
  //   });

  //   const listenersAir = objs.airsEnergy.map((o, i) => {
  //     const callback = callbackAir(i);
  //     localbus.listen("object", o, callback);
  //     return { o, callback };
  //   });

  //   return () => {
  //     listeners.forEach(({ o, callback }) => {
  //       localbus.unlisten("object", o, callback);
  //     });
  //     listenersAir.forEach(({ o, callback }) => {
  //       localbus.unlisten("object", o, callback);
  //     });
  //   };
  // }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col px-10 py-10 pt-32 gap-10 bg-zinc-50 min-h-screen text-[#606060]">
        <section className="flex items-center justify-between">
          {/* <Calendar /> */}
          {/* <button className="border px-5 py-2 text-lg font-medium text-white bg-[#513685] w-fit rounded shadow">
            Descargar Datos
          </button> */}
        </section>
        <section className="grid grid-cols-4 gap-5">
          {meditions1.map(({ title, icon, unit, data }) => (
            <Datacard data={data} title={title} icon={icon} unit={unit} />
          ))}
        </section>

        <section className="grid grid-cols-2 gap-5">
          <div className="border bg-white shadow rounded py-5">
            <BarChart />
          </div>
          <div className="border bg-white shadow rounded py-5">
            <LineChart />
          </div>
          <div className="border bg-white shadow rounded py-5">
            <LineChart />
          </div>
          <div className="border bg-white shadow rounded py-5 h-[500px] flex items-center justify-center">
            <Pie />
          </div>
        </section>

        <section className="grid grid-cols-4 gap-5">
          {meditions2.map(({ title, icon, unit, data }) => (
            <Datacard data={data} title={title} icon={icon} unit={unit} />
          ))}
        </section>

        <section className="grid grid-cols-2 gap-5">
          {circuitData.map(({ circuit, data }) => (
            <MeditionCard key={circuit} circuit={circuit} data={data} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Meditions;
