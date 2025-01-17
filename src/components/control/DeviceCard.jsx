import { useEffect, useState } from "react";

import Toogle from "../ui/Toogle";
import useStore from "../../store/store";
import Schedule from "../../icons/Schedule";
import Chart from "../../icons/Chart";
import Lamp from "../../icons/Lamp";
import Air from "../../icons/Air";
import Ice from "../../icons/Ice";
import NumberFlow from "@number-flow/react";
import Arrow from "../../icons/Arrow";

function DeviceCard({ name, icon, isAir, direction }) {
  const { toggleAside, toggleModal } = useStore();

  const [range, setRange] = useState(16);
  const [active, setActive] = useState(false);

  const icons = [Lamp, Air, Ice];
  const Icon = icons[icon];

  const handleAddRange = () => {
    range < 32 && setRange((range) => range + 1);
  };

  const handleMinusRange = () => {
    range > 16 && setRange((range) => range - 1);
  };

  // useEffect(() => {
  //   const createCallBack = () => (e) => {
  //     setActive(e);
  //     console.log(e)
  //   };

  //   const callback = createCallBack();
  //   localbus.listen("object", `${direction}`, callback);

  //   return () => {
  //     localbus.unlisten("object", address, callback);
  //   };
  // }, []);

  return (
    <div className="flex min-w-56 w-full max-w-full border flex-col gap-3 px-4 py-6 rounded-md shadow hover:shadow-lg cursor-pointer bg-white h-fit text-[#606060] transition-all duration-300">
      <div className="flex items-center justify-between border-b gap-2 pb-5">
        <div className="flex items-center gap-2">
          {Icon && (
            <span className="border aspect-square p-2 rounded-full text-[#513685] bg-lime-100">
              <Icon sizes={30} />
            </span>
          )}
          <h1 className="text-lg 2xl:text-xl text-start text-ellipsis truncate">
            {name}
          </h1>
        </div>
        <Toogle active={active} setActive={setActive} direction={direction} />
      </div>

      {isAir && (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleAddRange()}
                className="rounded border bg-slate-50 text-[#513685] p-2 rotate-[90deg] "
              >
                <Arrow sizes={25} />
              </button>
              <button
                onClick={() => handleMinusRange()}
                className="rounded border bg-slate-50 text-[#513685] p-2 rotate-[270deg] "
              >
                <Arrow sizes={25} />
              </button>
            </div>
            <span className="flex items-center gap-2 border justify-center px-5 py-2 font-medium text-white rounded bg-[#513685] bg-opacity-90">
              <Ice sizes={20} />
              <NumberFlow value={range} />
            </span>
          </div>
          <input
            min={16}
            max={32}
            value={range}
            // onMouseUp={(e) => setRange(Number(e.target.value))}
            onChange={(e) => setRange(Number(e.target.value))}
            type="range"
            name=""
            id=""
            className="w-full"
          />
        </div>
      )}
      <div className="flex justify-between items-center">
        <button
          className="flex items-center gap-2 p-2 rounded-full hover:bg-[#513685] hover:bg-opacity-15 transition-all duration-200 text-sm font-medium"
          onClick={(e) => {
            e.stopPropagation();
            toggleModal(true);
          }}
        >
          <span className="text-[#513685]">
            <Chart sizes={22} />
          </span>
          Ver gráfica
        </button>
        <button
          className="flex items-center gap-2 p-2 rounded-full hover:bg-[#93D50A] hover:bg-opacity-15 transition-all duration-200 text-sm font-medium"
          onClick={(e) => {
            e.stopPropagation();
            toggleAside(true);
          }}
        >
          <span className="text-[#93D50A]">
            <Schedule sizes={22} />
          </span>
          Ver horarios
        </button>
      </div>
    </div>
  );
}

export default DeviceCard;
