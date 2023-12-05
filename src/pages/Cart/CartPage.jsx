import React from "react";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/auth";
import Layout from "../../components/layout/Layout";
import "/src/assets/css/cart.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  

  // Function to remove item from cart
  const removeCartItem = (pid) => {
    try {
      const updateCart = cart.filter((item) => item._id != pid);
      setCart(updateCart);
      localStorage.setItem("cart", JSON.stringify(updateCart));
    } catch (error) {
      console.log(error);
    }
  };

  // Function to update quantity of cart item
  const updateCartItemQuantity = (pid, action) => {
    console.log(pid, action);
    try {
      const updatedCart = cart.map((item) => {
        if (item._id === pid) {
          if (action === "increase") {
            item.q += 1;
          } else if (action === "decrease" && item.q > 1) {
            item.q -= 1;
          }
        }
        return item;
        console.log(item);
      });

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.log(error);
    }
  };

  // total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price ;
      });
      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="card py-28 shadow-none bg-[#ffffff]">
        <div className="flex gap-4 max-md:flex-wrap">
          <div className="col-md-8 cart max-md:w-full">
            <div className="title mb-10">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Bag</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted text-sm font-bold text-[#6c757d]">
                  {cart?.length}
                  <span className="pl-1 ">items</span>
                </div>
              </div>
            </div>

            <div className="row border-top overflow-y-scroll">
              {cart?.map((p, i) => (
                <div
                  className="row main align-items-center border-b border-solid border-[#dee2e6]"
                  key={i}
                >
                  <button
                    onClick={() => {
                      removeCartItem(p._id);
                    }}
                  >
                    <span className="close text-end pr-4">✕</span>
                  </button>
                  <div className="col-2">
                    <img
                      src={p.photos[0]}
                      className=" cursor-pointer"
                      alt={p.name}
                      onClick={() => navigate(`/product/${p.slug}`)}
                    />
                  </div>
                  <div className="col">
                    <div className="row  text-sm font-bold text-[#6c757d]">
                      {p.name}
                    </div>
                    <div className="row  text-sm font-bold text-[#212529]">
                      ₹ {p.price}
                    </div>
                  </div>
                  <div className="col">
                    <Link
                      className="dash_a"
                      onClick={() => updateCartItemQuantity(p._id, "decrease")}
                    >
                      -
                    </Link>
                    <span className="border">{1}</span>
                    <Link
                      onClick={() => updateCartItemQuantity(p._id, "increase")}
                    >
                      +
                    </Link>
                  </div>
                  <div className="col">₹ {p.price}</div>
                </div>
              ))}
            </div>

            <div className="back-to-shop">
              <Link to="/">←</Link>

              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          <div className="col-md-4 summary h-fit sticky top-24 max-md:w-full">
            <div className="border-b border-solid border-[#dee2e6] pb-4">
              <h5 className="summary_heading mt-8 text-center">
                <b>Summary</b>
              </h5>
            </div>
            <hr className="pt-4" />
            <div className="row">
              <div className="col pl-0 text-sm font-bold text-[#525252]">
                Order Value
              </div>
              <div className="col text-right">{totalPrice()}</div>
            </div>
            <form className="shipping_form flex">
              <div className="col pl-0 text-sm font-bold text-[#525252]">
                Delivery
              </div>
              <div className="col text-right">Free</div>
            </form>
            <div
              className="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col text-sm font-bold text-[#313131]">
                TOTAL PRICE
              </div>
              <div className="col text-right">{totalPrice()}</div>
            </div>
            <button onClick={() => navigate(`/checkout`)} className="btn">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
