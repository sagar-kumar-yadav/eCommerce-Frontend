import React from "react";
import useCategory from "../../../hooks/useCategory";
import { Link } from "react-router-dom";
const Navbar = () => {
  const categories = useCategory();
  return (
    <div className=" min-w-[418px] px-4 max-lg:min-w-[322px] max-lg:hidden">
      {categories?.map((c) => (
        <Link key={c._id} className="text-white p-6 max-lg:p-3" to={`/category/${c.slug}`}>
          {c.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
