import useStore from "../../store/store";
import Home from "../../icons/Home";
import Device from "../../icons/Device";
import Meter from "../../icons/Meter";
import Settings from "../../icons/Settings";
import Bell from "../../icons/Bell";

function Header() {
  const { toggleView, togglePopup, view, quantityAmount } = useStore();

  return (
    <header className="flex items-center justify-between border-b bg-opacity-80 px-16 lg:px-24 2xl:px-32 h-24 text-[#513685] bg-white fixed w-screen left-0 top-0 backdrop-blur z-10">
      <nav className="flex font-medium items-center gap-10 text-lg">
        <img
          src="/scada/resources/img/logo.png"
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
  );
}

export default Header;
