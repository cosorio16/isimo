import { useState } from "react";
import Arrow from "../../icons/Arrow";

function Select({ name, options, setOptionSelected, optionSelected, full }) {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow(!show)}
      onMouseLeave={() => setShow(false)}
      className={`relative border w-full px-5 py-2 rounded flex items-center ${
        full ? "max-w-full" : "max-w-44"
      } text-ellipsis justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 transition-all select-none`}
    >
      <p className="text-ellipsis truncate">
        {optionSelected ? optionSelected : name}
      </p>
      <span className="rotate-[270deg] text-[#606060] bg-white p-1">
        <Arrow sizes={15} />
      </span>
      <div
        className={`absolute w-full top-full left-0 bg-white z-10 flex flex-col min-h-fit ${
          show
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        } transition-all duration-300`}
      >
        {options &&
          options.map((o, i) => (
            <button
              onClick={() => setOptionSelected(o)}
              key={i}
              className={`text-start py-3 border px-4 truncate hover:bg-[#513685] hover:text-white transition-all ${
                i > 0 && "border-t-0"
              }`}
            >
              {o}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Select;
