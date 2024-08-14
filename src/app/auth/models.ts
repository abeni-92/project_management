import { z } from "zod"

export const SignValidator = z.object({
  email: z.string(),
  password: z.string().min(6, { message: "password should be length of 6 or more" }),
})

export const SignupValidator = z.object({
  name: z.string().min(2),
  email: z.string(),
  password: z.string().min(6, { message: "password should be length of 6 or more" }),
  confirmPassword: z.string().min(6, { message: "password should be length of 6 or more" }),
}).refine((data) => data.password == data.confirmPassword, {
  message: " passwords must match ",
  path: ["confirmPassword"],
})

export type TLoginSchema = z.infer<typeof SignValidator>
export type  TSignupSchema = z.infer<typeof SignupValidator>