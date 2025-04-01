import Clock from "../../icons/Clock";
import Dollar from "../../icons/Dollar";
import Energy from "../../icons/Energy";
import Temperature from "../../icons/Temperature";
import Percentaje from "../../icons/Percentaje";
import Bell from "../../icons/Bell";
import NumberFlow from "@number-flow/react";
import Power from "../../icons/Power";
import Device from "../../icons/Device";

function Datacard({ icon, data, unit, title, color }) {
  const icons = [Clock, Dollar, Energy, Temperature, Bell, Percentaje, Power, Device];
  const Icon = icons[icon];

  return (
    <div className="bg-white flex items-center gap-5 border p-4 rounded hover:shadow-md select-none text-[#606060] transition-all duration-300">
      <span className="text-[#513685] p-2 rounded bg-[#513685] bg-opacity-20">
        {icon && <Icon sizes={40} />}
      </span>
      <div className="flex flex-col">
        <span className="font-medium text-ellipsis max-w-48 truncate text-base">
          {title}
        </span>
        <span className="text-[#222] text-3xl font-bold">
          {typeof data == "number" ? (
            <NumberFlow value={data} suffix={unit} />
          ) : (
            data
          )}
        </span>
      </div>
    </div>
  );
}

export default Datacard;
