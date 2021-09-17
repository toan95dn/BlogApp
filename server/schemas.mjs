import yup from "yup";

let userSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email can't be empty"),
  password: yup
    .string()
    .required()
    .min(6, "Password must have at least 6 characters"),
  password_confirmed: yup
    .string()
    .required()
    .test("password-match", "Password must match", (value) => {
      return value === this.parent.password;
    }),
});

export { userSchema };
