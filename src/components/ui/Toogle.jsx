function Toogle({ active, setActive, direction }) {


  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setActive(!active);
        localbus.write(`${direction}`, !active)
      }}
    >
      <div
        className={`w-14 border rounded-full h-7 p-1 flex items-center ${
          active ? "bg-[#93D50A]" : "bg-[#E5E7EB]"
        } transition-all`}
      >
        <div
          className={`bg-white rounded-full size-5 origin-left ${
            active ? "translate-x-6" : "translate-x-0"
          } transition-all`}
        ></div>
      </div>
    </div>
  );
}

export default Toogle;
