import Delete from "../icons/Delete";
import Power from "../icons/Power";
import Edit from "../icons/Edit";
import Clock from "../icons/Clock";
import Schedule from "../icons/Schedule";

function ScheduleCard() {
  return (
    <div className="flex items-center justify-between border px-8 py-3 rounded font-medium shadow text-[#606060] bg-slate-50 w-full h-fit hover:shadow-lg transition-all duration-500">
      <div className="flex flex-col gap-1">
        <span className="text-[#513685] text-lg font-semibold">Nombre</span>
        <span className="flex items-center gap-2">
          <Clock sizes={18} /> 11:11
        </span>
        <span className="flex items-center gap-2">
          <Schedule sizes={18} /> Todos los dias.
        </span>
        <span className="flex items-center gap-2">
          <Power sizes={18} />
          Accion
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button className="aspect-square rounded p-2 hover:bg-[#513685] hover:text-white transition-all duration-300">
          <Edit sizes={23} />
        </button>
        <button className="aspect-square rounded p-2 hover:bg-red-500 hover:text-white transition-all duration-300">
          <Delete sizes={23} />
        </button>
      </div>
    </div>
  );
}

export default ScheduleCard;
