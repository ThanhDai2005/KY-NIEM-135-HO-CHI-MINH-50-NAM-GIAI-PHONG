import { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventIcon from "@mui/icons-material/Event";
import HistoryIcon from "@mui/icons-material/History";
import QuizIcon from "@mui/icons-material/Quiz";

function Navbar() {
  const menuItems = [
    {
      title: "Trang Chủ",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Góc Tự Hào",
      path: "/about",
      icon: <EmojiEventsIcon />,
    },
    {
      title: "Hoạt Động Kỷ Niệm",
      path: "/events",
      icon: <EventIcon />,
    },
    {
      title: "Con Đường Độc Lập",
      path: "/history",
      icon: <HistoryIcon />,
    },
    {
      title: "Đố Vui Lịch Sử",
      path: "/quiz-history",
      icon: <QuizIcon />,
    },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="sticky top-0 z-20 bg-gradient-to-r from-[#98D7EC] via-[#1D82E0] to-[#98D7EC] shadow-md py-4 md:py-2 flex items-center justify-between md:justify-center">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer} size="large">
            <MenuIcon className="text-black" />
          </IconButton>
        </div>

        {/* Desktop menu */}
        <ul className="items-center hidden gap-4 md:flex">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `py-2 px-[18px] font-semibold flex items-center gap-2 transition-all duration-300 ${
                    isActive ? "text-[#F1E320]" : "text-[#320909]"
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 220,
            background:
              "linear-gradient(to right, rgb(152, 215, 236), rgb(29, 130, 224))",
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.title} onClick={toggleDrawer}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-2 py-2 px-[18px] font-semibold transition-all ${
                    isActive ? "text-[#F1E320]" : "text-[#320909]"
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
