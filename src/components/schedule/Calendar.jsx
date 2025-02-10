import { useMemo, useState } from "react";
import Schedule from "../../icons/Schedule";
import ArrowRounded from "../../icons/ArrowRounded";
import timeobj from "../../lib/timeslib";

function Calendar({date, setDate}) {
  const [show, setShow] = useState(false);

  const changeMonth = (increment) => {
    setDate((prevDate) => {
      let newMonth = prevDate.month + increment;
      let newYear = prevDate.year;

      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }

      return {
        ...prevDate,
        month: newMonth,
        year: newYear,
      };
    });
  };

  const selectDay = (day) => {
    setDate((prevDate) => ({
      ...prevDate,
      day,
    }));
  };

  const daysInMonth = useMemo(() => {
    const startOfMonth = new Date(date.year, date.month, 1);
    const endOfMonth = new Date(date.year, date.month + 1, 0);
    const days = [];

    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      days.push(i);
    }

    return days;
  }, [date.month, date.year]);

  return (
    <div
      onClick={() => setShow(!show)}
      onMouseLeave={() => setShow(false)}
      className="min-w-fit w-60 px-10 flex items-center gap-3 relative border p-2 rounded text-[#606060] hover:ring-2 ring-offset-2 hover:ring-[#513685] cursor-pointer transition-all duration-300"
    >
      <Schedule sizes={25} />
      <span className="font-medium truncate text-ellipsis">{`${date.day} ${
        timeobj.months[date.month]
      } ${date.year}`}</span>

      <div
        // onClick={(e) => {
        //   e.stopPropagation();
        // }}
        className={`flex flex-col gap-2 absolute top-full left-0 border w-80 min-w-fit h-20 min-h-fit hover:shadow transition-all z-10 bg-white duration-300 ${
          show
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 pointer-events-none opacity-0"
        }`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex items-center justify-between px-4 border-b py-2 bg-[#513685] text-white font-semibold"
        >
          <button onClick={() => changeMonth(-1)}>
            <ArrowRounded sizes={20} />
          </button>
          <h1 className="text-lg">{timeobj.months[date.month]}</h1>
          <button onClick={() => changeMonth(1)} className="rotate-180">
            <ArrowRounded sizes={20} />
          </button>
        </div>
        <div className="grid grid-cols-7 items-center justify-items-center p-1">
          {/* {timeobj.weekNames.map((d, i) => (
            <span key={i} className="text-[#513685] font-semibold">
              {d}
            </span>
          ))} */}
          {daysInMonth.map((d, i) => (
            <button
              key={i}
              onClick={() => selectDay(d)}
              className={`size-10 rounded-full border aspect-square flex items-center justify-center p-1 m-1 border-transparent  font-medium transition-all duration-300 ${
                date.day == i + 1
                  ? "bg-[#513685] text-white"
                  : "hover:border-[#513685] hover:text-[#513685]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
