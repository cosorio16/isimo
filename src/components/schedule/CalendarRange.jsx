import { useState } from "react";
import Schedule from "../../icons/Schedule";

function CalendarRange() {
  const [show, setShow] = useState(true);

  return (
    <div
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
      className="w-60 relative border px-5 py-2 rounded flex items-center gap-2 cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 transition-all"
    >
      <Schedule sizes={20} />
      Fecha
      {show && (
        <div className="absolute top-full flex left-0 items-start gap-2">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" bg-white py-8 min-w-fit w-[350px] h-32 border min-h-fit shadow z-20 grid grid-cols-7 px-4 gap-2 rounded"
          >
            {[...Array(31)].map((_, i) => (
              <button
                className="border font-semibold hover:bg-[#513685] hover:text-white rounded-full aspect-square flex items-center justify-center text-[#606060] transition-all duration-200"
                key={i}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" bg-white py-8 min-w-fit  w-[350px] h-32 border min-h-fit shadow z-20 grid grid-cols-7 px-4 gap-2 rounded"
          >
            {[...Array(31)].map((_, i) => (
              <button
                className="border font-semibold hover:bg-[#513685] hover:text-white rounded-full aspect-square flex items-center justify-center text-[#606060] transition-all duration-200"
                key={i}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarRange;
