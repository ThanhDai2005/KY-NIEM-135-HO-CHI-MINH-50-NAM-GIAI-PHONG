import RightSideBar from "../../components/Event/RightSideBar";
import AboutHCM from "./AboutHCM";
import Celebrate from "./Celebrate";
import HistoricalMeaning from "./HistoricalMeaning";

function AboutPage() {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 p-4 lg:p-6 md:col-span-8 lg:col-span-9 ">
              <div className="px-3 py-12">
                <AboutHCM />
                <HistoricalMeaning />
                <Celebrate />
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

export default AboutPage;
