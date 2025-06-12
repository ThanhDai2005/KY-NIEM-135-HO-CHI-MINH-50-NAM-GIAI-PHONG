import { motion } from "framer-motion";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function BoxEvent(props) {
  const { item, index } = props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          type: "spring",
          stiffness: 100,
          damping: 10,
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
            onClick={handleClickOpen}
          >
            XEM CHI TIẾT
          </button>
        </div>
      </motion.div>

      <Dialog
        onClose={handleClose}
        open={open}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          },
        }}
      >
        <div className="py-2 px-4 bg-[#EB7474] flex items-center ">
          <h2 className="flex-grow text-2xl font-bold text-center text-white text-shadow-title-dialog">
            {item.title}
          </h2>
          <IconButton
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "#ffffff1a",
              },
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent
          sx={{
            p: 0,
          }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <CalendarTodayIcon className="mr-2 text-[#EB7474]" />
              <span className="text-xl">{item.date}</span>
            </div>
            <div className="flex items-center">
              <LocationOnIcon className="mr-2 text-[#EB7474]" />
              <span className="text-xl">{item.location}</span>
            </div>
          </div>
          <div className="px-6 mb-6">
            {item.video ? (
              <>
                <div className="relative pt-[56.25%] overflow-hidden rounded-xl shadow-img-dialog">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                      item.video
                    )}?rel=0`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            ) : (
              <>
                <img
                  className="object-contain w-full h-auto rounded-xl shadow-img-dialog"
                  src={item.image}
                />
              </>
            )}
          </div>
          <div className="p-6">
            <div className="p-6 mb-6 bg-[#EBF4FF] rounded-xl border border-[#BCDBFF]">
              <h3 className="text-xl text-[#4396E9] font-bold leading-[1.8]">
                {item.description}
              </h3>
            </div>
          </div>
          <div className="p-6 bg-[#FAFAFA] border border-[#EDEDED] rounded-xl"></div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default BoxEvent;
