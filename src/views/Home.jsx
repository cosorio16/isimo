import Header from "../components/ui/Header";
import DataCard from "../components/data/Datacard";
import BarChart from "../charts/BarChart";
import MeditionCard from "../components/data/MeditionCard";
import Pie from "../charts/Pie";
import LineChart from "../charts/LineChart";
import Popup from "../components/ui/Popup";

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col px-16 lg:px-24 2xl:px-32 py-10 pt-32 gap-10 bg-zinc-50">
        <section className="grid grid-cols-4 gap-5">
          <DataCard
            icon={"1"}
            data={300000}
            unit={""}
            title={"Valor a pagar"}
          />
          <DataCard
            icon={"2"}
            data={3000}
            unit={"kwH"}
            title={"Energia Total"}
          />
          <DataCard
            icon={"3"}
            data={25}
            unit={"°C"}
            title={"Temperatura recinto"}
          />
          <DataCard
            icon={"4"}
            data={9}
            title={"Dispositivos"}
          />
        </section>
        <section className="border p-4 bg-white rounded h-[600px] flex items-center justify-center">
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
          <MeditionCard />
          <MeditionCard />
          <MeditionCard />
          <MeditionCard />
        </section>
      </main>
      <Popup />
    </>
  );
}

export default Home;
