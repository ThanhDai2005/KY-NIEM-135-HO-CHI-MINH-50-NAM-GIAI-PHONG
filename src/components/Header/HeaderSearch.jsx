import Clock from "./Clock";
import SearchIcon from "@mui/icons-material/Search";

function HeaderSearch() {
  return (
    <div className="hidden space-y-2 lg:block">
      <Clock />
      <form className="relative w-[200px] h-[40px]">
        <input
          className="w-full h-full pl-4 pr-10 bg-[#FFF8E1] text-gray-800 rounded-full shadow-search outline-none hover:shadow-search-hover transition-all duration-300"
          placeholder="Tìm kiếm..."
        />
        <button
          type="submit"
          className="absolute -translate-y-1/2 right-3 top-1/2"
        >
          <SearchIcon className="text-[#c41e3a] size-6" />
        </button>
      </form>
    </div>
  );
}

export default HeaderSearch;
