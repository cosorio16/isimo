import useStore from "../../store/store";
import Close from "../../icons/Close";
import DataCard from "../data/Datacard";

function Modal() {
  const { modal, toggleModal } = useStore();
  return (
    <div
      className={`fixed inset-0 pt-10 px-5 text-[#606060] select-none ${
        modal
          ? "bg-black bg-opacity-60 z-10"
          : "bg-transparent pointer-events-none"
      } transition-all duration-300`}
    >


      <div
        className={`w-full h-full bg-white flex flex-col gap-5 p-5 rounded-t-sm ${
          modal ? "translate-y-0" : "translate-y-full"
        } transition-all duration-500`}
      >
        <button
          onClick={() => {
            toggleModal(false);
          }}
          className="self-end hover:text-red-500 transition-all"
        >
          <Close sizes={25} />
        </button>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-4 gap-4">
            {
              //onOff
              //tiempo de funcionamiento
              //temperatura del aire
              //temperatura del recinto
              //tiempo de funcionamiento
              //Energia Fase 1, 2, 3
              //Potencia, Corriente, Frecuencia
              //Energia Total
              //Factor de potencia
            }
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
