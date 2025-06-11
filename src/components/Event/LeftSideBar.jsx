import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { giaiPhongEvents } from "../../data/Events";
import BoxEvent from "../BoxEvent";

function LeftSideBar() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
      <div className="px-6 py-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[40px] leading-[1.167] font-bold text-center mb-4 text-[#E74C3C] text-shadow-event"
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
    </>
  );
}

export default LeftSideBar;
