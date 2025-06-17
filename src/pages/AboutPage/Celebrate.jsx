import { motion } from "framer-motion";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { duration } from "@mui/material/styles";

function Celebrate() {
  const timelineSteps = [
    {
      year: "2020",
      event: "Kỷ niệm 130 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2015",
      event: "Kỷ niệm 125 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2010",
      event: "Kỷ niệm 120 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2005",
      event: "Kỷ niệm 115 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
  ];

  const galleryImages = [
    "./images/HATB1.jpg",
    "./images/HATB3.jpg",
    "./images/HATB4.jpg",
    "./images/HATB2.jpg",
    "./images/HATB5.jpg",
    "./images/HATB6.jpg",
  ];

  return (
    <>
      <div className="grid-cols-5 gap-6 md:grid">
        <div className="col-span-2">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-2xl mb-12 text-[#ED3E32] font-bold text-center"
          >
            CÁC LẦN KỶ NIỆM TRƯỚC
          </motion.h3>

          <Stepper orientation="vertical">
            {timelineSteps.map((item, index) => (
              <Step key={index} active={true}>
                <StepLabel>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <h3 className="text-xl font-Roboto leading-[1.6] font-normal">
                      {item.year}
                    </h3>
                    <p className="text-base font-normal font-Roboto">
                      {item.event}
                    </p>
                  </motion.div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="col-span-3">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-2xl mb-12 text-[#ED3E32] font-bold text-center"
          >
            HÌNH ẢNH TIÊU BIỂU
          </motion.h3>

          <div className="grid-cols-2 gap-6 sm:grid">
            {galleryImages.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ transition: { duration: 0.3 }, scale: 1.05 }}
                className="mt-6"
              >
                <img
                  className="h-[150px] w-full rounded object-cover "
                  src={item}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Celebrate;
