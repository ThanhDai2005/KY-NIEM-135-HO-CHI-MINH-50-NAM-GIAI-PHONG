import { animate, motion } from "framer-motion";
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
import ShareIcon from "@mui/icons-material/Share";

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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
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
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[48px] sm:text-[64px] text-[#D32F2F] mb-[22.4px] font-bold leading-[1.2] text-center"
            >
              {score}/{totalQuestions}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 text-2xl text-[#424242] font-semibold  leading-[1.334] text-center"
            >
              {score == totalQuestions
                ? "🎉 Xuất sắc! Bạn là một chuyên gia lịch sử!"
                : score >= 7
                ? "👏 Rất tốt! Kiến thức lịch sử của bạn rất đáng nể!"
                : "💪 Hãy tiếp tục tìm hiểu thêm về lịch sử Việt Nam!"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-8 h-[10px] bg-[#FBEAEA] rounded-full w-full"
            >
              <div
                className={`h-[10px] rounded-full ${getProgressColor(
                  progress
                )} transition-all duration-300`}
                style={{ width: `${progress}%` }}
              ></div>
            </motion.div>
            <h3 className="mb-4 pb-2 text-xl text-[#212121] leading-[1.6] font-semibold border-b-2 border-b-[#D32F2F]">
              Chi tiết các câu trả lời:
            </h3>
            <div>
              {questions.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <Accordion sx={{ marginBottom: "8px" }} key={index}>
                    <AccordionSummary
                      sx={{
                        backgroundColor: `${
                          userAnswers[index]?.isCorrect ? "#4CAF50" : "#EF5350"
                        }`,
                        transition: "all 0.3 ease",
                        "&:hover": {
                          backgroundColor: `${
                            userAnswers[index]?.isCorrect
                              ? "#2E7D32"
                              : "#D32F2F"
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
                            {item?.options[item.correctAnswerIndex]}
                          </div>
                        </div>
                        <div>
                          <div className="mb-[5.6px] text-[#D32F2F] font-semibold leading-[1.75]">
                            Giải thích:
                          </div>
                          <div className="text-[#424242]">
                            {item.explanation}
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </DialogContent>
          <DialogActions
            sx={{ padding: "24px", display: "flex", justifyContent: "center" }}
          >
            <div>
              <button
                onClick={onShare}
                className="bg-[#FFC107] py-2 px-6 rounded-lg text-[15px] leading-[1.75] font-semibold mr-4 flex items-center transition-all duration-300 hover:bg-[#FFA000] hover:scale-105 active:scale-95 hover:shadow-submit-quiz-history-hover"
              >
                <ShareIcon className="mr-2" />
                Chia sẻ kết quả
              </button>
            </div>
            <div>
              <button
                className="py-2 px-6 rounded-lg border border-[#D32F2F] text-[15px] text-[#D32F2F] leading-[1.75] font-semibold transition-all duration-300 hover:border-[#B71C1C] hover:scale-105 active:scale-95"
                onClick={onClose}
              >
                Làm lại
              </button>
            </div>
          </DialogActions>
        </motion.div>
      </Dialog>
    </>
  );
}

export default QuizResult;
