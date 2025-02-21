import z from "zod";

// personal information schema
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, { message: "First name is a required field." }),
  lastName: z.string().min(1, { message: "Last name is a required field." }),
  dob: z.string().min(1, { message: "Date of birth is a required field." }),
  gender: z.string().min(1, { message: "gender is a required field." }),
});

// Contact information schema
export const contactSchema = z.object({
  email: z.string().email("Invalid email address."),
  phone: z.string().min(1, { message: "Phone number is a required field." }),
  address: z
    .string()
    .min(11, { message: "Address must be at least 11 characters long." }),
});

// Account schema
export const accountSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

export const registrationSchema = z.object({
  personal: personalInfoSchema,
  contact: contactSchema,
  account: accountSchema,
});

export const loginSchema = z.object({
  email: z.string().email("invalid email"),
  password: z.string().min(1, "Enter your password"),
});

// plan schema
export const planSchema = z.object({
  tier: z.string().min(1, "Plan tier is required"),
  price: z.number().min(1, "Plan price is required"),
  accountType: z.string().min(1, "Account type is required"),
  challengeCurrency: z.string().min(1, "Challenge currency is required"),
  targetProfit: z.string().min(1, "Target profit is required"),
  tradingPeriod: z.string().min(1, "Trading period is required"),
  leverage: z.string().min(1, "Leverage is required"),
  platform: z.string().min(1, "Platform is required"),
});

// wallet schema
export const walletSchema = z.object({
  currency: z.string().min(1, "Currency is required"),
  chainId: z.string().min(1, "ChainId is required"),
  address: z.string().min(1, "address is required"),
});

// wallet schema
export const faqSchema = z.object({
  question: z.string().min(1, "question is required"),
  answer: z.string().min(1, "answer is required"),
});
