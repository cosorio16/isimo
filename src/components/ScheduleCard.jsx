import Delete from "../icons/Delete";
import Power from "../icons/Power";

function ScheduleCard() {
  return (
    <div className="flex items-center justify-between border px-8 py-3 w-80 rounded font-medium text-[#606060] bg-slate-50">
      <div className="flex flex-col gap-1">
        <span className="text-black">Nombre</span>
        <span>11:11</span>
        <span>Todos los dias.</span>
        <span className="flex items-center gap-2">
          <Power sizes={18} />
          Accion
        </span>
      </div>
      <button className="aspect-square rounded-full p-2 hover:bg-red-500 hover:text-white transition-all duration-300">
        <Delete sizes={23} />
      </button>
    </div>
  );
}

export default ScheduleCard;
