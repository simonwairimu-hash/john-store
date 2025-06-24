/*import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> =>{
  const res = await fetch(URL);

  return res.json();
}

export default getSizes;*/
import { Size } from "@/types";

const getSizes = async (): Promise<Size[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
  }

  const res = await fetch(`${baseUrl}/sizes`);

  if (!res.ok) {
    throw new Error(`Failed to fetch sizes: ${res.statusText}`);
  }

  return res.json();
};

export default getSizes;
