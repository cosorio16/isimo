import useStore from "../../store/store";
import Close from "../../icons/Close";

function Modal() {
  const { modal, toggleModal } = useStore();
  return (
    <div
      className={`fixed inset-0 pt-10 px-5 text-[#606060] ${
        modal
          ? "bg-black bg-opacity-60 z-10"
          : "bg-transparent pointer-events-none"
      } transition-all duration-300`}
    >
      <div
        className={`w-full h-full bg-white flex flex-col p-5 rounded-t-sm ${
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
        <div>Carlos</div>
      </div>
    </div>
  );
}

export default Modal;
