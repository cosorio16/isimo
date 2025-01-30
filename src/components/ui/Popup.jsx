import useStore from "../../store/store";
import Close from "../../icons/Close";
import Dollar from "../../icons/Dollar";
import { useEffect, useState } from "react";

function Popup() {
  const { popup, togglePopup, setAmount } = useStore();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let price = localStorage.getItem("energyPrice");
    setPrice(price || 0);
  }, []);

  const handleSaveConfig = () => {
    localStorage.setItem("energyPrice", price);
    togglePopup(false);
    setAmount(price);
  };

  return (
    <>
      <div
        className={`fixed bg-black  inset-0 z-20  flex items-center justify-center ${
          popup ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
        } transition-all duration-300`}
      >
        <div
          className={`bg-white w-[400px] rounded flex flex-col gap-5 p-5 text-[#606060] items-center h-fit ${
            popup ? "scale-100" : "scale-0"
          } transition-all duration-300`}
        >
          <button onClick={() => togglePopup(false)} className="self-end">
            <Close sizes={25} />
          </button>

          <form className="flex flex-col gap-1">
            <span className="text-sm font-medium">Precio del Kwh</span>
            <div className="border flex items-center focus-within:ring-2 focus-within:ring-[#513685] hover:ring-2 hover:ring-[#513685] ring-offset-1 transition-all duration-300 rounded">
              <span className="p-2 ">
                <Dollar sizes={20} />
              </span>
              <input
                type="number"
                className="w-full pr-5 py-2 focus:outline-none"
                placeholder="Precio del KwH"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </form>
          <div>
            <button
              onClick={() => handleSaveConfig()}
              className="border px-5 py-2 rounded text-white font-semibold text-lg bg-[#513685]"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
