// 513685
// 93D50A

import NumberFlow from "@number-flow/react";
import Select from "../../components/ui/Select";

function MeditionCard() {
  return (
    <div className="border rounded px-5 py-7 flex flex-col text-[#606060] gap-2 text-lg bg-white shadow hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center border-b py-2">
        <h1 className="text-2xl font-medium">Energia Total - Circuito 1</h1>
        <Select name={"Seleccionar"}/>
      </div>
      <div className="flex justify-between">
        <span className="text-[#513685] font-medium">Fase A </span>
        <span className="text-xl ">
          <NumberFlow value={1342} animated /> kWh
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#513685] font-medium">Fase B </span>
        <span className="text-xl ">
          <NumberFlow value={1342} animated /> kWh
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#513685] font-medium">Fase C </span>
        <span className="text-xl ">
          <NumberFlow value={1342} animated /> kWh
        </span>
      </div>
    </div>
  );
}

export default MeditionCard;
