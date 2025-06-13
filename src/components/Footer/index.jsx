import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventIcon from "@mui/icons-material/Event";
import HistoryIcon from "@mui/icons-material/History";
import QuizIcon from "@mui/icons-material/Quiz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Footer() {
  const menuItems = [
    {
      title: "Trang Chủ",
      path: "/",
      icon: <HomeIcon fontSize="small" />,
    },
    {
      title: "Góc Tự Hào",
      path: "/about",
      icon: <EmojiEventsIcon fontSize="small" />,
    },
    {
      title: "Hoạt Động Kỷ Niệm",
      path: "/events",
      icon: <EventIcon fontSize="small" />,
    },
    {
      title: "Con Đường Độc Lập",
      path: "/history",
      icon: <HistoryIcon fontSize="small" />,
    },
    {
      title: "Đố Vui Lịch Sử",
      path: "/quiz-history",
      icon: <QuizIcon fontSize="small" />,
    },
  ];

  const menuContact = [
    {
      title:
        "Đại học Sài Gòn, 273 Đ. An Dương Vương, Phường 2, Quận 5, Hồ Chí Minh",
      icon: <LocationOnIcon />,
    },
    {
      title: "daotao.sgu.edu.vn",
      icon: <EmailIcon />,
    },
    {
      title: "(0283) 8352309",
      icon: <PhoneIcon />,
    },
    {
      title: "Thứ 2 - Thứ 6: 8:00 - 17:00",
      icon: <AccessTimeIcon />,
    },
  ];

  return (
    <>
      <footer className=" bg-[#1976D2]">
        <div className="container pt-[50px] pb-[20px] px-3">
          <div className="text-[#000000] grid grid-cols-4 gap-6">
            <div>
              <h3 className="relative mb-5 text-2xl font-bold text-white after:absolute after:h-[3px] after:w-[50px] after:left-0 after:-bottom-2 after:bg-[#FFD700] after:rounded-full">
                CHÀO MỪNG
              </h3>
              <p className="mb-5 leading-[1.8] text-justify opacity-90">
                Kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh (19/5/1890
                –19/5/2025).
                <br />
                Chào mừng 50 năm Giải phóng miền Nam, thống nhất đất nước
                (30/4/1975 – 30/4/2025).
                <br />
                Tôn vinh chiến thắng vĩ đại của dân tộc, khẳng định ý chí độc
                lập, tự chủ và khát vọng hòa bình.
              </p>
            </div>
            <div>
              <h3 className="relative mb-5 text-xl font-bold text-white after:absolute after:h-[3px] after:w-[50px] after:left-0 after:-bottom-2 after:bg-[#FFD700] after:rounded-full">
                SỰ KIỆN
              </h3>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="flex items-center py-2 mb-2 transition-all duration-300 hover:text-[#E53935] hover:scale-105 hover:translate-x-[10px]"
                    >
                      <span className="mr-2">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="relative mb-5 text-xl font-bold text-white after:absolute after:h-[3px] after:w-[50px] after:left-0 after:-bottom-2 after:bg-[#FFD700] after:rounded-full">
                LIÊN HỆ
              </h3>
              <ul>
                {menuContact.map((item, index) => (
                  <li key={index}>
                    <div className="flex items-center mb-4">
                      <span className="mr-4">{item.icon}</span>
                      <span className="opacity-90">{item.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="relative mb-5 text-xl font-bold text-white after:absolute after:h-[3px] after:w-[50px] after:left-0 after:-bottom-2 after:bg-[#FFD700] after:rounded-full">
                ĐỊA CHỈ
              </h3>
              <div className="w-full h-[180px] rounded-xl overflow-hidden mb-4 border border-[#5E9393] shadow-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.339453952367!2d106.67968337485674!3d10.75991708938788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2s!4v1749829104344!5m2!1svi!2s"
                  className="w-full h-full border-none"
                  allowFullScreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-t-[#0000001A] text-[#000000] text-center">
            <p className="opacity-90">
              © 2025 Kỷ niệm 50 năm Ngày Giải phóng miền Nam, 135 năm Ngày sinh
              Chủ tịch Hồ Chí Minh
            </p>
            <p className="opacity-80 mt-[10px]">
              Design by: Nguyễn Văn Thành Đại
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
