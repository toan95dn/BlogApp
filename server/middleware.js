import { userSchema } from "./schemas";
import ExpressError from "./utils/ExpressError";

const validateSignup = (req, res, next) => {
  try {
    await userSchema.validate(req.body, { abortEarly: false }); //Success
  } catch (err) {
    console.log(err.errors);
    const message = err.errors.join("-");
    throw ExpressError(message, 404);
  }
};

export { validateSignup };
