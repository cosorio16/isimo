import Search from "../icons/Search";

function Search() {
  return (
    <div className="flex border items-center gap-2 px-5 py-2 w-96 rounded bg-white ring-2 ring-transparent hover:ring-[#513685] transition-all duration-300 focus-within:ring-[#513685]">
      <Search sizes={25} />
      <input
        type="text"
        placeholder="Buscar"
        className="focus:outline-none bg-transparent w-full"
      />
    </div>
  );
}

export default Search;
