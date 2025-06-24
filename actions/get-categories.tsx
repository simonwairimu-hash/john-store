import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/categories`);
  return res.json();
};

export default getCategories;
