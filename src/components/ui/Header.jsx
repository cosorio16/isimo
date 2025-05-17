import { useState } from "react";
import useStore from "../../store/store";
import Home from "../../icons/Home";
import Device from "../../icons/Device";
import Meter from "../../icons/Meter";
import Settings from "../../icons/Settings";
import MenuIcon from "../../icons/MenuIcon";
import Close from "../../icons/Close";
// import Bell from "../../icons/Bell";

function Header() {
  const { toggleView, togglePopup, view, quantityAmount } = useStore();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="xl:flex items-center justify-between border-b bg-opacity-80 hidden  px-3 md:px-16 lg:px-24 2xl:px-32 h-24 text-[#513685] bg-white fixed w-screen left-0 top-0 backdrop-blur z-10">
        <nav className="flex font-medium items-center gap-10 text-lg">
          <img
            // src="/scada/resources/img/logo.png"
            src="/logo.png"
            alt=""
            className="size-16 rounded-full aspect-square object-contain bg-[#513685] p-2"
          />
          <button
            onClick={() => toggleView(0)}
            className="flex items-center gap-2 hover:text-[#93D50A] transition-all"
          >
            <Home sizes={20} />
            Dashboard
          </button>
          <button
            onClick={() => toggleView(1)}
            className="flex items-center gap-2 hover:text-[#93D50A] transition-all"
          >
            <Device sizes={20} /> Control
          </button>
          <button
            onClick={() => toggleView(2)}
            className="flex items-center gap-2 hover:text-[#93D50A] transition-all"
          >
            <Meter sizes={20} />
            Mediciones
          </button>
        </nav>
        <div className="flex items-center justify-center justify-items-center">
          <div className="flex items-center">
            {view == 0 && (
              <button onClick={() => togglePopup(true)} className="relative">
                {quantityAmount == 0 && (
                  <>
                    <span className="size-3 rounded-full bg-red-600 absolute top-0 right-0 animate-ping"></span>
                    <span className="size-3 rounded-full bg-red-600 absolute top-0 right-0"></span>
                  </>
                )}

                <Settings sizes={30} />
              </button>
            )}
            <button></button>
          </div>
        </div>
      </header>

      <header className="flex items-center justify-between border-b bg-opacity-80 xl:hidden  px-3 md:px-16 lg:px-24 2xl:px-32 h-24 text-[#513685] bg-white fixed w-screen left-0 top-0 backdrop-blur z-10 border">
        <img
          // src="/scada/resources/img/logo.png"
          src="/logo.png"
          alt=""
          className="size-16 rounded-full aspect-square object-contain bg-[#513685] p-2"
        />

        <button onClick={() => setShowMenu(true)}>
          {showMenu ? <Close sizes={45} /> : <MenuIcon sizes={45} />}
        </button>

        {showMenu && (
          <nav className="absolute top-full bg-white w-screen flex flex-col gap-2 px-10 left-0 py-3">
            <button
              onClick={() => {
                toggleView(0);
                setShowMenu(false);
              }}
              className="flex items-center border-b py-2 gap-2 hover:text-[#93D50A] transition-all"
            >
              <Home sizes={20} />
              Dashboard
            </button>
            <button
              onClick={() => {
                toggleView(1);
                setShowMenu(false);
              }}
              className="flex items-center border-b py-2 gap-2 hover:text-[#93D50A] transition-all"
            >
              <Device sizes={20} /> Control
            </button>
            <button
              onClick={() => {
                toggleView(2);
                setShowMenu(false);
              }}
              className="flex items-center gap-2 py-2 hover:text-[#93D50A] transition-all"
            >
              <Meter sizes={20} />
              Mediciones
            </button>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
