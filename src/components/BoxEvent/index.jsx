import { motion } from "framer-motion";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import ModalEvent from "./ModalEvent";

function BoxEvent(props) {
  const { item, index } = props;

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

  return (
    <>
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          type: "spring",
        }}
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2 },
        }}
        className="mx-2 my-4 overflow-hidden transition-all duration-300 bg-white shadow-box-event rounded-xl hover:shadow-box-event-hover "
      >
        <img
          className="w-full h-[200px] object-cover"
          src={item.image}
          alt={item.title}
        />
        <div className="p-6 min-h-[308px]">
          <h3 className="mb-2 text-xl font-bold line-clamp-3 leading-[1.6]">
            {item.title}
          </h3>
          <div className="flex items-center mb-4">
            <CalendarTodayIcon className="mr-2 text-[#EB7474]" />
            <span className="line-clamp-1">{item.date}</span>
          </div>
          <div className="flex items-center h-[60px] mb-2">
            <LocationOnIcon className="mr-2 text-[#EB7474]" />
            <span className="line-clamp-2">{item.location}</span>
          </div>
          <p className="mb-2 text-sm line-clamp-2">{item.description}</p>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full py-[6px] px-4 text-sm text-white rounded bg-[#EB7474] shadow-chitiet hover:opacity-90 font-medium leading-[1.75]"
            onClick={() => handleClickOpen(item)}
          >
            XEM CHI TIẾT
          </button>
        </div>
      </motion.div>

      <ModalEvent onClose={handleClose} open={open} event={event} />
    </>
  );
}

export default BoxEvent;
