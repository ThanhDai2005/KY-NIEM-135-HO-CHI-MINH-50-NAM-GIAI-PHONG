import { FaQuoteLeft, FaRegCalendarAlt } from "react-icons/fa";
import { historicalEvents } from "../../data/HistorysEvent";
import { motion } from "framer-motion";

function ImportantEvent() {
  return (
    <>
      {historicalEvents.map((item, index) => {
        if (item.events.length >= 2) {
          return (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="mb-8"
            >
              <h3 className="text-[60px] text-[#F14C40] leading-[1.2]">
                {item.year}
              </h3>
              <div className="p-4 border border-[#D2D2D2] rounded-lg">
                <div className="grid-cols-2 gap-6 lg:grid">
                  {item.events.map((events) => (
                    <div className="border border-[#D2D2D2] rounded overflow-hidden mb-4 lg:mb-0">
                      <img
                        className="object-cover w-full h-auto sm:h-[300px]"
                        src={events.images}
                      />
                      <div className="p-4">
                        <h3 className=" text-[24px] text-[#212529] font-bold leading-[1.334] mb-2">
                          {events.title}
                        </h3>
                        <div className="flex items-center mb-4">
                          <FaRegCalendarAlt
                            size={20}
                            className="mr-2 text-[#F14C40]"
                          />
                          <span className="text-[#00000099] leading-[1.75]">
                            {events.date}
                          </span>
                        </div>
                        <p className="mb-4 text-sm leading-[2.2]">
                          <FaQuoteLeft
                            size={20}
                            className="text-[#EB7474] mr-2 inline"
                          />
                          {events.quote}
                        </p>
                        <button className="py-[6px] px-4 rounded text-white bg-[#EB7474] text-sm font-medium shadow-important-event leading-[1.75] transition-all duration-300 hover:bg-[#e74c3c] hover:shadow-important-event-hover">
                          XEM CHI TIẾT
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        }

        return item.events.map((events, index) => (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="mb-8"
          >
            <h3 className="text-[60px] text-[#F14C40] leading-[1.2]">
              {item.year}
            </h3>
            <div className="p-4 border border-[#D2D2D2] rounded-lg">
              <img
                className="object-cover w-full h-auto mb-2 rounded-lg "
                src={events.images}
              />
              <h3 className=" text-[34px] text-[#212529] font-bold leading-[1.235]">
                {events.title}
              </h3>
              <div className="flex items-center my-4">
                <FaRegCalendarAlt size={30} className="mr-2 text-[#F14C40]" />
                <span className="text-xl text-[#212529] leading-[1.6]">
                  {events.date}
                </span>
              </div>
              <p className="mb-4 text-xl leading-[1.6]">
                <FaQuoteLeft size={20} className="text-[#EB7474]" />
                {events.quote}
              </p>
              <button className="py-[6px] px-4 rounded text-white bg-[#EB7474] text-sm font-medium shadow-important-event leading-[1.75] transition-all duration-300 hover:bg-[#e74c3c] hover:shadow-important-event-hover">
                XEM CHI TIẾT
              </button>
            </div>
          </motion.div>
        ));
      })}
    </>
  );
}

export default ImportantEvent;
