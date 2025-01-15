import Toogle from "../ui/Toogle";
import useStore from "../../store/store";
import Schedule from "../../icons/Schedule";
import Chart from "../../icons/Chart";
import Lamp from "../../icons/Lamp";
import Ice from "../../icons/Ice";
import Device from "../../icons/Device";

function DeviceCard({ name, icon }) {
  const { toggleAside, toggleModal } = useStore();

  const icons = [Lamp, Ice, Device];
  const Icon = icons[icon];

  return (
    <div
      onClick={() => toggleAside(true)}
      className="flex min-w-56 w-full border flex-col gap-3 px-4 py-6 rounded-md shadow hover:shadow-lg cursor-pointer bg-white h-fit text-[#606060] transition-all duration-300"
    >
      <div className="flex items-center justify-between border-b pb-5">
        <div className="flex items-center gap-4">
          {Icon && (
            <span className="border aspect-square p-2 rounded-full text-[#513685] bg-lime-100">
              <Icon sizes={25} />
            </span>
          )}
          <div>
            <h1 className="text-xl">{name}</h1>
            <span className="text-sm ">status</span>
          </div>
        </div>
        <Toogle />
      </div>
      <div className="flex justify-between items-center">
        <p className="grow text-slate-500 text-sm pl-2">
          Click para ver más opciones.
        </p>
        <div className="flex items-center gap-2">
          <button
            className="text-[#513685] p-1"
            onClick={(e) => {
              e.stopPropagation();
              toggleModal(true);
            }}
          >
            <Chart sizes={22} />
          </button>
          <button
            className="text-[#93D50A] p-1"
            onClick={(e) => {
              e.stopPropagation();
              toggleModal(true);
            }}
          >
            <Schedule sizes={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceCard;
