import { useState } from "react";

function Toogle() {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setActive(!active);
      }}
    >
      <div
        className={`w-14 border rounded-full h-7 p-1 flex items-center ${
          active ? "bg-[#93D50A]" : "bg-[#E5E7EB]"
        } transition-all`}
      >
        <div
          className={`bg-white rounded-full size-5 origin-left ${
            active ? "translate-x-6" : "translate-x-0"
          } transition-all`}
        ></div>
      </div>
    </div>
  );
}

export default Toogle;
