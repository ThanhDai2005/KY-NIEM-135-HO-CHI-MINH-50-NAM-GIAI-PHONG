import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale("vi");
dayjs.extend(localizedFormat);

function Clock() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = now.format("dddd, D [tháng] M, YYYY, HH:mm:ss");

  return (
    <>
      <div className="text-[11.2px] text-[#040404] text-right">{formatted}</div>
    </>
  );
}

export default Clock;
