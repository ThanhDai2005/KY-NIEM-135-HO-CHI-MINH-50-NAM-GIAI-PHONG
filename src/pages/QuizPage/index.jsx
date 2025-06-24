import RightSideBar from "../../components/Event/RightSideBar";
import QuizHistory from "./QuizHistory";

function QuizPage() {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 p-4 lg:p-6 md:col-span-8 lg:col-span-9 ">
              <div className="px-6 py-12 bg-[#F5F5F5]">
                <QuizHistory />
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

export default QuizPage;
