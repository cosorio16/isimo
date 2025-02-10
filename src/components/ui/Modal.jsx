import { useEffect, useState } from "react";
import useStore from "../../store/store";
import Close from "../../icons/Close";
import DataCard from "../data/Datacard";
import BarChart from "../../charts/BarChart";
import LineChart from "../../charts/LineChart";
import Pie from "../../charts/Pie";
import objs from "../../lib/objectslib";

function Modal() {
  const { modal, toggleModal, isAirDevice, device } = useStore();

  const [dataCards, setDataCards] = useState([]);


  

  // useEffect(() => {
  //   let currentData = [...dataCards];

  //   const createCallback = (index) => (e) => {
  //     currentData[index] = e;
  //     setDataCards([...currentData]);
  //   };

  //   const listeners = objs.modalDirections[device].map((d, i) => {
  //     const callback = createCallback(i);
  //     localbus.listen("object", d, callback);
  //     return { d, callback };
  //   });

  //   return () => {
  //     listeners.forEach(({ d, callback }) => {
  //       localbus.unlisten("object", d, callback);
  //     });
  //   };
  // }, [device]);

  // function convertHours(hours) {
  //   let seconds = Math.floor(hours * 3600);
  //   let days = Math.floor(seconds / (24 * 3600));
  //   seconds %= 24 * 3600;
  //   let hoursLeft = Math.floor(seconds / 3600);
  //   seconds %= 3600;
  //   let minutes = Math.floor(seconds / 60);
  //   seconds %= 60;

  //   if (days >= 1) {
  //     return `${days}d/${hoursLeft}h/${minutes}m/${seconds}s`;
  //   } else {
  //     return `${hoursLeft}h/${minutes}m/${seconds}s`;
  //   }
  // }

  return (
    <div
      className={`fixed inset-0 pt-10 px-5 text-[#606060] select-none ${
        modal
          ? "bg-black bg-opacity-60 z-10"
          : "bg-transparent pointer-events-none"
      } transition-all duration-300`}
    >
      <div
        className={`w-full h-full bg-[#FCFCFC] flex flex-col gap-5 p-5 rounded-t-sm overflow-y-scroll ${
          modal ? "translate-y-0" : "translate-y-full"
        } transition-all duration-500`}
      >
        <button
          onClick={() => {
            toggleModal(false);
          }}
          className="self-end hover:text-red-500 transition-all"
        >
          <Close sizes={25} />
        </button>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-4 gap-4">
            <DataCard
              data={dataCards[0] ? "On" : "Off"}
              icon={"6"}
              unit={""}
              title={"Estado"}
            />
            {isAirDevice ? (
              <DataCard
                data={dataCards[1]}
                icon={"3"}
                unit={"°C"}
                title={"Temperatura"}
              />
            ) : (
              <DataCard
                data={dataCards[1]}
                icon={"0"}
                unit={"h"}
                title={"Tiempo Funcionamiento"}
              />
            )}
            <DataCard
              data={dataCards[2]}
              icon={"2"}
              unit={"W"}
              title={"Potencia Circuito"}
            />

            <DataCard
              data={dataCards[3]}
              icon={"2"}
              unit={"kwH"}
              title={"Consumo Circuito"}
            />
          </div>
          <div className="h-[600px] grid grid-cols-3 gap-10">
            <div className="bg-white flex items-center justify-between h-full border w-full col-span-2">
              <LineChart />
            </div>
            <div className="bg-white flex items-center justify-between border">
              <Pie />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
