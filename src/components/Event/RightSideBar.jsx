import FavoriteIcon from "@mui/icons-material/Favorite";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

function RightSideBar() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(message);
  };

  return (
    <>
      <div className="p-6 m-4 rounded-lg shadow-lg ">
        <h6 className="flex items-center gap-2 text-xl font-bold mb-[7px]">
          <span>
            <FavoriteIcon className="text-[#ED3E32]" />
          </span>
          <span>Lời tri ân</span>
        </h6>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Tên của bạn"
            margin="normal"
            variant="outlined"
            size="small"
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
            <span>
              <SendIcon fontSize="small" />
            </span>
          </button>
        </form>
      </div>
    </>
  );
}

export default RightSideBar;
