import { useState } from "react";
import Arrow from "../../icons/Arrow";

function Date({ name, options, gridCols }) {
  const [datesSelected, setDatesSelected] = useState([]);
  const [show, setShow] = useState(false);

  const handleAddDate = (date) => {
    if (datesSelected.includes(date)) {
      const currentDates = datesSelected.filter((i) => i !== date);
      setDatesSelected(currentDates);
    } else {
      const currentDates = [...datesSelected];
      currentDates.push(date);
      setDatesSelected(currentDates);
    }
  };

  const handleAddAllData = () => {
    setDatesSelected(options);
  };

  const handleRemoveAll = () => {
    setDatesSelected([]);
  };

  console.log({ name: datesSelected });

  return (
    <div
      onClick={() => setShow(!show)}
      onMouseLeave={() => setShow(false)}
      className="relative border w-full px-5 py-2 rounded flex items-center justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 select-none transition-all"
    >
      {name}
      <span className="rotate-[270deg] text-[#606060]">
        <Arrow sizes={15} />
      </span>

      {show && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute w-full top-full shadow left-0 bg-white min-h-fit2 border z-10 p-2 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleAddAllData()}
              className="border py-2 hover:bg-slate-100 active:scale-95 rounded transition-all"
            >
              Todos
            </button>
            <button
              onClick={() => handleRemoveAll()}
              className="border py-2 hover:bg-slate-100 active:scale-95 rounded transition-all"
            >
              Ninguno
            </button>
          </div>

          <div
            className={`grid gap-2 ${gridCols == 4 && "grid-cols-4"} ${
              gridCols == 7 && "grid-cols-7"
            }`}
          >
            {options &&
              options.map((d, i) => (
                <button
                  onClick={() => {
                    handleAddDate(d);
                  }}
                  key={i}
                  className={`border truncate w-full p-1 rounded  ${
                    datesSelected.includes(d)
                      ? "bg-[#513685] text-white"
                      : "hover:bg-slate-200 hover:text-[#606060]"
                  } transition-all`}
                >
                  {d}
                </button>
              ))}
          </div>

          <button
            onClick={() => setShow(false)}
            className="border py-2 px-5 rounded bg-[#513685] text-white font-medium active:scale-95 transition-all duration-300"
          >
            Guardar
          </button>
        </div>
      )}
    </div>
  );
}

export default Date;
