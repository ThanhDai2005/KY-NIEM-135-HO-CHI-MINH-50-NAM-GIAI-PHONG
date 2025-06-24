import { motion } from "framer-motion";

function StartScreen({ onStartQuiz }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-[64px] mb-8 text-[#D32F2F] font-bold text-center text-shadow-quiz-history">
            THỬ TÀI LỊCH SỬ
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-2xl max-w-[600px] shadow-quiz-history mx-auto">
            <p className="mb-6 text-[#212121] leading-[1.8] text-justify">
              Chào mừng bạn đến với bài quiz Lịch sử Việt Nam! Hãy thử thách
              kiến thức về sự kiện Giải phóng miền Nam 30/4/1975 và cuộc đời Chủ
              tịch Hồ Chí Minh qua 10 câu hỏi thú vị.
              <br />
              Mỗi câu hỏi có 4 lựa chọn, thời gian trả lời là 30 giây. Trả lời
              đúng để nhận điểm số, trả lời sai không bị trừ điểm.
              <br />
              Sau khi hoàn thành, bạn có thể xem giải thích đáp án và chia sẻ
              kết quả với bạn bè. Đây là cơ hội để tìm hiểu thêm về lịch sử dân
              tộc và những con người đã góp phần xây dựng đất nước.
              <br />
              <strong>Sẵn sàng thử sức?</strong> Nhấn <strong>"Bắt đầu"</strong>{" "}
              để khởi động ngay!
            </p>
            <div className="text-center">
              <button
                onClick={onStartQuiz}
                className="py-4 px-12 text-[19.2px] bg-[#D32F2F] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#B71C1C] hover:shadow-button-quiz-history-hover"
              >
                Bắt đầu
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default StartScreen;
