import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";
import logo from "../../../assets/logo.png";
import logo_name from "../../../assets/text_outfit_com.png";
import SearchInput from "../../form/SearchInput";
import { useCart } from "../../../context/cart";
import { SlBag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import Navbar from "./Navbar";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import useCategory from "../../../hooks/useCategory";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // in this function we want to logout then we have to clear the local storage and then we navigate to login page
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  // console.log(cart.length);

  return (
    <>
      <header className="flex justify-between items-center h-[70px] top-0 z-50 fixed bg-[#0a0e11] w-full">
        {/* logo and app name header here */}
        <Link
          to="/"
          className="flex items-center gap-4 ml-[4%] max-md:ml-[6%] max-sm:ml-[10%]"
        >
          <div className="flex items-center ">
            <div className=" md:py-0 w-28">
              {/* <img src="/src/assets/text_outfit_com.png" alt="logo-png" /> */}
              <span className=" text-white text-2xl font-bold italic">
                urbanethnic
              </span>
            </div>
          </div>
        </Link>
        <Navbar />
        <SearchInput />

        <div className="min-w-[200px] px-12 max-lg:hidden">
          <ul className="flex items-center text-white gap-2">
            {/* if not user then show register and login page ------------------------------------------  */}
            {!auth.user ? (
              <>
                <li>
                  <NavLink
                    to="/register"
                    className="flex md:inline-flex p-2 items-center "
                  >
                    <span>Register</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/login"
                    className="flex md:inline-flex p-2 items-center "
                  >
                    <span>Login</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle nav-link dropdown-toggle flex md:inline-flex items-center "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    Hi {auth?.user?.name}
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <ul className="flex items-center gap-2">
                  <li>
                    <NavLink
                      to="/cart"
                      className="flex md:inline-flex p-2 items-center "
                    >
                      <span>
                        <FaRegHeart className=" fill-white" size={24} />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
            <li>
              <NavLink
                to="/cart"
                className="flex md:inline-flex p-2 items-center mt-[14px]"
              >
                <span>
                  <SlBag className=" fill-white" size={24} />
                </span>
              </NavLink>
              <div className=" relative h-4 w-4 rounded-full justify-center bottom-9 left-8 flex items-center text-xs">
                <span>{cart?.length}</span>
              </div>
            </li>
          </ul>
        </div>
        {/* mobile device */}
        <div className=" lg:hidden fixed left-4 max-sm:left-2">
          <button
            type="button"
            className="w-8"
            aria-controls=",onile-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <BiMenu
              size={26}
              className={`${isOpen ? "hidden" : "block"} text-white`}
            />
          </button>
        </div>
        <div className=" lg:hidden fixed left-4 max-sm:left-2">
          <button
            type="button"
            className="w-8"
            aria-controls=",onile-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <AiOutlineClose
              size={26}
              className={`${isOpen ? "block" : "hidden"} text-white`}
            />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block pt-4" : "hidden"
          } lg:hidden bg-white text-black `}
        >
          <div className="fixed top-[70px] left-0 bottom-0 text-black bg-white w-5/6 max-w-[20rem] max-sm:max-w-[15rem] flex flex-col">
            {categories?.map((c) => (
              <Link to={`/category/${c.slug}`} className="p-3 border  mt-3">
                {c.name}{" "}
              </Link>
            ))}

            <div className="flex justify-center relative top-40">
              <NavLink
                to="/register"
                className="flex md:inline-flex p-2 items-center "
              >
                <span>Register</span>
              </NavLink>
              <NavLink
                to="/login"
                className="flex md:inline-flex p-2 items-center "
              >
                <span>Login</span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
