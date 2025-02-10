import * as yup from "yup";

export const basicSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password need to be at least 6 characters"),
});
