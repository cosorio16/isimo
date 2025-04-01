import Select from "../ui/Select";
import NumberFlow from "@number-flow/react";

function MeditionsAll() {
  let options = ["Circuito 1", "Circuito 2", "Circuito 3", "Circuito 4"];
  let dataNames = [
    "Corriente A",
    "Corriente B",
    "Corriente C",
    "Potencia A",
    "Potencia B",
    "Potencia C",
    "Potencia Total",
    "Potencia Reactiva A",
    "Potencia Reactiva B",
    "Potencia Reactiva C",
    "Potencia Reactiva Total",
    "Factor de Potencia A",
    "Factor de Potencia B",
    "Factor de Potencia C",
    "Factor de Potencia Total",
    "Potencia Aparente A",
    "Potencia Aparente B",
    "Potencia Aparente C",
    "Potencia Aparente Total",
    "Energia Fase A",
    "Energia Fase B",
    "Energia Fase C",
    "Energia Total",
    "Energia Reactiva hora Fase A",
    "Energia Reactiva hora Fase B",
    "Energia Reactiva hora Fase C",
    "Energia Reactiva hora Total",
    // "Voltaje Fase A #1",
    // "Voltaje Fase B #1",
    // "Voltaje Fase C #1",
    // "Frecuencia",
  ];

  return (
    <div className="flex flex-col gap-5 border rounded p-10 w-full min-h-96 bg-white shadow">
      <div>
        <Select options={options} name={options[0]} />
      </div>

      <div className="grid grid-cols-6 gap-5 items-center justify-items-center">
        {dataNames.map((n, i) => (
          <div className="flex flex-col gap-1 w-full">
            <span key={i} className="text-[#513685] font-medium">
              {n}
            </span>
            <span className="border px-5 py-2 rounded bg-slate-100 font-semibold text-slate-600 w-full">
              <NumberFlow value={i} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeditionsAll;
