import { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";
import Select from "../../components/ui/Select";
import objs from "../../lib/objectslib";

function MeditionCard({ circuit, data }) {
  const [optionSelected, setOptionSelected] = useState(objs.meterTopics[0]);
  const [directions, setDirections] = useState([]);
  const [meterValues, setMeterValues] = useState([]);

  const handleFilterDirections = () => {
    let filterDirections = data.map((d) => d.address);

    switch (optionSelected) {
      case objs.meterTopics[1]:
        setDirections(filterDirections.slice(3, 7));
        break;
      case objs.meterTopics[2]:
        setDirections(filterDirections.slice(7, 11));
        break;
      case objs.meterTopics[3]:
        setDirections(filterDirections.slice(11, 15));
        break;
      case objs.meterTopics[4]:
        setDirections(filterDirections.slice(15, 19));
        break;
      case objs.meterTopics[5]:
        setDirections(filterDirections.slice(19, 23));
        break;
      case objs.meterTopics[6]:
        setDirections(filterDirections.slice(23, 27));
        break;

      default:
        setDirections(filterDirections.slice(0, 3));
        break;
    }
  };

  useEffect(() => {
    handleFilterDirections();
  }, [optionSelected]);

  // useEffect(() => {
  //   let values = [...meterValues];

  //   const createCallback = (index) => (e) => {
  //     values[index] = e;
  //     setMeterValues([...values]);
  //   };

  //   const listeners = directions.map((d, i) => {
  //     const callback = createCallback(i);
  //     localbus.listen("object", d, callback);
  //     return { d, callback };
  //   });

  //   return () => {
  //     listeners.forEach(({ d, callback }) => {
  //       localbus.unlisten("object", d, callback);
  //     });
  //   };
  // }, [directions]);

  return (
    <div className="border rounded px-5 py-7 flex flex-col text-[#606060] gap-2 text-lg bg-white shadow hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col xl:flex-row justify-between items-center border-b py-2 ">
        <h1 className="xl:text-2xl font-medium min-w-fit">
          {optionSelected} - Circuito {circuit}
        </h1>
        <Select
          name={"Seleccionar"}
          options={objs.meterTopics}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-[#513685] font-medium">Fase A </span>
        <span className="text-xl ">
          <NumberFlow value={meterValues[0] || 0} />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#513685] font-medium">Fase B </span>
        <span className="text-xl ">
          <NumberFlow value={meterValues[1] || 0} />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#513685] font-medium">Fase C </span>
        <span className="text-xl ">
          <NumberFlow value={meterValues[2] || 0} />
        </span>
      </div>
      <div
        className={`flex justify-between ${
          optionSelected == "Corriente" && "opacity-0"
        } transition-all duration-300`}
      >
        <span className="text-[#513685] font-medium">Total </span>
        <span className="text-xl ">
          <NumberFlow value={meterValues[3] || 0} />
        </span>
      </div>
    </div>
  );
}

export default MeditionCard;
