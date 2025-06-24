/*import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id:string): Promise<Billboard> =>{
  const res = await fetch(`${URL}/${id}`);

  return res.json();
}

export default getBillboard;*/
import { Billboard } from "@/types";

const getBillboard = async (id: string): Promise<Billboard> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
  }

  const res = await fetch(`${baseUrl}/billboards/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch billboard: ${res.statusText}`);
  }

  return res.json();
};

export default getBillboard;
