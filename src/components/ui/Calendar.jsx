import Schedule from "../../icons/Schedule";

function Calendar() {
  return (
    <div className="relative border w-full px-5 py-2 rounded flex items-center gap-2 cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 transition-all">
      <Schedule sizes={20} />
      Fecha
    </div>
  );
}

export default Calendar;
