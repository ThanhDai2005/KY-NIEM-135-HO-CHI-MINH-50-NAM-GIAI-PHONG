import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { giaiPhongEvents, hcmEvents } from "../data/Events";
import BoxEvent from "../components/BoxEvent";
import RightSideBar from "../components/Event/RightSideBar";

function EventsPage() {
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
      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 p-4 lg:col-span-9 lg:p-6 md:col-span-8">
              <div className="px-4 py-10 md:px-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-[32px] lg:text-[40px] leading-[1.167] font-bold text-center mb-4 text-[#E74C3C] text-shadow-event"
                >
                  CÁC SỰ KIỆN KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC
                  (30/4/1975–30/4/2025)
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
                  className="text-2xl sm:text-[32px] lg:text-[40px] leading-[1.167] font-bold text-center mb-4 text-[#E74C3C] text-shadow-event"
                >
                  CÁC SỰ KIỆN KỶ NIỆM 135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH
                </motion.h3>
                <div className="my-8">
                  <Slider {...settings}>
                    {hcmEvents.map((item, index) => (
                      <BoxEvent index={index} item={item} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsPage;
