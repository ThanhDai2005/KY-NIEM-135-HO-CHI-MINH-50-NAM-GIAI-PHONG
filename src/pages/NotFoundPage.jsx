import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="bg-white font-Arvo">
        <div className="container py-10">
          <div className="bg-not-found">
            <h3 className="text-[80px] text-center">404</h3>
          </div>
          <div className="text-center mt-[-50px]">
            <h3>Look like you're lost</h3>
            <p>the page you are looking for not avaible!</p>
            <Link
              to="/"
              className=" inline-block bg-[#D32F2F] my-5 py-[10px] px-[20px] text-white"
            >
              Go to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
