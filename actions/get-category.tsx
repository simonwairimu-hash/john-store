/*import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id:string): Promise<Category> =>{
  const res = await fetch(`${URL}/${id}`);

  return res.json();
}

export default getCategory;*/
import { Category } from "@/types";

const getCategory = async (id: string): Promise<Category> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
  }

  const res = await fetch(`${baseUrl}/categories/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch category: ${res.statusText}`);
  }

  return res.json();
};

export default getCategory;
