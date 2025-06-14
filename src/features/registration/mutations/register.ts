import type { RegistrationState } from "../registrationTypes";

export const register = async (data: RegistrationState) => {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let errorData = null;

  try {
    errorData = await res.json();
  } catch (err) {
    // fallback if res is not JSON
    const text = await res.text();
    errorData = { message: text || "Unknown error" };
  }

  if (!res.ok) {
    throw new Error(errorData.message || "Registration failed.");
  }

  return res;
};
