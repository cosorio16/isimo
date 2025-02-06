import Delete from "../../icons/Delete";
import Power from "../../icons/Power";
import Ice from "../../icons/Ice";
import Edit from "../../icons/Edit";
import Clock from "../../icons/Clock";
import { deleteEvent } from "../../utils/utils";
import times from "../../lib/timeslib";

function ScheduleCard({
  name,
  time,
  id,
  onDelete,
  eventActive,
  setEventActive,
  value,
  months,
  daysOfMonth,
  daysOfWeek,
  setTimes,
  setName,
  setDate,
  setEvent,
  setEventAction,
  setId,
}) {
  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(id);
    } catch (error) {
      console.error(`Error al eliminar card: ${error}`);
    }
  };

  const handleEditTimes = () => {
    let weekDaysEvent = times.days.filter(
      (m, i) => daysOfWeek.split("")[i] == 1 && m
    );
    let monthDaysEvent = times.daysMonth.filter(
      (m, i) => daysOfMonth.split("")[i] == 1 && m
    );
    let monthsEvent = times.months.filter(
      (m, i) => months.split("")[i] == 1 && m
    );

    setName(name);
    setDate(time.split(":")[0] < 10 ? `0${time}` : time);
    setEvent(value);
    setId(id);
    setEventAction(
      value > 1 ? "Set Temperatura" : value > 0 ? "Encender" : "Apagar"
    );
    setEventActive(eventActive);
    setTimes([weekDaysEvent, monthDaysEvent, monthsEvent]);
  };

  return (
    <div className="flex items-center justify-between border px-8 py-3 rounded font-medium max-w-full overflow-hidden shadow text-[#606060] bg-zinc-50 w-full h-fit hover:shadow-lg transition-all duration-500">
      <div className="flex flex-col gap-1">
        <span className="text-[#513685] text-lg font-semibold">{name}</span>
        <span className="flex items-center gap-2">
          <Clock sizes={18} /> {time}
        </span>

        {value > 1 ? (
          <span className="flex items-center gap-2">
            <Ice sizes={18} />
            {value}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Power sizes={18} />
            {value == 1 ? "Encender" : "Apagar"}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleEditTimes()}
          className="aspect-square rounded p-2 hover:bg-[#513685] hover:text-white transition-all duration-300"
        >
          <Edit sizes={23} />
        </button>
        <button
          onClick={() => {
            handleDeleteEvent();
            onDelete();
          }}
          className="aspect-square rounded p-2 hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <Delete sizes={23} />
        </button>
      </div>
    </div>
  );
}

export default ScheduleCard;
