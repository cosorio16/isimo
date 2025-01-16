import { useState } from "react";
import Arrow from "../../icons/Arrow";

function Select({ name }) {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow(!show)}
      className="relative border w-full px-5 py-2 rounded flex items-center justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 transition-all"
    >
      {name}
      <span className="rotate-[270deg] text-[#606060]">
        <Arrow sizes={15} />
      </span>
      {show && (
        <div className="absolute w-full top-full left-0 bg-white h-12 border z-10"></div>
      )}
    </div>
  );
}

export default Select;
