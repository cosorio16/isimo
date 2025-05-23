import useStore from "../../store/store";
import ScheduleCard from "../data/ScheduleCard";
import { useCallback, useEffect, useState } from "react";
import { getAllSchedulers, getEvents } from "../../utils/utils";
import Select from "./Select";
import Close from "../../icons/Close";
import Add from "../../icons/Add";
import Date from "./Date";
import timeslibrery from "../../lib/timeslib";
import { createEvent } from "../../utils/utils";
import Temperature from "../../icons/Temperature";
import NumberFlow from "@number-flow/react";
import Ice from "../../icons/Ice";

function Aside() {
  const { aside, toggleAside, scheduler, nameDevice, isAirDevice } = useStore();

  const [schedulers, setSchedulers] = useState([]);
  const [events, setEvents] = useState([]);

  const [nameEvent, setNameEvent] = useState("");
  const [timeEvent, setTimeEvent] = useState("");
  const [monthsEvent, setMonthsEvent] = useState([]);
  const [daysOfMonthEvent, setDaysOfMonthEvent] = useState([]);
  const [daysOfWeekEvent, setDaysOfWeekEvent] = useState([]);
  const [eventAction, setEventAction] = useState(null);
  const [eventValue, setEventValue] = useState(16);
  const [eventOptions, setEventOptions] = useState([]);
  const [eventId, setEventId] = useState(null);
  const [eventActive, setEventActive] = useState(true);

  const [schedulerId, setSchedulerId] = useState(scheduler[0]);

  const [timesOptions, setTimesOptions] = useState([null], [null], [null]);

  const fetchEvents = async () => {
    let ids = schedulers
      .filter((item) => scheduler.includes(item.object))
      .map((e) => e.id);
    try {
      const promises = ids.map((id) => getEvents(id));
      const allEvents = await Promise.all(promises);
      const combinedEvents = allEvents.flatMap((e) => e.events);
      const ordenedEvents = combinedEvents.sort((a, b) => {
        if (a.start_hour === b.start_hour) {
          return a.start_min - b.start_min;
        }
        return a.start_hour - b.start_hour;
      });
      setEvents(ordenedEvents);
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
    let options1 = ["Encender", "Apagar", "Set Temperatura"];
    let options2 = ["Encender", "Apagar"];

    setEventOptions(isAirDevice ? options1 : options2);
  }, [isAirDevice]);

  useEffect(() => {
    scheduler && scheduler !== 0 && fetchEvents();
  }, [schedulers, scheduler]);

  useEffect(() => {
    let optionsMap = {
      Encender: 1,
      Apagar: 0,
      "Set Temperatura": eventValue || 16,
    };

    let ids = schedulers
      .filter((item) => scheduler.includes(item.object))
      .map((e) => e.id);

    setSchedulerId(eventAction == "Set Temperatura" ? ids[1] : ids[0]);
    setEventValue(optionsMap[eventAction]);
  }, [eventAction]);

  const handleResetAll = () => {
    setNameEvent("");
    setTimeEvent("");
    setEventAction("");
    setEventId(null);
    setTimesOptions([null], [null], [null]);
  };

  const handleSubmitData = useCallback(async () => {
    const body = {
      active: eventActive,
      name: nameEvent,
      type: "",
      start_hour: timeEvent.split(":")[0],
      start_min: timeEvent.split(":")[1],
      offset_hour: 0,
      offset_min: 0,
      year: 0,
      start_year: "2025",
      holidays: "",
      scheduler: schedulerId,
      id: eventId,
      months: monthsEvent,
      daysofmonth: daysOfMonthEvent,
      daysofweek: daysOfWeekEvent,
      dayweeknrs: "111111",
      value: eventValue,
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
    eventValue,
    eventActive,
    schedulerId,
    eventId,
  ]);

  return (
    <div
      className={`inset-0 fixed  text-[#606060] flex items-center select-none ${
        aside ? "z-10 bg-black bg-opacity-70" : "pointer-events-none"
      }`}
    >
      <div className="grow h-full p-5">
        {/* desactivar todos los horarios */}
        <div
          className={`w-full grow gap-5 overflow-y-scroll bg-white p-5 h-full rounded-sm  ${
            events.length
              ? "grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 content-start"
              : "flex justify-center items-center"
          }  ${aside ? "scale-100" : "scale-0"} transition-all duration-500`}
        >
          {events.length ? (
            events.map((event, i) => (
              <ScheduleCard
                key={i}
                id={event.id}
                time={`${event.start_hour}:${
                  event.start_min < 10 ? `0${event.start_min}` : event.start_min
                }`}
                name={event.name}
                value={event.value}
                daysOfMonth={event.daysofmonth}
                daysOfWeek={event.daysofweek}
                eventActive={event.active}
                eventAction={eventAction}
                months={event.months}
                setTimes={setTimesOptions}
                setDate={setTimeEvent}
                setEvent={setEventValue}
                setName={setNameEvent}
                setId={setEventId}
                setEventAction={setEventAction}
                setEventActive={setEventActive}
                onDelete={() => {
                  fetchEvents();
                  handleResetAll();
                }}
              />
            ))
          ) : (
            <p>No hay eventos disponibles.</p>
          )}
        </div>
      </div>

      <div
        className={`min-w-[450px] max-w-[450px] h-full bg-white px-10 py-12 flex flex-col gap-x-5 gap-y-2 overflow-y-scroll ${
          aside ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        {aside && (
          <>
            <div className="flex items-start justify-between w-full pb-2 border-b">
              <div>
                <h1 className="text-lg  2xl:text-xl font-medium">
                  Horario Del Control
                </h1>
                <p>Programar acciones al dispositivo.</p>
                <p>
                  Dispositivo: <span className="font-medium">{nameDevice}</span>
                </p>
              </div>
              <button
                onClick={() => {
                  toggleAside(false);
                  handleResetAll();
                }}
                className=" text-slate-400 hover:text-red-500 transition-all"
              >
                <Close sizes={25} />
              </button>
            </div>
            <div className="flex items-start flex-col gap-3">
              <input
                type="text"
                value={nameEvent}
                onChange={(e) => setNameEvent(e.target.value)}
                placeholder="Nombre del evento"
                className="relative border w-full px-5 py-2 rounded flex items-center justify-between cursor-pointer ring-[#513685] ring-offset-1 hover:ring-2 focus:outline-none focus:ring-2 transition-all"
              />
              <div className="flex justify-between items-center gap-2 w-full">
                <input
                  type="time"
                  value={timeEvent}
                  className="border px-5 w-full h-full  focus:outline-none hover:ring-2 ring-[#513685] ring-offset-1 focus:ring-2 rounded cursor-pointer transition-all"
                  onChange={(e) => setTimeEvent(e.target.value)}
                />
                <Select
                  name={"Acción"}
                  options={eventOptions}
                  optionSelected={eventAction}
                  setOptionSelected={setEventAction}
                />
              </div>

              {eventAction == "Set Temperatura" && (
                <label className="flex flex-col gap-5 w-full py-2">
                  <div className="flex items-center gap-2 font-medium text-[#606060] justify-between">
                    <span className="flex items-center gap-2">
                      <Temperature sizes={20} />
                      Seleccionar Temperatura
                    </span>
                    <span className="text-lg border rounded bg-[#513685] text-white font-medium gap-2 px-4 py-2 w-24 flex items-center justify-between">
                      <Ice sizes={20} />
                      <NumberFlow value={eventValue} />
                    </span>
                  </div>
                  <input
                    type="range"
                    min={16}
                    max={32}
                    step={1}
                    onChange={(e) => setEventValue(Number(e.target.value))}
                    value={eventValue}
                  />
                </label>
              )}

              <Date
                name={"Dias de la Semana"}
                options={timeslibrery.days}
                gridCols={4}
                setSelected={setDaysOfWeekEvent}
                selectedOptions={timesOptions[0]}
              />
              <Date
                name={"Dias del mes"}
                options={timeslibrery.daysMonth}
                gridCols={7}
                setSelected={setDaysOfMonthEvent}
                selectedOptions={timesOptions[1]}
              />
              <Date
                name={"Meses"}
                options={timeslibrery.months}
                gridCols={4}
                setSelected={setMonthsEvent}
                selectedOptions={timesOptions[2]}
              />

              <div className="grid grid-cols-2">
                <label htmlFor="" className="flex items-center gap-2 px-1 py-1">
                  <input
                    type="checkbox"
                    className="size-4"
                    defaultChecked
                    value={eventActive}
                    onChange={(e) => setEventActive(e.target.checked)}
                  />
                  Activo
                </label>
                {/* <label htmlFor="" className="flex items-center gap-2 px-1 py-1">
                  <input type="checkbox" className="size-4" defaultChecked />
                  Repetir Cada Año
                </label> */}
              </div>
            </div>
            <button
              onClick={() => {
                handleSubmitData();
                fetchEvents();
                handleResetAll();
              }}
              className={`border py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-white bg-[#513685]  ${
                nameEvent && timeEvent && eventAction
                  ? "active:scale-90 hover:gap-3"
                  : "bg-opacity-70 pointer-events-none"
              } transition-all duration-300`}
            >
              <Add sizes={20} />
              {eventId == null ? "Añadir" : "Editar"} Tarea
            </button>
            <button
              onClick={() => handleResetAll()}
              className={`border flex items-center gap-2 justify-center py-2 rounded text-[#513685] font-medium border-[#513685] ${
                eventId !== null ? "scale-100" : "scale-0"
              } transition-all duration-300`}
            >
              <Close sizes={25} /> Cancelar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Aside;
