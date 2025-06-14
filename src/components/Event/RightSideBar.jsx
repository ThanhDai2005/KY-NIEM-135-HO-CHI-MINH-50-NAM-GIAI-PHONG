import FavoriteIcon from "@mui/icons-material/Favorite";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import dayjs from "dayjs";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { motion } from "framer-motion";
import { quotes } from "../../data/Quotes";
import { AnimatePresence } from "framer-motion";

function RightSideBar() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wish, setWish] = useState([]);
  const now = dayjs();
  const formatted = now.format("HH:mm:ss D/M/YYYY");
  const [quote, setQuote] = useState(quotes[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setWish([
        ...wish,
        {
          id: Date.now(),
          name: name,
          message: message,
          time: formatted,
        },
      ]);
    }
    setName("");
    setMessage("");
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <>
      <div className="p-6 m-4 rounded-lg shadow-gratitude ">
        <h3 className="flex items-center gap-2 text-xl font-bold mb-[7px]">
          <FavoriteIcon className="text-[#ED3E32]" />
          <span>Lời tri ân</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Tên của bạn"
            margin="normal"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Lời Tri ân"
            margin="normal"
            variant="outlined"
            size="small"
            value={message}
            multiline
            rows={4}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
          <button
            type="submit"
            className="w-full mt-4 py-[6px] px-4  text-white text-sm rounded flex items-center gap-2 justify-center font-medium shadow-submit bg-gradient-to-br from-[rgb(213,92,92)] to-[rgb(251,209,0)] hover:text-black hover:from-[rgb(255,163,163)] hover:to-[rgb(255,247,210)] hover:shadow-submit-hover transition-all duration-300"
          >
            <span>GỬI CẢM NGHĨ</span>
            <SendIcon fontSize="small" />
          </button>
        </form>
        {wish.length > 0 && (
          <>
            <div className="mt-8">
              <h3 className="font-medium text-[#FD0000] leading-[1.75] mb-[5.6px]">
                Lời tri ân đã gửi:
              </h3>
              <Marquee pauseOnHover>
                {wish.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 pb-6 bg-[linear-gradient(45deg,#f5f5f5_30%,#ffffff_90%)] m-2 min-w-[280px] rounded shadow-marquee transition-all duration-200 hover:shadow-marquee-hover hover:translate-y-[-2px]"
                  >
                    <h3 className="text-sm text-[#4396E9] font-bold leading-[1.57]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#00000099] italic">
                      {item.message}
                    </p>
                    <div className="mt-2 text-xs text-[#00000099] leading-[1.66] opacity-70">
                      {item.time}
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </>
        )}
      </div>
      <div className="sticky top-[80px] z-10 py-6 h-[calc(100vh-80px)] ">
        <div className="p-6 m-4 text-[#000000] rounded-lg shadow-quote bg-[linear-gradient(135deg,rgb(227,149,149),rgb(248,220,78))]">
          <div className="flex items-center gap-2 mb-[7px]">
            <FaQuoteLeft className="text-xl" />
            <span className="text-xl font-bold leading-[1.6]">
              Lời dạy của Bác
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={quote.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[19.2px] leading-[1.6] italic mb-2">
                {quote.text}
              </p>
              <div className="italic opacity-80">{quote.context}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-2 text-end">
            <IconButton
              onClick={handleRandom}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <RefreshIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
