import { useState } from "react";
import Arrow from "../../icons/Arrow";
function Select() {
  const [show, setShow] = useState(true);

  return (
    <div className="border w-full px-5 py-2 rounded flex items-center justify-between cursor-pointer">
      Select
      <span className="rotate-[270deg] text-[#606060]">
        <Arrow sizes={15} />
      </span>
    </div>
  );
}

export default Select;
