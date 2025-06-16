import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function BackToTopButton() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {scroll && (
          <motion.button
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackToTop}
            className="fixed bottom-20 right-6 z-30 flex items-center justify-center rounded-full bg-[#ED6C02] w-10 h-10 shadow-back-to-top text-white transition-all duration-300 hover:bg-[#e65100]"
          >
            <KeyboardArrowUpIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default BackToTopButton;
