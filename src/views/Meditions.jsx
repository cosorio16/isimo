import Header from "../components/ui/Header";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import Pie from "../charts/Pie";
import Calendar from "../components/ui/Calendar";

function Meditions() {
  return (
    <>
      <Header />
      <main className="flex flex-col px-16 lg:px-24 2xl:px-32 py-10 pt-32 gap-10">
        <Calendar />
      </main>
    </>
  );
}

export default Meditions;
