import { createPortal } from "react-dom";
import Close from "../icons/Close";
import { useEffect, useState } from "react";

function Demobanner() {
  let demoStatus = localStorage.getItem("demo");
  const [show, setShow] = useState(demoStatus ? false : true);

  const demoOnFalse = () => {
    setShow(false);
    localStorage.setItem("demo", false);
  };

  return (
    <>
      {show &&
        createPortal(
          <div className="fixed h-fit py-5 w-screen left-0 bottom-0 flex flex-col items-center justify-center bg-[#513685] text-white px-5 xl:px-32 lg:flex-row gap-5 xl:gap-20">
            <p className="text-sm">
              Este proyecto es una demostración interactiva del diseño de la
              interfaz del dashboard utilizado para Tiendas Isimo. Aunque fui
              parte del equipo de desarrollo en una empresa especializada en
              domótica, este prototipo es solo una muestra de mi trabajo y no
              representa una implementación oficial ni activa.
            </p>
            <button
              onClick={() => demoOnFalse()}
              className="border rounded-full aspect-square p-2 hover:bg-white hover:text-[#513685] transition-all duration-300 hidden xl:inline"
            >
              <Close sizes={20} />
            </button>
            <button
              onClick={() => demoOnFalse()}
              className="border rounded  px-10 py-2 font-medium bg-white text-[#513685] transition-all duration-300 inline xl:hidden"
            >
              Aceptar
            </button>
          </div>,
          document.body
        )}
    </>
  );
}

export default Demobanner;
