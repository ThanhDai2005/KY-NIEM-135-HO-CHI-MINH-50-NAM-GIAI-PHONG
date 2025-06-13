import { motion } from "framer-motion";

function HoChiMinhTimeLine(props) {
  const { item, index } = props;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex mb-12"
      >
        <div className="mb-2 text-center">
          <h3 className="text-xl text-[#0E6EFD] font-bold leading-[1.6] cursor-pointer transition-all duration-300 hover:scale-110">
            {item.year}
          </h3>
        </div>
        <div className="ml-10 flex-grow p-4 bg-white border border-l-[10px] border-l-[#DC3545] rounded shadow-box-timeline transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-4">
            <img
              className="object-cover w-48 h-48 rounded-[6px]"
              src={item.image}
            />
            <div>
              <h3 className="mb-2 text-2xl line-clamp-3 ">{item.event}</h3>
              <p className="text-[#212529BF] line-clamp-4">{item.details}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default HoChiMinhTimeLine;
