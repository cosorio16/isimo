import useStore from "../../store/store";
import ScheduleCard from "../../components/ScheduleCard";
import { useCallback, useEffect, useState } from "react";
import { getAllSchedulers, getEvents } from "../../utils/utils";
import Select from "./Select";
import Close from "../../icons/Close";
import Add from "../../icons/Add";
import Date from "./Date";
import timeslibrery from "../../lib/timeslib";
import { createEvent } from "../../utils/utils";

function Aside() {
  const { aside, toggleAside, scheduler } = useStore();
  const [schedulers, setSchedulers] = useState([]);
  const [events, setEvents] = useState({ events: [] });
  const [nameEvent, setNameEvent] = useState("");
  const [timeEvent, setTimeEvent] = useState("");
  const [monthsEvent, setMonthsEvent] = useState([]);
  const [daysOfMonthEvent, setDaysOfMonthEvent] = useState([]);
  const [daysOfWeekEvent, setDaysOfWeekEvent] = useState([]);

  const fetchEvents = async () => {
    let id = schedulers.filter((item) => item.object == scheduler)[0]?.id;
    try {
      const data = await getEvents(id);
      setEvents(data || []);
    } catch (error) {
      console.error(`Error en el fetch events: ${error}`);
    }
  };

  useEffect(() => {
    const fetchSchedulers = async () => {
      try {
        const data = await getAllSchedulers();
        setSchedulers(data.schedulers || []);
      } catch (error) {
        console.error(`Error en el fetch: ${error}`);
      }
    };

    fetchSchedulers();
  }, []);

  useEffect(() => {
    scheduler !== 0 && fetchEvents();
  }, [schedulers, scheduler]);

  let optionsDate = ["Encender", "Apagar", "Set Temperatura"];

  const handleSubmitData = useCallback(async () => {
    const body = {
      active: true,
      name: nameEvent,
      type: "",
      start_hour: timeEvent.split(":")[0],
      start_min: timeEvent.split(":")[1],
      offset_hour: 0,
      offset_min: 0,
      year: 0,
      start_year: "2025",
      holidays: "",
      scheduler: schedulers.filter((item) => item.object == scheduler)[0]?.id,
      id: "0",
      months: monthsEvent,
      daysofmonth: daysOfMonthEvent,
      daysofweek: daysOfWeekEvent,
      dayweeknrs: "111111",
      value: "1",
      action: "event-save",
    };

    try {
      await createEvent(body);
    } catch (error) {
      console.error(`Error al crear el evento: ${error}`);
    }
  }, [
    nameEvent,
    timeEvent,
    scheduler,
    monthsEvent,
    daysOfMonthEvent,
    daysOfWeekEvent,
  ]);

  return (
    <div
      className={`inset-0 fixed  text-[#606060] flex items-center select-none ${
        aside ? "z-10 bg-black bg-opacity-70" : "pointer-events-none"
      }`}
    >
      <div className="grow h-full p-5">
        <div
          className={`w-full bg-white rounded-sm h-full gap-5 p-5 overflow-y-scroll  ${
            events && events.events && events.events.length
              ? "grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 content-start"
              : "flex justify-center items-center"
          } ${aside ? "scale-100" : "scale-0"} transition-all duration-500`}
        >
          {events && events.events && events.events.length ? (
            <>
              {events &&
                events?.events.map((event, i) => (
                  <ScheduleCard
                    key={i}
                    id={event.id}
                    time={`${event.start_hour}:${
                      event.start_min < 10
                        ? `0${event.start_min}`
                        : event.start_min
                    }`}
                    name={event.name}
                    onDelete={() => fetchEvents()}
                  />
                ))}
            </>
          ) : (
            <p>No hay tareas programadas.</p>
          )}
        </div>
      </div>

      <div
        className={`w-[450px] border h-full bg-white px-10 py-12 flex flex-col gap-x-5 gap-y-2 ${
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
            onChange={(e) => setNameEvent(e.target.value)}
            placeholder="Nombre del evento"
            className="relative border w-full px-5 py-2 rounded flex items-center justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 focus:outline-none focus:ring-2 transition-all"
          />
          <div className="flex justify-between items-center gap-2 w-full">
            <input
              type="time"
              className="border px-5 w-full h-full  focus:outline-none hover:ring-2 ring-[#513685] ring-offset-1 focus:ring-2 rounded cursor-pointer transition-all"
              onChange={(e) => setTimeEvent(e.target.value)}
            />
            <Select name={"Accion"} options={optionsDate} />
          </div>
          <Date
            name={"Dias de la Semana"}
            options={timeslibrery.days}
            gridCols={4}
            setSelected={setDaysOfWeekEvent}
          />
          <Date
            name={"Dias del mes"}
            options={timeslibrery.daysMonth}
            gridCols={7}
            setSelected={setDaysOfMonthEvent}
          />
          <Date
            name={"Meses"}
            options={timeslibrery.months}
            gridCols={4}
            setSelected={setMonthsEvent}
          />

          <div className="grid grid-cols-2">
            <label htmlFor="" className="flex items-center gap-2 px-1 py-1">
              <input type="checkbox" name="" id="" className="size-4" checked />
              Activo
            </label>
            <label htmlFor="" className="flex items-center gap-2 px-1 py-1">
              <input type="checkbox" name="" id="" className="size-4" checked />
              Repetir Cada Año
            </label>
          </div>
        </div>
        <button
          onClick={() => {
            handleSubmitData();
            fetchEvents();
          }}
          className="border py-3 rounded-lg font-medium text-white bg-[#513685] flex items-center justify-center gap-2 active:scale-90 transition-all duration-300"
        >
          <Add sizes={20} />
          Añadir Tarea
        </button>
      </div>
    </div>
  );
}

export default Aside;
