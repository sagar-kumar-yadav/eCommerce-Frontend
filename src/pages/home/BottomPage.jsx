import React from "react";

const BottomPage = () => {
  return (
    <div className="flex flex-col items-center w-[90%] m-auto pt-20 relative top-80 h-[42rem] max-md:h-[33rem] max-sm:top-40">
      <div className=" text-5xl font-semibold">NEWSLETTER</div>
      <div className="w-[50%] text-center pt-4 max-sm:w-full">
        Get newsletter update on upcoming products and the best discount on an
        all the items you've been dreaming of
      </div>
      <div className="py-8 w-[70%]">
        <div className="flex rounded-3xl border gap-4 border-solid border-black justify-between">
          <input
            type="email"
            placeholder="Your Email"
            className="outline-none border-none rounded-3xl w-full"
          />
          <button className="bg-[#222222] text-white rounded-3xl">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BottomPage;
