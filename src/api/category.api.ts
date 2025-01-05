import axios from "axios";


import { Category } from "../store/categories/category.slice";


export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products`
    );
    return response.data; // Return the categories fetched from the backend
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
};


