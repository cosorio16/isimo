import useStore from "../../store/store";
import { createPortal } from "react-dom";
import Close from "../../icons/Close";

function Modal() {
  const { modal, toggleModal } = useStore();
  return (
    <>
      {createPortal(
        <>
          <div
            className={`fixed  bg-opacity-70 w-screen h-screen top-0 left-0 flex items-center justify-center py-20 px-40 ${
              modal ? "bg-black z-10" : "-z-10"
            }`}
          >
            <div
              className={`min-w-full min-h-full bg-white rounded-sm p-5 flex flex-col ${
                modal ? "scale-100" : "scale-0 "
              } transition-all duration-300`}
            >
              <button onClick={() => toggleModal(false)} className="self-end">
                <Close sizes={20} />
              </button>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

export default Modal;
