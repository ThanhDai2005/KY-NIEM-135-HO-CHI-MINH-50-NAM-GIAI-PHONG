import { FaQuoteLeft, FaRegCalendarAlt } from "react-icons/fa";
import { historicalEvents } from "../../data/HistorysEvent";
import { motion } from "framer-motion";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function ImportantEvent() {
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

  const getYouTubeVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <>
      {historicalEvents.map((item, index) => {
        if (item.events.length >= 2) {
          return (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="mb-8"
            >
              <h3 className="text-[60px] text-[#F14C40] leading-[1.2]">
                {item.year}
              </h3>
              <div className="p-4 border border-[#D2D2D2] rounded-lg">
                <div className="grid-cols-2 gap-6 lg:grid">
                  {item.events.map((events) => (
                    <div className="border border-[#D2D2D2] rounded overflow-hidden mb-4 lg:mb-0">
                      <img
                        className="object-cover w-full h-auto sm:h-[300px]"
                        src={events.images}
                      />
                      <div className="p-4">
                        <h3 className=" text-[24px] text-[#212529] font-bold leading-[1.334] mb-2">
                          {events.title}
                        </h3>
                        <div className="flex items-center mb-4">
                          <FaRegCalendarAlt
                            size={20}
                            className="mr-2 text-[#F14C40]"
                          />
                          <span className="text-[#00000099] leading-[1.75]">
                            {events.date}
                          </span>
                        </div>
                        <p className="mb-4 text-sm leading-[2.2]">
                          <FaQuoteLeft
                            size={20}
                            className="text-[#EB7474] mr-2 inline"
                          />
                          {events.quote}
                        </p>
                        <button
                          onClick={() => handleClickOpen(events)}
                          className="py-[6px] px-4 rounded text-white bg-[#EB7474] text-sm font-medium shadow-important-event leading-[1.75] transition-all duration-300 hover:bg-[#e74c3c] hover:shadow-important-event-hover"
                        >
                          XEM CHI TIẾT
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        }

        return item.events.map((events, index) => (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="mb-8"
          >
            <h3 className="text-[60px] text-[#F14C40] leading-[1.2]">
              {item.year}
            </h3>
            <div className="p-4 border border-[#D2D2D2] rounded-lg">
              <img
                className="object-cover w-full h-auto mb-2 rounded-lg "
                src={events.images}
              />
              <h3 className=" text-[34px] text-[#212529] font-bold leading-[1.235]">
                {events.title}
              </h3>
              <div className="flex items-center my-4">
                <FaRegCalendarAlt size={30} className="mr-2 text-[#F14C40]" />
                <span className="text-xl text-[#212529] leading-[1.6]">
                  {events.date}
                </span>
              </div>
              <p className="mb-4 text-xl leading-[1.6]">
                <FaQuoteLeft size={20} className="text-[#EB7474]" />
                {events.quote}
              </p>
              <button
                onClick={() => handleClickOpen(events)}
                className="py-[6px] px-4 rounded text-white bg-[#EB7474] text-sm font-medium shadow-important-event leading-[1.75] transition-all duration-300 hover:bg-[#e74c3c] hover:shadow-important-event-hover"
              >
                XEM CHI TIẾT
              </button>
            </div>
          </motion.div>
        ));
      })}
      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: "8px",
            boxShadow:
              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
          },
        }}
      >
        {event && (
          <>
            <div className="px-6 py-4 bg-[#EB7474]">
              <h3 className="text-2xl font-bold text-center leading-[1.334]">
                {event.title}
              </h3>
            </div>
            <DialogContent>
              <div className="items-center block mb-4 sm:flex">
                <FaRegCalendarAlt
                  size={30}
                  className="inline mr-2 text-[#F14C40]"
                />
                <span className="text-xl text-[#00000099] leading-[1.6]">
                  {event.description}
                </span>
              </div>
              <div className="relative pt-[56.25%] mb-6 overflow-hidden shadow-img-dialog">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    event.video
                  )}?rel=0`}
                  title={event.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="pl-4 border-l-4 border-l-[#4396E9]">
                <FaQuoteLeft
                  size={24}
                  className=" float-left mr-2 text-[#F14C40]"
                />
                <span className="text-2xl italic text-justify leading-[1.334]">
                  {event.quote}
                </span>
              </div>
            </DialogContent>
            <DialogActions>
              <button
                className="py-[6px] px-4 bg-[#ED3E32] rounded text-white text-sm leading-[1.75] font-medium shadow-important-event transition-all duration-300 hover:bg-[#A52B23] hover:shadow-button-close-dialog-hover"
                onClick={handleClose}
              >
                ĐÓNG
              </button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}

export default ImportantEvent;
