/*import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> =>{
  const res = await fetch(URL);

  return res.json();
}

export default getColors;*/
import { Color } from "@/types";

const getColors = async (): Promise<Color[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
  }

  const res = await fetch(`${baseUrl}/colors`);

  if (!res.ok) {
    throw new Error(`Failed to fetch colors: ${res.statusText}`);
  }

  return res.json();
};

export default getColors;
