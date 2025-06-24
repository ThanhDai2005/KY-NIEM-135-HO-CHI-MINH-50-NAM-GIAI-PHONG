import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function ExplanationDialog({ open, onClose, isCorrect, explanation }) {
  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: "16px",
        },
      }}
      onClose={onClose}
      open={open}
    >
      <div
        className={`py-4 px-6 ${isCorrect ? "bg-[#4CAF50]" : "bg-[#EF5350]"}`}
      >
        <h3 className="text-white text-xl leading-[1.6] font-medium">
          {isCorrect ? "Chính xác!" : "Chưa đúng!"}
        </h3>
      </div>
      <DialogContent>
        <p className="text-[#212121] text-justify">{explanation}</p>
      </DialogContent>
      <DialogActions>
        <button
          className="py-2 px-6 bg-[#D32F2F] text-white text-sm leading-[1.75] rounded-lg font-semibold transition-all duration-300 hover:shadow-submit-quiz-history-hover hover:bg-[#B71C1C]"
          onClick={onClose}
        >
          Câu tiếp theo
        </button>
      </DialogActions>
    </Dialog>
  );
}

export default ExplanationDialog;
