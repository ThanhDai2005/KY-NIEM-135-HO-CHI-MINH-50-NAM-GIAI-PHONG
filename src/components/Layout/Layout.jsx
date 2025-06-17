import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../BackToTopButton/ScrollToTop";
import BackToTopButton from "../BackToTopButton";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default Layout;
