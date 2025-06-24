import { motion } from "framer-motion";

function QuizQuestionCard({
  currentQuestion,
  totalQuestions,
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  timeLeft,
  onSubmit,
}) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-[#B71C1C]";
    if (progress >= 60) return "bg-[#D32F2F]";
    if (progress >= 40) return "bg-[#EF5350]";
    return "bg-[#FFCDD2]";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 pb-6 mt-8 bg-white shadow-quiz-history-question rounded-2xl">
        <h2 className="text-lg font-semibold leading-[1.6] text-[#212121] mb-4">
          Câu hỏi {currentQuestion + 1}/{totalQuestions}
        </h2>

        <div className="w-full bg-[#FBEAEA] rounded h-2 mb-4">
          <div
            className={`h-2 rounded ${getProgressColor(
              progress
            )} transition-all duration-300`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h3 className="mb-6 text-2xl font-semibold text-[#212121] leading-[1.334]">
          {question}
        </h3>

        <div>
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <label className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-[#FDF4F4]">
                <input
                  type="radio"
                  value={index}
                  onChange={onAnswerSelect}
                  checked={selectedAnswer == index}
                  className="mr-2 w-5 h-5 accent-[#D32F2F] cursor-pointer bg-radio"
                />
                <span className="text-[#424242]">{option}</span>
              </label>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-[#424242]">
            Thời gian còn lại: {timeLeft} giây
          </p>
          <button
            disabled={selectedAnswer == null}
            className={`py-2 px-6 min-w-[120px] rounded-lg text-sm   font-semibold leading-[1.75] transition-all duration-300 hover:scale-105 hover:shadow-submit-quiz-history-hover ${
              selectedAnswer == null
                ? "bg-[#F2C0C0] text-[#B38E97] cursor-not-allowed"
                : "bg-[#D32F2F] text-white hover:bg-[#B71C1C] active:scale-95"
            }`}
            onClick={onSubmit}
          >
            Trả lời
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default QuizQuestionCard;
