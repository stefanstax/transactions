import type { Transaction } from "../transactionTypes";

export const addTransaction = async (
  data: Transaction
): Promise<Transaction> => {
  const res = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let result;

  try {
    result = await res.json();
  } catch {
    throw new Error("Invalid server response.");
  }

  if (!res.ok) {
    throw new Error("Failed to add new transaction");
  }

  return result;
};
