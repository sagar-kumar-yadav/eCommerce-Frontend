import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `https://ecommerce-backend-api-uvqq.onrender.com/api/v1/product/search/${values.keyword}`;
      const { data } = await axios.get(url);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="min-w-[23rem]">
    //   <form
    //
    //     className="flex items-center h-10 border border-solid border-white outline-none "
    //   >
    //     <input
    //       type="search"
    //       className=" bg-transparent h-10 text-white  flex-grow border-none focus:outline-none focus:shadow-none"
    //       placeholder="Search for products brand and more"
    //       value={values.keyword}
    //       onChange={(e) => setValues({ ...values, keyword: e.target.value })}
    //     />
    //     <button className=" w-10">
    //       <span className="material-symbols-outlined  p-2 rounded-r-lg  h-10 text-white">
    //         search
    //       </span>
    //     </button>
    //   </form>
    // </div>

    <div className=" h-10 min-w-[232px] w-[30%] flex items-center px-6 max-lg:hidden">
      <form onSubmit={handleSubmit} className="flex w-full items-center">
        <input
          className="text-[#696e79] bg-transparent flex-grow h-10 border border-solid border-white outline-none"
          placeholder="Search for products brand and more"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="w-10 flex">
          <span class="material-symbols-outlined h-5 p-[10px] box-content bg-[#f5f5f6] text-[#282c3f] font-light border-tl-4 border-bl-4 rounded-r-none">
            search
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
