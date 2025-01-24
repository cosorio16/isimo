import useStore from "../../store/store";
import Close from "../../icons/Close";
import Dollar from "../../icons/Dollar";

function Popup() {
  const { popup, togglePopup } = useStore();

  return (
    <>
      {popup && (
        <div className="fixed bg-black bg-opacity-50 inset-0 z-20  flex items-center justify-center">
          <div className="bg-white w-[400px] rounded flex flex-col gap-5 p-5 text-[#606060] items-center h-fit">
            <button onClick={() => togglePopup(false)} className="self-end">
              <Close sizes={25} />
            </button>

            <form action="">
              <div className="border flex items-center focus-within:ring-2 focus-within:ring-[#513685] hover:ring-2 hover:ring-[#513685] ring-offset-1 transition-all duration-300 rounded">
                <span className="p-2 ">
                  <Dollar sizes={20} />
                </span>
                <input
                  type="number"
                  className="w-full pr-5 py-2 focus:outline-none"
                  placeholder="Precio del KwH"
                />
              </div>
            </form>
            <div>
              <button className="border px-5 py-2 rounded text-white font-semibold text-lg bg-[#513685]">
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
