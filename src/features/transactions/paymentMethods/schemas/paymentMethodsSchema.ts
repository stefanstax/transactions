import { z } from "zod";

const budgetSchema = z.object({
  id: z.string(),
  currencyId: z.string().nonempty("Currency is required"),
  amount: z.number().min(0.01, "Amount must be greater than 0"),
});

export const paymentMethodsSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(4, { message: "Payment method must have a minimum of 4 characters." }),
  type: z.enum(["cash", "card", "bank", "online", "crypto", "other"], {
    message: "Please select payment method type.",
  }),
  budgets: z.preprocess((val) => val ?? [], z.array(budgetSchema)),
});
