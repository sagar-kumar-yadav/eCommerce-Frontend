import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import "./auth.css";
import Loader from "../../components/Loader/Loader";
import { useLoading } from "../../context/loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const { isLoading, setLoadingState } = useLoading();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/login`;
      setLoadingState(true);
      const res = await axios.post(url, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
        setLoadingState(false);
      } else {
        toast.error(res.data.message);
        setLoadingState(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
      setLoadingState(false);
    }
  };

  return (
    <Layout>
      <div
        className="wrapper"
        style={{
          backgroundImage: 'url("/register/bg-registration-form-1.jpg")',
        }}
      >
        <div className="inner  mt-40 max-sm:mt-16">
          <div className="image-holder">
            <img
              // src="src/assets/register/registration-form-1.jpg"
              src="/banner/banner11.jpg"
              alt="reg-girl-img"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Login Form</h3>

            <div className="form-wrapper">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>

            <div className=" flex flex-col gap-2 items-center justify-center">
              <button className="reg-btn">
                {isLoading ? (
                  <Loader
                    text={"Logging In"}
                    color={"#ffffff"}
                    loading={isLoading}
                  />
                ) : (
                  "Login"
                )}

                <i className="zmdi zmdi-arrow-right" />
              </button>

              <NavLink
                className="reg-btn pt-[11px] pb-[11px] pl-[60px] pr-[60px] bg-red-600"
                to="/forgot-password"
              >
                Forgot
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
