import { useState } from "react";
import Arrow from "../../icons/Arrow";

function Select({ name, options }) {
  const [show, setShow] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);

  return (
    <div
      onClick={() => setShow(!show)}
      onMouseLeave={() => setShow(false)}
      className="relative border w-full px-5 py-2 rounded flex items-center text-ellipsis  justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 transition-all select-none"
    >
      {optionSelected ? optionSelected : name}
      <span className="rotate-[270deg] text-[#606060]">
        <Arrow sizes={15} />
      </span>
      {show && (
        <div className="absolute w-full top-full left-0 bg-white z-10 flex flex-col min-h-fit">
          {options &&
            options.map((o, i) => (
              <button
                onClick={() => setOptionSelected(o)}
                key={i}
                className={`text-start py-3 border px-4 truncate hover:bg-[#FF6900] hover:text-white transition-all ${
                  i > 0 && "border-t-0"
                }`}
              >
                {o}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default Select;
