import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function AboutHCM() {
  const messages = [
    {
      title: "Thông điệp từ Tổng Bí thư Tô Lâm",
      content:
        "Chủ tịch Hồ Chí Minh - vị lãnh tụ vĩ đại của dân tộc Việt Nam, người đã dẫn dắt nhân dân ta đi từ thắng lợi này đến thắng lợi khác. Với sự nghiệp cách mạng vĩ đại, Chủ tịch Hồ Chí Minh không chỉ là người thầy của dân tộc mà còn là biểu tượng cao cả của sự hy sinh và cống hiến. Mỗi bước đi của Người là một dấu ấn lịch sử sâu sắc, mở đường cho sự nghiệp giải phóng đất nước, giành lại độc lập tự do cho dân tộc. Nhân kỷ niệm 135 năm ngày sinh của Người, chúng ta càng nhận thức rõ hơn trách nhiệm của mình trong việc bảo vệ và phát huy những giá trị mà Người để lại.",
      image: "./images/TongBiTHuToLam.jpg",
    },
    {
      title: "Thông điệp từ Chủ tịch nước Tô Lâm",
      content:
        "Kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh là dịp để chúng ta ôn lại và phát huy những giá trị tư tưởng, đạo đức, phong cách của Người. Hồ Chí Minh không chỉ là vị lãnh tụ có tầm nhìn chiến lược, mà còn là người đã để lại những bài học quý báu về tinh thần yêu nước, về đạo đức cách mạng, về sự hy sinh vì lợi ích của dân tộc. Tất cả chúng ta, mỗi công dân Việt Nam, đều có trách nhiệm học hỏi và làm theo tấm gương đạo đức của Người trong mọi lĩnh vực của cuộc sống.",
      image: "./images/TongBiTHuToLam.jpg",
    },
    {
      title: "Thông điệp từ Thủ tướng Chính phủ Phạm Minh Chính",
      content:
        "50 năm thống nhất đất nước là một chặng đường vẻ vang của dân tộc ta, là minh chứng hùng hồn cho sức mạnh đại đoàn kết toàn dân tộc. Chiến thắng 30/4/1975 không chỉ là kết quả của một cuộc đấu tranh vĩ đại, mà còn là tầm nhìn chiến lược, sự quyết tâm, kiên cường của nhân dân ta dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Nhìn lại 50 năm qua, đất nước chúng ta đã đạt được nhiều thành tựu to lớn trên mọi lĩnh vực, từ chính trị, kinh tế đến văn hóa, xã hội. Tuy nhiên, hành trình phát triển vẫn còn dài, và chúng ta phải tiếp tục làm việc chăm chỉ, đoàn kết để xây dựng một Việt Nam giàu mạnh, văn minh, xứng đáng với hy sinh của các thế hệ đi trước.",
      image: "./images/ThuTuongPhamMinhChinh.jpg",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <div className="grid-cols-2 gap-6 lg:grid ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h3 className="relative text-[32px] mb-12 text-[#ED3E32] font-bold text-center after:absolute after:h-[4px] after:w-[100px] after:bg-[#007BFF] after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5">
            CON NGƯỜI VĨ ĐẠI
          </h3>
          <div>
            <img
              className="mb-4 mr-4 float-left border-2 w-[150px] h-auto object-cover border-[#FFD700] rounded shadow-aboutHCM transition-all duration-300 hover:scale-105"
              src="./images/bacHoAVT.jpg"
            />
            <p className="text-justify leading-[1.6]">
              Sinh ra tại làng Sen, quê hương Nghệ An, từ rất sớm Bác đã rời Tổ
              quốc đi tìm đường cứu nước, bôn ba khắp năm châu để tìm con đường
              giải phóng dân tộc. Với ý chí kiên cường và tấm lòng yêu nước
              thương dân vô hạn, Bác đã đưa cách mạng Việt Nam đến bến bờ thắng
              lợi, giành lại độc lập, thống nhất cho Tổ quốc. Tư tưởng, đạo đức,
              phong cách Hồ Chí Minh – giản dị mà sâu sắc, gần gũi mà vĩ đại –
              mãi là bài học quý báu cho các thế hệ người Việt Nam. Cuộc đời của
              Bác là tấm gương sáng về lòng yêu nước, tinh thần kiên cường, đức
              khiêm nhường và sự tận tụy với nhân dân. Kỷ niệm 50 năm thống nhất
              đất nước cũng là dịp để toàn dân tộc khắc ghi chiến thắng lịch sử
              1975 – thành quả của sự lãnh đạo sáng suốt, trong đó ánh sáng tư
              tưởng Hồ Chí Minh là kim chỉ nam soi đường. Ngày nay, tiếp nối con
              đường Người đã chọn, mỗi người Việt Nam mang trong mình trách
              nhiệm xây dựng đất nước giàu mạnh, văn minh – để xứng đáng với hy
              sinh của các thế hệ đi trước và thực hiện khát vọng mà Bác Hồ hằng
              ấp ủ: “Sánh vai cùng các cường quốc năm châu.”
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="relative text-[32px] mb-12 text-[#ED3E32] font-bold text-center after:absolute after:h-[4px] after:w-[100px] after:bg-[#007BFF] after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5">
            THÔNG ĐIỆP HÔM NAY
          </h3>
          <div>
            {messages.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded == index}
                onChange={() => setExpanded(expanded == index ? null : index)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    padding: "16px 20px",
                    color: expanded == index ? "#052C65" : "#212529",
                    backgroundColor: expanded == index ? "#CFE2FF" : "#fff",
                  }}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <div className="flex items-center ">
                    <img
                      className="h-[50px] w-[50px] bg-white object-cover rounded-full mr-4"
                      src={item.image}
                    />
                    <div className="text-2xl">{item.title}</div>
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: "16px 20px",
                  }}
                >
                  <p className="mb-12 text-[#212529] text-justify">
                    {item.content}
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default AboutHCM;
