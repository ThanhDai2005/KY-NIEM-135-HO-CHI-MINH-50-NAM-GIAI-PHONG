import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routers";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <BackToTopButton />
    </>
  );
}

export default App;
