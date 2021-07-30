import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuIcon, LogoutIcon, UserIcon, HomeIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../utils/helpers/helper";
import "./Navbar.css";
import { isAuthenticated, username } from "../../views/signin/signin.selector";
import { logout } from "../../views/signin/signin.action";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const userAuthenticated = useSelector(isAuthenticated());
  const userName = useSelector(username());

  const dispatch = useDispatch();

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="mx-auto">
      <div className="App">
        <div className="lg:hidden">
          <MenuIcon
            className="h-16 w-16 ml-auto cursor-pointer"
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
            {userAuthenticated ? (
              <>
                <div className="my-4 lg:mx-5 flex items-center">
                  <div>
                    <UserIcon className="h-6 w-6 mr-2 cursor-pointer" />
                  </div>
                  <div>{userName}</div>
                </div>
                <Link to="/" className="my-4 lg:mx-5 flex items-center">
                  <div>
                    <HomeIcon className="h-6 w-6 mr-2 cursor-pointer" />
                  </div>
                  <div>Home</div>
                </Link>
                <button
                  type="button"
                  className="my-4 lg:ml-5 flex items-center hover:text-blue-500"
                  onClick={logoutHandler}
                >
                  <LogoutIcon className="h-6 w-6 mr-2 cursor-pointer" />
                  <div>Logout</div>
                </button>
              </>
            ) : (
              <div className="grid lg:flex lg:ml-5">
                <Link to="/login" className="my-3 lg:mx-5">
                  Login
                </Link>
                <Link to="/register" className="my-3 lg:ml-5">
                  Register
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
