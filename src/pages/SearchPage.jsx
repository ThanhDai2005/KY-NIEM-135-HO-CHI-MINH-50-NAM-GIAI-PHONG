import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import RightSideBar from "../components/Event/RightSideBar.jsx";
import { listEvent } from "../data/Events.js";
import ModalEvent from "../components/BoxEvent/ModalEvent.jsx";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywords = searchParams.get("keywords");

  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState({});

  const handleClickOpen = (events) => {
    setOpen(true);
    setEvent(events);
    console.log(events);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const searchResults = listEvent.filter((item) =>
    item.title.toLowerCase().includes(keywords.toLowerCase())
  );

  return (
    <div className="bg-white ">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 ">
          <div className="col-span-12 p-4 md:col-span-8 lg:col-span-9 lg:p-6">
            <h2 className="relative text-xl font-semibold text-[#1B1D2D] mb-6 pl-[10px] after:absolute after:h-[15px] after:w-[3px] after:bg-[#CE2424] after:left-0 after:top-1/2 after:-translate-y-1/2">
              KẾT QUẢ TÌM KIẾM : {searchResults.length}
            </h2>
            {searchResults.length > 0 ? (
              <div className="space-y-7">
                {searchResults.map((item) => (
                  <div className="md:flex gap-5 pb-7 border-b border-b-[#e6e6e6] ">
                    <img
                      className="w-full h-[192px] md:w-[270px] md:h-[169px] mb-4 md:mb-0 object-cover flex-shrink-0 cursor-pointer"
                      src={item.image}
                      onClick={() => handleClickOpen(item)}
                    />

                    <div>
                      <h3
                        onClick={() => handleClickOpen(item)}
                        className="mb-2 text-xl font-bold text-[#1B1D2D] cursor-pointer"
                      >
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        <div className="text-xs font-semibold text-[#595959] ">
                          {item.location}
                        </div>
                        <span>-</span>
                        <div className="text-xs text-[#595959] ">
                          {item.date}
                        </div>
                      </div>
                      <p className="text-sm text-[#555555]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

                <ModalEvent open={open} onClose={handleClose} event={event} />
              </div>
            ) : (
              <p className="text-lg italic text-[#555555]">
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
