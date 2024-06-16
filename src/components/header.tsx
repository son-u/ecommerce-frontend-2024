import { Link } from "react-router-dom";
import {
  // FaSearch,
  // FaShoppingBag,
  // FaSignInAlt,
  FaUser,
  // FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import logout from "../assets/images/logout.png";
import cart from "../assets/images/cart.png";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <Link to="/">
          <p>SHADOW</p>
        </Link>
      </div>

      <ul className="nav-menu">
        <li>
          <Link onClick={() => setIsOpen(false)} to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)} to={"/search"}>
            Shop
          </Link>
        </li>

        <li>
          <Link onClick={() => setIsOpen(false)} to={"/cart"}>
            Cart <img src={cart} alt="cart logo" />
          </Link>
        </li>
      </ul>

      {user?._id ? (
        <div className="nav-login-cart">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {user.photo ? <img src={user.photo} alt="profile" /> : <FaUser />}{" "}
            Profile
          </button>
          <dialog open={isOpen}>
            <ul>
              {user.role === "admin" && (
                <li>
                  <Link to="/admin/dashboard" onClick={() => setIsOpen(false)}>
                    Admin
                  </Link>
                </li>
              )}

              <li>
                <Link to="/orders" onClick={() => setIsOpen(false)}>
                  Orders
                </Link>
              </li>
              <li>
                <Link to="" onClick={logoutHandler}>
                  <img src={logout} alt="logout icon" /> <span>Logout</span>
                </Link>
              </li>
            </ul>
          </dialog>
        </div>
      ) : (
        <div className="nav-login-cart">
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
