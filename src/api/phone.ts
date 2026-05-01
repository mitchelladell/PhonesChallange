import type { IPhone } from "../types";

// api/phones.ts
const BASE_URL = "https://api.restful-api.dev/objects";

export const fetchPhones = async (): Promise<IPhone[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch phones");
  return res.json();
};

export const addPhone = async (phone: Omit<IPhone, "id">): Promise<IPhone> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(phone),
  });
  if (!res.ok) throw new Error("Failed to add phone");
  return res.json();
};
