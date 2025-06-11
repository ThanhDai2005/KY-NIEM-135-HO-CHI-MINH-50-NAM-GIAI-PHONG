import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

function Event() {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-4">
            <div className="col-span-3 py-6 px-9">
              <LeftSideBar />
            </div>
            <div className="col-span-1 px-3">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
