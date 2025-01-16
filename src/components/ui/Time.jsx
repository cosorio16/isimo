import { useState } from "react";
import Clock from "../../icons/Clock";

function Time() {
  const [show, setShow] = useState(true);

  return (
    <div className="relative border w-full px-5 py-2 rounded flex items-center gap-3 cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 transition-all">
      Hora
    </div>
  );
}

export default Time;
