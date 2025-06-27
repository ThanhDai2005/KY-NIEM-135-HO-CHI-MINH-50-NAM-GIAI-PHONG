import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import BoxEvent from "../components/BoxEvent";
import RightSideBar from "../components/Event/RightSideBar.jsx";
import { listEvent } from "../data/Events.js";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const keywords = searchParams.get("keywords");

  console.log(keywords);

  return (
    <div className="bg-white ">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 ">
          {/* Cột chính: Kết quả tìm kiếm */}
          <div className="col-span-12 p-4 md:col-span-8 lg:col-span-9 lg:p-6">
            <h2 className="text-2xl font-bold text-[#EB7474] mb-6">
              Kết quả tìm kiếm cho: "{keywords || "Tất cả"}"
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((event, index) => (
                  <BoxEvent key={event.id} item={event} index={index} />
                ))}
              </div>
            ) : (
              <p className="text-lg italic text-gray-600">
                Không tìm thấy sự kiện nào phù hợp với từ khóa "{keywords}".
              </p>
            )}
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
