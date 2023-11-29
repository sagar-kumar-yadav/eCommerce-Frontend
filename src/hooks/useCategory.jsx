import axios from "axios";
import { useEffect, useState } from "react";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  // get categories
  const getCategories = async () => {
    try {
      const url = "https://ecommerce-backend-api-uvqq.onrender.com/api/v1/category/get-category";
      const { data } = await axios.get(url);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
