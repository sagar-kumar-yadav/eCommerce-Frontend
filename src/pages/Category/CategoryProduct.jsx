import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const CategoryProduct = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) {
      getProductByCategory();
    }
  }, [params?.slug]);

  const getProductByCategory = async () => {
    try {
      const url = `${
        import.meta.env.VITE_REACT_APP_URL
      }/api/v1/product/product-category/${params.slug}`;
      // console.log(url);
      const { data } = await axios.get(url);
      // console.log(data);
      // console.log(data.products);
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div>
    //   <h1>Category Wise Products</h1>
    //   <h1>{category?.name}</h1>
    //   <h1>{products?.length} result found</h1>
    // </div>
    <Layout>
      <div className="">
        <h1 className="mt-28 text-center text-4xl font-bold mb-8">
          {category?.name}
        </h1>
        <h6 className="text-center">
          {products?.length < 1
            ? "No Product Found"
            : `Products ${products?.length}`}
        </h6>

        <div className="home_content w-[86%] m-auto pt-10">
          <div className="product_content ">
            {/* {JSON.stringify(radio, null, 4)} */}

            <div className="all_products_show_cont">
              {products?.map((p) => (
                <div
                  key={p._id}
                  className="product_cont w-64 items-center justify-center p-3 mb-8"
                >
                  <div className="product_img cursor-pointer">
                    <img
                      src={p.photos[0]}
                      className=""
                      alt={p.name}
                      onClick={() => navigate(`/product/${p.slug}`)}
                    />
                  </div>
                  <div className="product_name">{p.name}</div>
                  <div className="flex flex-col">
                    {/* <p className="">{p.description.substring(0, 30)}</p> */}
                    <p className="">$ {p.price}</p>
                  </div>

                  <button
                    className="bg-[#222] text-white w-24 rounded h-8"
                    onClick={() => {
                      setCart([...cart, p]);
                      toast.success("Item Add to Cart");
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined">
                        shopping_bag
                      </span>
                      <span>add</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
