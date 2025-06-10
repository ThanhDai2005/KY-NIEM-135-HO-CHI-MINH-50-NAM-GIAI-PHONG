import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <header className="px-4 py-2 bg-white lg:py-6">
        <div className="flex items-center justify-between">
          <HeaderLogo />
          <HeaderSearch />
        </div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
