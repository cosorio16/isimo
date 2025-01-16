import Toogle from "../ui/Toogle";
import useStore from "../../store/store";
import Schedule from "../../icons/Schedule";
import Chart from "../../icons/Chart";
import Lamp from "../../icons/Lamp";
import Air from "../../icons/Air";
import Ice from "../../icons/Ice";

function DeviceCard({ name, icon }) {
  const { toggleAside, toggleModal } = useStore();

  const icons = [Lamp, Air, Ice];
  const Icon = icons[icon];

  return (
    <div className="flex min-w-56 w-full border flex-col gap-3 px-4 py-6 rounded-md shadow hover:shadow-lg cursor-pointer bg-white h-fit text-[#606060] transition-all duration-300">
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
        <button
          className="flex items-center gap-2 p-2 rounded-full hover:bg-[#513685] hover:bg-opacity-15 transition-all duration-200 text-sm font-medium"
          onClick={(e) => {
            e.stopPropagation();
            toggleModal(true);
          }}
        >
          <span className="text-[#513685]">
            <Chart sizes={22} />
          </span>
          Ver graficas
        </button>
        <button
          className="flex items-center gap-2 p-2 rounded-full hover:bg-[#93D50A] hover:bg-opacity-15 transition-all duration-200 text-sm font-medium"
          onClick={(e) => {
            e.stopPropagation();
            toggleAside(true);
          }}
        >
          <span className="text-[#93D50A]">
            <Schedule sizes={22} />
          </span>
          Ver horarios
        </button>
      </div>
    </div>
  );
}

export default DeviceCard;
