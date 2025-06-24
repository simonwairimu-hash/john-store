/* { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id:string): Promise<Product> =>{
  const res = await fetch(`${URL}/${id}`);

  return res.json();
}

export default getProduct;*/
import { Product } from "@/types";

const getProduct = async (id: string): Promise<Product> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
  }

  const res = await fetch(`${baseUrl}/products/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.statusText}`);
  }

  return res.json();
};

export default getProduct;
