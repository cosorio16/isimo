import Header from "../components/ui/Header";
import MeditionCard from "../components/data/MeditionCard";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import Datacard from "../components/data/Datacard";
import Pie from "../charts/Pie";
import objs from "../lib/objectslib";

function Meditions() {
  const circuitData = [
    { circuit: "1", data: objs.circuit1 },
    { circuit: "2", data: objs.circuit2 },
    { circuit: "3", data: objs.circuit3 },
    { circuit: "4", data: objs.circuit4 },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col px-10 py-10 pt-32 gap-10 bg-zinc-50 min-h-screen text-[#606060]">
        <section className="flex items-center justify-between">
          <button className="border px-5 py-2 text-lg font-medium text-white bg-[#513685] w-fit rounded shadow">
            Descargar Datos
          </button>
        </section>
        <section className="grid grid-cols-4 gap-5">
          <Datacard
            data={3000}
            title={"Eneria Total"}
            icon={"2"}
            unit={"Kwh"}
          />
          <Datacard
            data={3000}
            title={"Potencia Total"}
            icon={"2"}
            unit={"W"}
          />
          <Datacard
            data={3000}
            title={"Factor de Potencia"}
            icon={"2"}
            unit={""}
          />
          <Datacard
            data={10}
            title={"Temperatura Recinto"}
            icon={"3"}
            unit={"°C"}
          />
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
          <Datacard
            data={3000}
            title={"Potencia Reactiva"}
            icon={"2"}
            unit={"Var"}
          />
          <Datacard
            data={3000}
            title={"Potencia Aparente"}
            icon={"2"}
            unit={"VA"}
          />
          <Datacard
            data={3000}
            title={"Energia Reactiva"}
            icon={"2"}
            unit={"kvarh"}
          />
          <Datacard
            data={3000}
            title={"Consumo Aires"}
            icon={"2"}
            unit={"Kwh"}
          />
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

// tiempos de funcionamiento
// equipos trabajando en auto
// temperatura de cada aire
// temperatura del lugar
// voltaje fase a b c #1 GENERAL 33/0/1,2,3
// potencia total
// energia total

// circuito 1, 2, 3, 4 x ABC
// corriente
// potencia
// potencia reactiva
// factor de potencia
// potencia aparente
// energia
// energia reactiva hora
