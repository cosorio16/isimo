import Header from "../components/ui/Header";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import Select from "../components/ui/Select";
import Pie from "../charts/Pie";

function Meditions() {
  return (
    <>
      <Header />
      <main className="flex flex-col px-16 py-10 pt-32 gap-10 bg-zinc-50 min-h-screen">
        <section className="grid grid-cols-2 gap-5">
          <div>
            <input type="text" name="" id="" />
          </div>
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
