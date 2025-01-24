import Header from "../components/ui/Header";
import DeviceCard from "../components/control/DeviceCard";
import Aside from "../components/ui/Aside";
import Modal from "../components/ui/Modal";
// import { useDragAndDrop } from "@formkit/drag-and-drop/react";

function Control() {
  // const [parent, tapes] = useDragAndDrop([
  //   "Luz Entrada",
  //   "Luz Intermedio",
  //   "Luz Fondo",
  //   "Aviso",
  //   "Reflectores",
  // ]);

  const lights = [
    "Luz Entrada",
    "Luz Intermedio",
    "Luz Fondo",
    "Aviso",
    "Reflectores",
  ];

  const lightObjects = ["1/0/1", "1/0/2", "1/0/3", "1/0/5", "1/0/6"];
  const lightStatus = ["1/1/1", "1/1/2", "1/1/3", "1/1/5", "1/1/6"];

  const airsNames = [
    "Aire Acondicionado 1",
    "Aire Acondicionado 2",
    "Aire Acondicionado 3",
  ];

  const airsObjects = ["3/0/24", "3/1/24", "3/2/24"];
  const airRangesObjects = ["3/0/25", "3/1/25", "3/2/25"];

  const modeDirectionsLights = ["2/0/1", "2/0/2", "2/0/3", "2/0/5", "2/0/6"];
  const modeDirectionsAir = ["2/0/7", "2/0/8", "2/0/9"];

  return (
    <>
      <Header />
      <main className="flex flex-col px-16 lg:px-24 2xl:px-32 py-10 pt-32 gap-10 bg-[#FCFCFC]">
        <section className="border p-5 flex flex-col gap-10 rounded-xl bg-slate-50">
          <h1 className="border-b py-3 px-1 text-3xl text-[#513685] font-medium">
            Luces
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {lights.map((n, i) => (
              <DeviceCard
                key={i}
                name={n}
                icon={0}
                direction={lightObjects[i]}
                status={lightStatus[i]}
                modeDirection={modeDirectionsLights[i]}
              />
            ))}
          </div>
        </section>
        <section className="border p-5 flex flex-col gap-10 rounded-xl bg-slate-50">
          <h1 className="border-b py-3 px-1 text-3xl text-[#513685] font-medium">
            Aires Acondicionados
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {airsNames.map((n, i) => (
              <DeviceCard
                key={i}
                name={n}
                icon={1}
                isAir
                direction={airsObjects[i]}
                status={airsObjects[i]}
                rangeDirection={airRangesObjects[i]}
                modeDirection={modeDirectionsAir[i]}
              />
            ))}
          </div>
        </section>
        <section className="border p-5 flex flex-col gap-10 rounded-xl bg-slate-50">
          <h1 className="border-b py-3 px-1 text-3xl text-[#513685] font-medium">
            Nevera
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <DeviceCard
              direction={"1/0/4"}
              name={"Nevera"}
              icon={2}
              status={"1/1/4"}
              modeDirection={"2/0/4"}
            />
          </div>
        </section>
      </main>
      <Aside />
      <Modal />
    </>
  );
}

export default Control;
