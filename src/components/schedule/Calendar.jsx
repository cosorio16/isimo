import { useState } from "react";
import Schedule from "../../icons/Schedule";
import ArrowRounded from "../../icons/ArrowRounded";

function Calendar() {
  const [show, setShow] = useState(false);

  let weekNames = ["D", "L", "M", "M", "J", "V", "S"];

  return (
    <div
      onClick={() => setShow(!show)}
      onMouseLeave={() => setShow(false)}
      className="flex items-center gap-3 relative border p-2 rounded text-[#606060] hover:ring-2 ring-offset-2 hover:ring-[#513685] cursor-pointer transition-all duration-300"
    >
      <Schedule sizes={25} />
      {/* <span className="font-medium">Calendario</span> */}

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`flex flex-col gap-2 absolute top-full left-0 border w-80 min-w-fit h-20 min-h-fit hover:shadow transition-all z-10 bg-white duration-300 ${
          show
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 border-b py-2 bg-[#513685] text-white font-semibold">
          <button>
            <ArrowRounded sizes={20} />
          </button>
          <h1 className="text-lg">Enero</h1>
          <button className="rotate-180">
            <ArrowRounded sizes={20} />
          </button>
        </div>
        <div className="grid grid-cols-7 items-center justify-items-center p-1">
          {weekNames.map((d, i) => (
            <span key={i} className="text-[#513685] font-semibold">
              {d}
            </span>
          ))}
          {[...Array(31)].map((_, i) => (
            <button
              key={i}
              className="w-8 h-8 rounded-full border aspect-square flex items-center justify-center p-1 m-1 border-transparent hover:border-[#513685] hover:text-[#513685] font-medium transition-all duration-500"
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
