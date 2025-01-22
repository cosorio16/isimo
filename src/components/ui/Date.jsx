import { useEffect, useState } from "react";
import Arrow from "../../icons/Arrow";
import Schedule from "../../icons/Schedule";

function Date({ name, options, gridCols, setSelected }) {
  const [datesSelected, setDatesSelected] = useState(options);
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

  useEffect(() => {
    const transformDates = options
      .map((option) => (datesSelected.includes(option) ? 1 : 0))
      .join("");

    setSelected(transformDates);
  }, [datesSelected]);

  return (
    <>
      <span className="flex items-center gap-2 font-medium text-[#606060]">
        <Schedule sizes={20} />
        {name}
      </span>
      <div
        onClick={() => setShow(!show)}
        onMouseLeave={() => setShow(false)}
        className="relative border w-full px-5 py-2 rounded flex items-center justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 select-none transition-all"
      >
        {datesSelected.length == options.length && "Todos"}
        {datesSelected.length == 0 && "Ninguno"}
        {datesSelected.length > 0 && datesSelected.length < options.length && (
          <div className="flex gap-2 items-center truncate">
            {datesSelected.map((o, i) => (
              <span
                className="border px-2 rounded bg-[#513685] text-white font-medium"
                key={i}
              >
                {o}
              </span>
            ))}
          </div>
        )}

        <span className="rotate-[270deg] text-[#606060]">
          <Arrow sizes={15} />
        </span>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute w-full top-full  left-0  flex flex-col gap-5 pb-5 p-2 ${
            show
              ? "translate-y-0 opacity-100 bg-white min-h-fit border z-10 shadow"
              : "pointer-events-none -translate-y-10 opacity-0 -z-10"
          } transition-all duration-300`}
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
            className="border py-2 px-5 rounded bg-white text-[#606060] hover:bg-[#93D50A] hover:text-white font-medium active:scale-95 transition-all duration-300"
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}

export default Date;
