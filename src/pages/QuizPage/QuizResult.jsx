import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function QuizResult({
  open,
  onClose,
  score,
  totalQuestions,
  userAnswers,
  questions,
  onShare,
}) {
  const progress = score * 10;

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-[#B71C1C]";
    if (progress >= 60) return "bg-[#D32F2F]";
    if (progress >= 40) return "bg-[#EF5350]";
    return "bg-[#FFCDD2]";
  };

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            borderRadius: "16px",
          },
        }}
        fullWidth
        maxWidth="md"
        onClose={onClose}
        open={open}
      >
        <div className="p-6 bg-[#D32F2F] flex relative">
          <h3 className="flex-grow text-center text-white text-[34px] font-bold leading-[1.235]">
            Kết quả của bạn
          </h3>
          <IconButton
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent>
          <h3 className="text-[64px] text-[#D32F2F] mb-[22.4px] font-bold leading-[1.2] text-center">
            {score}/{totalQuestions}
          </h3>
          <div className="mb-8 text-2xl text-[#424242] font-semibold  leading-[1.334] text-center">
            {score >= 7
              ? "👏 Rất tốt! Kiến thức lịch sử của bạn rất đáng nể!"
              : "💪 Hãy tiếp tục tìm hiểu thêm về lịch sử Việt Nam!"}
          </div>
          <div className="mb-6 h-[10px] bg-[#FBEAEA] rounded-full w-full">
            <div
              className={`h-[10px] rounded-full ${getProgressColor(
                progress
              )} transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <h3 className="mb-4 pb-2 text-xl text-[#212121] leading-[1.6] font-semibold border-b-2 border-b-[#D32F2F]">
            Chi tiết các câu trả lời:
          </h3>
          <div>
            {questions.map((item, index) => (
              <Accordion sx={{ marginBottom: "8px" }} key={index}>
                <AccordionSummary
                  sx={{
                    backgroundColor: `${
                      userAnswers[index]?.isCorrect ? "#4CAF50" : "#EF5350"
                    }`,
                    transition: "all 0.3 ease",
                    "&:hover": {
                      backgroundColor: `${
                        userAnswers[index]?.isCorrect ? "#2E7D32" : "#D32F2F"
                      }`,
                    },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <div className="flex items-center">
                    {userAnswers[index]?.isCorrect ? (
                      <CheckCircleIcon className="mr-8 text-white" />
                    ) : (
                      <CancelIcon className="mr-8 text-white" />
                    )}
                    <span className="font-medium text-white">
                      Câu {index + 1}: {item.question}
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="space-y-4 ">
                    <div>
                      <div className="mb-[5.6px] text-[#D32F2F] font-semibold leading-[1.75]">
                        Đáp án của bạn:
                      </div>
                      <div className="text-[#424242]">
                        {item?.options[userAnswers[index]?.selectedAnswer]}
                      </div>
                    </div>
                    <div>
                      <div className="mb-[5.6px] text-[#D32F2F] font-semibold leading-[1.75]">
                        Đáp án đúng:
                      </div>
                      <div className="text-[#424242]">
                        {item?.options[userAnswers[index]?.correctAnswerIndex]}
                      </div>
                    </div>
                    <div>
                      <div className="mb-[5.6px] text-[#D32F2F] font-semibold leading-[1.75]">
                        Giải thích:
                      </div>
                      <div className="text-[#424242]">{item.explanation}</div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={onClose}>Save changes</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default QuizResult;
