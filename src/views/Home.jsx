import { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import DataCard from "../components/data/Datacard";
import BarChart from "../charts/BarChart";
import MeditionCard from "../components/data/MeditionCard";
import Pie from "../charts/Pie";
import LineChart from "../charts/LineChart";
import Popup from "../components/ui/Popup";
import useStore from "../store/store";
import objs from "../lib/objectslib";

function Home() {
  const { quantityAmount } = useStore();
  const [amount, setAmount] = useState(0);
  const [energyTotal, setEnergyTotal] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [devices, setDevices] = useState(0);

  const circuitData = [
    { circuit: "1", data: objs.circuit1 },
    { circuit: "2", data: objs.circuit2 },
    { circuit: "3", data: objs.circuit3 },
    { circuit: "4", data: objs.circuit4 },
  ];

  // useEffect(() => {
  //   const callback = (e) => {
  //     setEnergyTotal(e);
  //   };
  //   localbus.listen("object", "33/0/92", callback);
  //   return () => {
  //     localbus.unlisten("object", "33/0/92", callback);
  //   };
  // }, []);

  // useEffect(() => {
  //   const callback = (e) => {
  //     setTemperature(e);
  //   };

  //   localbus.listen("object", "2/1/1", callback);
  //   return () => {
  //     localbus.unlisten("object", "2/1/1", callback);
  //   };
  // }, []);

  // useEffect(() => {
  //   let devicesStatus = [];

  //   const createCallback = (index) => (e) => {
  //     devicesStatus[index] = e ? 1 : 0;
  //     let total = devicesStatus.reduce((a, b) => a + b);
  //     setDevices(total);
  //   };
    
  //   const listeners = objs.selectorSignal.map((o, i) => {
  //     const callback = createCallback(i);
  //     localbus.listen("object", o, callback);
  //     return { o, callback };
  //   });

  //   return () => {
  //     listeners.forEach(({ o, callback }) => {
  //       localbus.unlisten("object", o, callback);
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   setAmount(quantityAmount * energyTotal);
  // }, [quantityAmount, energyTotal]);

  return (
    <>
      <Header />
      <main className="flex flex-col px-16 lg:px-24 2xl:px-32 py-10 pt-32 gap-10 bg-zinc-50">
        <section className="grid grid-cols-4 gap-5">
          <DataCard
            icon={"1"}
            data={amount}
            unit={""}
            title={"Valor a pagar"}
          />
          <DataCard
            icon={"2"}
            data={energyTotal}
            unit={"kwH"}
            title={"Energia Total"}
          />
          <DataCard
            icon={"3"}
            data={temperature}
            unit={"°C"}
            title={"Temperatura recinto"}
          />
          <DataCard icon={"4"} data={devices} title={"Dispositivos"} />
        </section>
        <section className="border p-4 bg-white rounded h-[800px] flex items-center justify-center">
          <BarChart />
        </section>
        <section className="grid gap-5 grid-cols-3">
          <div className="col-span-2 bg-white border rounded p-2">
            <LineChart />
          </div>
          <div className="border rounded bg-white p-2">
            <Pie />
          </div>
        </section>
        <section className="grid grid-cols-2 gap-5">
          {circuitData.map(({ circuit, data }) => (
            <MeditionCard key={circuit} circuit={circuit} data={data} />
          ))}
        </section>
      </main>
      <Popup />
    </>
  );
}

export default Home;
