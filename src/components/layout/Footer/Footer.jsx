import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer relative bg-black pb-6 text-white bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left pt-8">
          <div className="w-full lg:w-6/12 px-4 ">
            <h4 className="text-3xl fonat-semibold max-lg:text-center">
              Let's keep in touch!
            </h4>
            <h5 className="text-sm mt-0 mb-2 max-lg:text-center">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex max-lg:justify-center">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter" />
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square" />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble" />
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-1/2 lg:w-4/12 px-4 ml-auto">
                <span className="block w-max uppercase  text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="#"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="#"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="#"
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="#"
                    >
                      Free Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-4/12 px-4 ">
                <span className="block  max-lg:text-end uppercase  text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="  max-lg:text-end hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="#"
                    >
                      MIT License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" max-lg:text-end hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="#"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" max-lg:text-end hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="#"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="  max-lg:text-end hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm  font-semibold py-1">
              Copyright © <span id="get-current-year">2021</span>
              <Link
                to="https://sagar-kumar-yadav.netlify.app/"
                className=" hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Sagar Yadav
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
