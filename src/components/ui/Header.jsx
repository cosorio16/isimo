import Home from "../../icons/Home";
import Device from "../../icons/Device";
import Meter from "../../icons/Meter";

function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-opacity-80 px-32 h-24 text-[#513685] bg-white fixed w-screen left-0 top-0 backdrop-blur z-10">
      <nav className="flex font-medium items-center gap-10 text-lg">
        <img
          src="/logo.png"
          alt=""
          className="size-16 rounded-full aspect-square object-contain bg-[#513685] p-2"
        />
        <button className="flex items-center gap-2">
          <Home sizes={20} />
          Dashboard
        </button>
        <button className="flex items-center gap-2">
          <Device sizes={20} /> Control
        </button>
        <button className="flex items-center gap-2">
          <Meter sizes={20} />
          Mediciones
        </button>
      </nav>
      <div className="flex items-center justify-center justify-items-center">
        <div className="flex items-center">
          <button></button>
          <button></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
