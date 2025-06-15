import RightSideBar from "../../components/Event/RightSideBar";
import AboutHCM from "./AboutHCM";

function AboutPage() {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-9 p-6">
              <AboutHCM />
            </div>
            <div className="col-span-3">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
