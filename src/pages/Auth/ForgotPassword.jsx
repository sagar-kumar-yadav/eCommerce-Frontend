import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../context/loading";
import Loader from "../../components/Loader/Loader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const { isLoading, setLoadingState } = useLoading();

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    setLoadingState(true);
    e.preventDefault();
    try {
      const url =
        `${
          import.meta.env.VITE_REACT_APP_URL
        }/api/v1/auth/forgot-password`;
      const res = await axios.post(url, {
        email,
        newPassword,
        answer,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
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
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div
        className="wrapper"
        style={{
          backgroundImage: 'url("/register/bg-registration-form-1.jpg")',
        }}
      >
        <div className="inner mt-40 max-sm:mt-16">
          <div className="image-holder">
            <img src="/banner/banner11.jpg" alt="reg-girl-img" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Forget Password</h3>

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
                placeholder="Create New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>

            <div className="form-wrapper">
              <input
                type="text"
                placeholder="What is your favorite sports"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <button className="reg-btn w-full">
              {isLoading ? (
                <Loader
                  text={"Forgetting"}
                  color={"#ffffff"}
                  loading={isLoading}
                />
              ) : (
                "Reset Password"
              )}

              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
