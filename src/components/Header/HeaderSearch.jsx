import Clock from "./Clock";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeaderSearch() {
  const navigate = useNavigate();

  const [keywords, setKeyWords] = useState("");

  const handleChange = (e) => {
    setKeyWords(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?keywords=${keywords}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="hidden space-y-2 lg:block"
    >
      <Clock />
      <form onSubmit={handleSearch} className="relative w-[200px] h-[40px]">
        <input
          onChange={handleChange}
          className="w-full h-full pl-4 pr-10 bg-[#FFF8E1] text-[#212121] rounded-full shadow-search outline-none hover:shadow-search-hover transition-all duration-300"
          placeholder="Tìm kiếm..."
        />
        <button
          type="submit"
          className="absolute -translate-y-1/2 right-3 top-1/2"
        >
          <SearchIcon className="text-[#c41e3a]" />
        </button>
      </form>
    </motion.div>
  );
}

export default HeaderSearch;
