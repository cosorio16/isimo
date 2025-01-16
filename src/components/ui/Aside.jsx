import useStore from "../../store/store";
import Select from "./Select";
import Close from "../../icons/Close";
import Add from "../../icons/Add";
import Time from "./Time";

function Aside() {
  const { aside, toggleAside } = useStore();

  return (
    <>
      {aside && (
        <div
          onClick={() => toggleAside(false)}
          className="w-screen h-screen bg-black fixed top-0 left-0 bg-opacity-70 z-10"
        ></div>
      )}
      <aside
        className={`fixed h-screen min-w-96 w-[450px] top-0 right-0 bg-white border-l px-10 py-12 z-10 flex flex-col gap-5 transition-all text-[#606060] ${
          aside ? "translate-x-0" : "translate-x-full"
        } duration-500`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-medium">Horario Del Control</h1>
            <p>Programar acciones al dispositivo.</p>
          </div>
          <button
            onClick={() => toggleAside(false)}
            className=" text-slate-400 hover:text-red-500 transition-all"
          >
            <Close sizes={25} />
          </button>
        </div>
        <div className="flex items-start flex-col gap-3">
          <input
            type="text"
            placeholder="Nombre del evento"
            className="relative border w-full px-5 py-2 rounded flex items-center justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 focus:outline-none focus-within:ring-2 transition-all"
          />
          <Time />
          <Select name={"Dias de la semana"}/>
          <Select name={"Dias del Mes"}/>
          <Select name={"Meses"}/>
          <Select />
          <label htmlFor="" className="flex items-center gap-2 px-1 py-1">
            <input type="checkbox" name="" id="" className="size-4" />
            Activo
          </label>
        </div>
        <button className="border py-3 rounded-lg font-medium text-white bg-[#513685] flex items-center justify-center gap-2 opacity-50">
          <Add sizes={20} />
          Añadir Tarea
        </button>
      </aside>
    </>
  );
}

export default Aside;
