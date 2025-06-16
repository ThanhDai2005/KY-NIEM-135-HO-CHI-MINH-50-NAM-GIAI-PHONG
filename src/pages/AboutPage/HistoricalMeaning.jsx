import { motion } from "framer-motion";

function HistoricalMeaning() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="relative text-[40px] mb-12 text-[#ED3E32] font-bold text-center after:absolute after:h-[4px] after:w-[100px] after:bg-[#007BFF] after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5">
          Ý NGHĨA LỊCH SỬ
        </h3>
        <div className="grid grid-cols-2 gap-6 mt-6 mb-12">
          <div className="p-6 transition-all duration-300 bg-white rounded shadow-historical-meaning hover:scale-105">
            <h3 className="text-2xl font-bold">
              135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH (19/5/1890 – 19/5/2025)
            </h3>
            <p className="text-justify leading-[1.6]">
              Chủ tịch Hồ Chí Minh là biểu tượng vĩ đại của lòng yêu nước, ý chí
              kiên cường và khát vọng độc lập tự do của dân tộc Việt Nam. Người
              đã khai sáng con đường cách mạng giải phóng dân tộc, sáng lập Đảng
              Cộng sản Việt Nam và lãnh đạo nhân dân giành thắng lợi vẻ vang qua
              các cuộc kháng chiến chống thực dân, đế quốc, đưa nước ta từ thân
              phận nô lệ trở thành quốc gia độc lập. Không chỉ là lãnh tụ của
              dân tộc, Bác Hồ còn là danh nhân văn hóa kiệt xuất, để lại di sản
              tư tưởng, đạo đức, phong cách mẫu mực, mãi mãi là tấm gương sáng
              cho các thế hệ Việt Nam noi theo trên con đường xây dựng và bảo vệ
              Tổ quốc.
            </p>
          </div>
          <div className="p-6 transition-all duration-300 bg-white rounded shadow-historical-meaning hover:scale-105 ">
            <h3 className="text-2xl font-bold">
              50 NĂM GIẢI PHÓNG MIỀN NAM THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 –
              30/4/2025)
            </h3>
            <p className="text-justify leading-[1.6]">
              Ngày 30 tháng 4 năm 1975 đã đi vào lịch sử dân tộc như một mốc son
              chói lọi, đánh dấu chiến thắng hoàn toàn của cuộc kháng chiến
              chống Mỹ cứu nước, giải phóng miền Nam và thống nhất đất nước. Đây
              là ngày non sông thu về một mối, đất nước trở lại nguyên vẹn, nhân
              dân được hưởng tự do, hòa bình, chấm dứt hơn 100 năm nô lệ dưới
              ách thực dân, đế quốc. Mốc son lịch sử này không chỉ đánh dấu sự
              hy sinh và đóng góp to lớn của các thế hệ đi trước, mà còn khẳng
              định sức mạnh đoàn kết, ý chí kiên cường của dân tộc Việt Nam
              trong hành trình giành lại độc lập và tự do.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default HistoricalMeaning;
