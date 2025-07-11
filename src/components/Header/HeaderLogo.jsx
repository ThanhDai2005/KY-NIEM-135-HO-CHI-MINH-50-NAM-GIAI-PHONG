import { motion } from "framer-motion";

function HeaderLogo() {
  return (
    <>
      <div className="flex items-center gap-4 lg:gap-6 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/SGU-LOGO.png"
            alt="Logo SGU"
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain min-w-[80px] min-h-[80px] transition-all duration-300 hover:scale-105"
          />
        </motion.div>
        <div>
          <h3 className=" text-[11.2px] sm:text-base text-[#555555] mb-2 italic">
            Trường Đại học Sài Gòn - Khoa Công Nghệ Thông tin nhiệt liệt chào
            mừng
          </h3>
          <h3 className="text-base md:text-xl text-[#C41E3A] mb-1 font-bold text-shadow-gold">
            KỶ NIỆM 135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH (19/5/1890 –
            19/5/2025)
          </h3>
          <h3 className="text-base md:text-xl text-[#C41E3A] mb-1 font-bold text-shadow-gold">
            CHÀO MỪNG 50 NĂM THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 – 30/4/2025)
          </h3>
          <p className="text-[14.4px] sm:text-base text-[#555555] italic">
            Tôn vinh những dấu mốc lịch sử hào hùng và truyền cảm hứng về lòng
            yêu nước, tự hào dân tộc.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeaderLogo;
