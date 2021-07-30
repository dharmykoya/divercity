import { useState } from "react";
import { Link } from "react-router-dom";
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
            <div className="my-4 lg:mx-5">Name</div>
            <div className="my-4 lg:mx-5">UserName</div>
            <div className="my-4 lg:ml-5">Logout</div>
            <div className="grid lg:flex lg:ml-5">
              <Link to="/login" className="my-3 lg:mx-5">Login</Link>
              <Link to="/register" className="my-3 lg:ml-5">Register</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
