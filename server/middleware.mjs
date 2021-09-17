import { userSchema } from "./schemas.mjs";
import ExpressError from "./utils/ExpressError.mjs";
const validateSignup = (req, res, next) => {
  try {
    userSchema.validate(req.body, { abortEarly: false }); //Success
  } catch (err) {
    console.log(err.errors);
    const message = err.errors.join("-");
    throw ExpressError(message, 404);
  }
};

export { validateSignup };
