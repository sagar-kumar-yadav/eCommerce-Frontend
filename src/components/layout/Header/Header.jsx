import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
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
import { IoSearch } from "react-icons/io5";
import { useSearch } from "../../../context/search";
import axios from "axios";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${
        import.meta.env.VITE_REACT_APP_URL
      }/api/v1/product/search/${values.keyword}`;
      const { data } = await axios.get(url);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearchClick = () => {
    setIsSearchOpen((prevState) => !prevState);
    // Hide the menu toggler icons when search is clicked
    setIsOpen(false);
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
      <header
        className={`flex justify-between items-center h-[70px] top-0 z-50 fixed  w-full
         bg-white
      `}
      >
        {/* logo and app name header here */}
        <Link
          to="/"
          className={`flex items-center gap-4 ml-[4%] max-lg:ml-[7%] max-sm:ml-[9%] w-32 ${
            isSearchOpen ? "hidden" : "block"
          }`}
        >
          <div className="flex items-center ">
            <div className=" md:py-0 w-28">
              {/* <img src="/src/assets/text_outfit_com.png" alt="logo-png" /> */}
              <span className="  text-2xl font-bold italic max-sm:hidden">
                URBANETHNIC
              </span>
              <span className="  text-2xl font-bold italic max-sm:block sm:hidden">
                U<span className="text-sm">rban</span>
                <span>E</span>
                <span className="text-sm">thnic</span>
              </span>
            </div>
          </div>
        </Link>
        <SearchInput />

        <div className=" px-12 max-md:px-4 fixed right-0">
          <ul className="flex items-center">
            {/* if not user then show register and login page ------------------------------------------  */}
            {!auth.user ? (
              <>
                <li className="max-lg:hidden">
                  <NavLink
                    to="/register"
                    className="flex md:inline-flex p-2 items-center "
                  >
                    <span>Register</span>
                  </NavLink>
                </li>

                <li className="max-lg:hidden">
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
                <li className="nav-item dropdown max-lg:hidden">
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
                {/* mobile menu */}
                <div className=" sm:hidden fixed right-24">
                  <button
                    // className="w-12"
                    className={`w-8 ${isSearchOpen ? "hidden" : "block"}`}
                    onClick={handleSearchClick}
                  >
                    <IoSearch size={24} className=" " />
                  </button>
                </div>
                <div
                  className={` sm:hidden ${isSearchOpen ? "block" : "hidden"}`}
                >
                  <form onSubmit={handleSubmit} className="flex items-center ">
                    {isSearchOpen ? (
                      <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 border border-gray-400 rounded bg-transparent h-8"
                        value={values.keyword}
                        onChange={(e) =>
                          setValues({ ...values, keyword: e.target.value })
                        }
                      />
                    ) : null}
                    <button
                      className="w-8 h-8 border-tl-4 border-bl-4 rounded-r-none text-[#282c3f]"
                      onClick={handleSearchClick}
                    >
                      <AiOutlineClose size={26} className={` `} />
                    </button>
                  </form>
                </div>

                {/* -------------------------------- */}
                <ul
                  className={`flex items-center   ${
                    isSearchOpen ? "hidden" : "block"
                  }`}
                >
                  <li>
                    <NavLink
                      to="/cart"
                      className="flex md:inline-flex p-2 items-center "
                    >
                      {/* <span>
                        <FaRegHeart className=" fill-[#272626]" size={24} />
                      </span> */}
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
            <li className={`${isSearchOpen ? "hidden" : "block"}`}>
              <NavLink
                to="/cart"
                className="flex md:inline-flex p-2 items-center mt-[14px]"
              >
                {/* <span>
                  <SlBag className=" fill-[#272626]" size={24} />
                </span> */}
                <span className="material-symbols-outlined">shopping_bag</span>
              </NavLink>
              <div className=" relative h-4 w-4 rounded-full justify-center bottom-9 left-7 flex items-center text-xs bg-black text-white">
                <span>{cart?.length}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* mobile device -----------------------------------------------------------------------*/}
        <div className=" fixed left-4 max-sm:left-2 top-2">
          <button
            type="button"
            className="w-8"
            // className={`w-8 ${isSearchOpen ? "hidden" : "block"}`}
            aria-controls=",onile-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <BiMenu size={26} className={`${isOpen ? "hidden" : "block"} `} />
          </button>
        </div>
        <div className=" fixed left-4 max-sm:left-2 top-2">
          <button
            type="button"
            className="w-8"
            // className={`w-8 ${isSearchOpen ? "hidden" : "block"}`}
            aria-controls=",onile-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <AiOutlineClose
              size={26}
              className={`${isOpen ? "block" : "hidden"} `}
            />
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block pt-4" : "hidden"
          }  bg-white text-black `}
        >
          <div className=" fixed top-[70px] left-0 bottom-0 text-black bg-white dark:bg-black w-5/6 max-w-[20rem] max-sm:max-w-[15rem] flex flex-col ">
            {categories?.map((c) => (
              <Link
                to={`/category/${c.slug}`}
                className="p-3 border  mt-3"
                key={c._id}
              >
                {c.name}{" "}
              </Link>
            ))}

            <div className="flex absolute bottom-8 justify-center w-full">
              {!auth.user ? (
                <>
                  <Link
                    to="/register"
                    className="flex md:inline-flex p-2 items-center "
                  >
                    <span>Register</span>
                  </Link>
                  <Link
                    to="/login"
                    className="flex md:inline-flex p-2 items-center "
                  >
                    <span>Login</span>
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex md:inline-flex p-2 items-center "
                  onClick={handleLogout}
                >
                  <span>Logout</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
