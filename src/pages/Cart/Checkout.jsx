import React from "react";
import Layout from "../../components/layout/Layout";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/auth";

const Checkout = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  // total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
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
      <div className="pt-28 text-center font-bold text-3xl w-full">
        <section className="mb-12">
          <h1 className=" text-center">Checkout</h1>
        </section>

        <div className="flex gap-4 w-[90%] m-auto max-lg:flex-wrap">
          <main className="w-[60%] flex flex-col gap-4 max-md:w-full">
            <div className=" bg-[#ffffff]">
              <div className="flex justify-between px-4 pt-3">
                <h4 className=" text-base">My information</h4>
                <span className="material-symbols-outlined">border_color</span>
              </div>

              <div className="px-4 py-2">
                <div className=" text-start text-sm font-normal">
                  {auth?.user?.name}
                </div>
                <div className=" text-start text-sm font-normal">
                  {auth?.user?.email}
                </div>
              </div>
            </div>
            <div className="bg-white p-4 text-sm">
              <div className="text-start font-medium text-sm ">
                <div className="">Billing Address</div>
                <div className="">Enter your billing address</div>
              </div>
              <div className="pt-3 ">
                <div className="text-start">Address</div>
                <input
                  type="text"
                  placeholder="street address"
                  className="w-full text-sm"
                />
              </div>
              <div className="flex pt-3 gap-4 w-full flex-wrap">
                <div className="text-start flex flex-col">
                  <label htmlFor="">Town/City</label>
                  <input
                    type="text"
                    placeholder="Enter your town or city name"
                    className="text-sm"
                  />
                </div>
                <div className="text-start flex flex-col">
                  <label htmlFor="">Pincode</label>
                  <input type="text" placeholder="Enter your pincode" 
                  className="text-sm"/>
                  
                </div>
              </div>
              <div className="pt-3 flex flex-col">
                <label htmlFor="" className="text-start">
                  State
                </label>
                <input type="text" placeholder="Enter your state"
                className="text-sm" />
              </div>

              <button className="btn">save</button>
            </div>
          </main>

          <div className="col-md-4 summary h-fit sticky top-24 text-sm max-md:w-full">
            <div className="border-b border-solid border-[#dee2e6] pb-4">
              <h5 className="summary_heading mt-8 text-base font-bold">
                <span >Summary</span >
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
              Almost Done
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
