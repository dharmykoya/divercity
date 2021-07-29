import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { classNames } from "../../utils/helpers/helper";
import "./Navbar.css";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };
  return (
    <header className="mx-auto">
      <div className="App">
        <div className="lg:hidden">
          <MenuIcon
            className="h-20 w-20 ml-auto"
            data-testid="menu"
            onClick={toggleNavbar}
          />
        </div>
        <nav
          className={classNames(
            openNavbar ? "nav-items-show mt-6" : "nav-items",
          )}
        >
          <div className="lg:flex justify-end items-center lg:ml-auto py-4">
            <div className="nav-items my-4 lg:mx-5">Name</div>
            <div className="nav-items my-4 lg:mx-5">UserName</div>
            <div className="nav-items my-4 lg:ml-5">Logout</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
