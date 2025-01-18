import Header from "../components/ui/Header";
import DeviceCard from "../components/control/DeviceCard";
import Aside from "../components/ui/Aside";
import Modal from "../components/ui/Modal";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

function Control() {
  const [parent, tapes] = useDragAndDrop([
    "Luz Entrada",
    "Luz Intermedio",
    "Luz Fondo",
    "Aviso",
    "Reflectores",
  ]);

  return (
    <>
      <Header />
      <main className="flex flex-col px-32 py-10 pt-32 gap-10">
        <section className="border p-5 flex flex-col gap-10 rounded-xl bg-slate-50">
          <h1 className="border-l-4 px-2 border-[#513685] py-1 text-3xl text-[#513685] font-medium">Luces</h1>
          <ul ref={parent} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {tapes.map((tape) => (
              <li className="cassette " data-label={tape} key={tape}>
                <DeviceCard d={tape} name={tape} icon={0}/>
              </li>
            ))}
          </ul>
        </section>
        <section className="border p-5 flex flex-col gap-10 rounded-xl bg-slate-50">
          <h1 className="border-l-4 px-2 border-[#513685] py-1 text-3xl text-[#513685] font-medium">Aire Acondicionado</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {[...Array(3)].map((_, i) => (
              <DeviceCard d={i} key={i} icon={1} isAir/>
            ))}
          </div>
        </section>
        <section className="border p-5 flex flex-col gap-10 rounded-xl bg-slate-50">
          <h1 className="border-l-4 px-2 border-[#513685] py-1 text-3xl text-[#513685] font-medium">Nevera</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {[...Array(1)].map((_, i) => (
              <DeviceCard d={i} key={i} icon={2}/>
            ))}
          </div>
        </section>
      </main>
      <Aside />
      <Modal />
    </>
  );
}

export default Control;
