import { motion } from "framer-motion";

function IndependentPath() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="lg:text-[48px] text-[32px] text-[#F14C40] leading-[1.167] mb-4 font-bold text-shadow-event text-center">
          CON ĐƯỜNG ĐỘC LẬP
        </h3>
        <div className="mb-12">
          <img
            className="mb-4 mr-4 w-[120px] md:w-[150px] h-auto rounded-lg border-2 border-[#FFD700] shadow-aboutHCM object-cover float-left transition-all duration-300 hover:scale-105 hover:shadow-aboutHCM-hover"
            src="./images/bacHoAVT.jpg"
          />
          <p className="text-justify leading-[1.6] text-[14.4px] sm:text-[16px]">
            Sinh ra tại làng Sen, quê hương Nghệ An, từ rất sớm Bác đã rời Tổ
            quốc đi tìm đường cứu nước, bôn ba khắp năm châu để tìm con đường
            giải phóng dân tộc. Với ý chí kiên cường và tấm lòng yêu nước thương
            dân vô hạn, Bác đã đưa cách mạng Việt Nam đến bến bờ thắng lợi,
            giành lại độc lập, thống nhất cho Tổ quốc. Tư tưởng, đạo đức, phong
            cách Hồ Chí Minh – giản dị mà sâu sắc, gần gũi mà vĩ đại – mãi là
            bài học quý báu cho các thế hệ người Việt Nam. Cuộc đời của Bác là
            tấm gương sáng về lòng yêu nước, tinh thần kiên cường, đức khiêm
            nhường và sự tận tụy với nhân dân. Kỷ niệm 50 năm thống nhất đất
            nước cũng là dịp để toàn dân tộc khắc ghi chiến thắng lịch sử 1975 –
            thành quả của sự lãnh đạo sáng suốt, trong đó ánh sáng tư tưởng Hồ
            Chí Minh là kim chỉ nam soi đường. Ngày nay, tiếp nối con đường
            Người đã chọn, mỗi người Việt Nam mang trong mình trách nhiệm xây
            dựng đất nước giàu mạnh, văn minh – để xứng đáng với hy sinh của các
            thế hệ đi trước và thực hiện khát vọng mà Bác Hồ hằng ấp ủ: “Sánh
            vai cùng các cường quốc năm châu.”
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default IndependentPath;
