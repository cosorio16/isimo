import useStore from "../../store/store";
import ScheduleCard from "../../components/ScheduleCard";
import { useEffect, useState } from "react";
import { getAllSchedulers, getEvents } from "../../utils/utils";
import Select from "./Select";
import Close from "../../icons/Close";
import Add from "../../icons/Add";
import Date from "./Date";

function Aside() {
  const { aside, toggleAside, scheduler } = useStore();
  const [schedulers, setSchedulers] = useState([]);
  const [events, setEvents] = useState([]);

  let optionsDate = ["Encender", "Apagar", "Set Temperatura"];

  let days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  let daysMonth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  let moths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  useEffect(() => {
    const fetchSchedulers = async () => {
      try {
        const data = await getAllSchedulers();
        setSchedulers(data.schedulers);
      } catch (error) {
        console.error(`Error en el fetch: ${error}`);
      }
    };

    fetchSchedulers();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      let id = schedulers.filter((item) => item.object == scheduler)[0]?.id;
      try {
        const data = await getEvents(id);
        setEvents(data);
      } catch (error) {
        console.error(`Error en el fetch events: ${error}`);
      }
    };

    fetchEvents();
  }, [scheduler]);

  return (
    <div
      className={`inset-0 fixed  text-[#606060] flex items-center select-none ${
        aside ? "z-10 bg-black bg-opacity-70" : "pointer-events-none"
      }`}
    >
      <div className="grow h-full p-5">
        <div
          className={`w-full h-full bg-white rounded-sm  gap-5 p-5 overflow-y-scroll  ${
            events.length == 0
              ? "flex justify-center items-center"
              : "grid grid-cols-2 2xl:grid-cols-3"
          } ${aside ? "scale-100" : "scale-0"} transition-all duration-500`}
        >
          {events.length == 0 ? (
            <p>No hay tareas programadas.</p>
          ) : (
            <>
              {events.map((c, i) => (
                <ScheduleCard key={i} />
              ))}
            </>
          )}
        </div>
      </div>

      <div
        className={`w-[450px] border h-full bg-white px-10 py-12 flex flex-col gap-5 ${
          aside ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <div className="flex items-start justify-between w-full">
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
            className="relative border w-full px-5 py-2 rounded flex items-center justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 focus:outline-none focus:ring-2 transition-all"
          />
          <div className="flex justify-between items-center gap-2 w-full">
            <input
              type="time"
              name=""
              id=""
              className="border px-5 w-full h-full  focus:outline-none hover:ring-2 ring-[#513685] ring-offset-1 focus:ring-2 rounded cursor-pointer transition-all"
            />
            <Select name={"Accion"} options={optionsDate} />
          </div>
          <Date name={"Dias de la Semana"} options={days} gridCols={4} />
          <Date name={"Dias del mes"} options={daysMonth} gridCols={7} />
          <Date name={"Meses"} options={moths} gridCols={4} />

          <div className="grid grid-cols-2">
            <label htmlFor="" className="flex items-center gap-2 px-1 py-1">
              <input type="checkbox" name="" id="" className="size-4" />
              Activo
            </label>
            <label htmlFor="" className="flex items-center gap-2 px-1 py-1">
              <input type="checkbox" name="" id="" className="size-4" />
              Repetir Cada Año
            </label>
          </div>
        </div>
        <button className="border py-3 rounded-lg font-medium text-white bg-[#513685] flex items-center justify-center gap-2 opacity-50">
          <Add sizes={20} />
          Añadir Tarea
        </button>
      </div>
    </div>
  );
}

export default Aside;
