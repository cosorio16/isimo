import Header from "../components/ui/Header";
import Search from "../icons/Search";
import MeditionCard from "../components/data/MeditionCard";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import Datacard from "../components/data/Datacard";
import Select from "../components/ui/Select";
import Pie from "../charts/Pie";

function Meditions() {
  return (
    <>
      <Header />
      <main className="flex flex-col px-16 py-10 pt-32 gap-10 bg-zinc-50 min-h-screen text-[#606060]">
        <section className="flex items-center justify-between">
          <div className="flex border items-center gap-2 px-5 py-2 w-96 rounded bg-white ring-2 ring-transparent hover:ring-[#513685] transition-all duration-300 focus-within:ring-[#513685]">
            <Search sizes={25} />
            <input
              type="text"
              placeholder="Buscar"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>

          <button className="border px-5 py-2 text-lg font-medium text-white bg-[#513685] w-fit rounded shadow">
            Descargar Datos
          </button>
        </section>
        <section className="grid grid-cols-4 gap-5">
          <Datacard data={3000} title={"Titulo"} icon={"2"} />
          <Datacard data={3000} title={"Titulo"} icon={"2"} />
          <Datacard data={3000} title={"Titulo"} icon={"2"} />
          <Datacard data={3000} title={"Titulo"} icon={"2"} />
          <Datacard data={3000} title={"Titulo"} icon={"2"} />
          <Datacard data={3000} title={"Titulo"} icon={"2"} />
          <Datacard data={3000} title={"Titulo"} icon={"2"} />
          <Datacard data={3000} title={"Titulo"} icon={"2"} />
        </section>

        <section className="grid grid-cols-2 gap-5">
          <div className="border bg-white shadow rounded py-5">
            <BarChart />
          </div>
          <div className="border bg-white shadow rounded py-5">
            <LineChart />
          </div>
          <div className="border bg-white shadow rounded py-5">
            <BarChart />
          </div>
          <div className="border bg-white shadow rounded py-5">
            <LineChart />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-5">
          <MeditionCard />
          <MeditionCard />
          <MeditionCard />
          <MeditionCard />
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
