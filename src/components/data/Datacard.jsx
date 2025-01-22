import Clock from "../../icons/Clock";
import Dollar from "../../icons/Dollar";
import Energy from "../../icons/Energy";
import Temperature from "../../icons/Temperature";
import NumberFlow from "@number-flow/react";

function Datacard() {
  return (
    <div className="bg-white flex items-center gap-5 border p-4 rounded hover:shadow-md select-none text-[#606060] transition-all duration-300">
      <span className="text-[#513685] p-2 rounded bg-[#513685] bg-opacity-20">
        <Temperature sizes={40} />
      </span>
      <div className="flex flex-col">
        <span className="font-medium">Temperature</span>
        <span className="text-black text-3xl font-bold">
          <NumberFlow value={25} />
          °C
        </span>
      </div>
    </div>
  );
}

export default Datacard;
