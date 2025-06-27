import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { giaiPhongEvents, hcmEvents } from "../../data/Events";
import BoxEvent from "../BoxEvent";
import { hoChiMinhTimeline } from "../../data/HoChiMinhTimeLine";
import HoChiMinhTimeLine from "../BoxEvent/HoChiMinhTimeLine";

function LeftSideBar() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="px-4 py-10 md:px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-[32px] lg:text-[40px] leading-[1.167] font-bold text-center mb-4 text-[#E74C3C] text-shadow-event"
        >
          CÁC SỰ KIỆN KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC (30/4/1975–30/4/2025)
        </motion.h3>
        <div className="my-8">
          <Slider {...settings}>
            {giaiPhongEvents.map((item, index) => (
              <BoxEvent index={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="px-4 py-10 md:px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-[32px] lg:text-[40px] leading-[1.167] font-bold text-center mb-4 text-shadow-event text-[#e74c3c]"
        >
          CÁC SỰ KIỆN KỶ NIỆM 135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH (19/5/1890
          – 19/5/2025)
        </motion.h3>
        <div className="my-8">
          <Slider {...settings}>
            {hcmEvents.map((item, index) => (
              <BoxEvent index={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="px-4 py-6 mx-auto md:px-6 md:py-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl lg:text-4xl leading-[1.5] font-bold text-center mb-12 text-shadow-event text-[#f14c40]"
        >
          CON ĐƯỜNG GIẢI PHÓNG DÂN TỘC CỦA CHỦ TỊCH HỒ CHÍ MINH
        </motion.h3>
        {hoChiMinhTimeline.map((item, index) => (
          <HoChiMinhTimeLine key={index} index={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default LeftSideBar;
