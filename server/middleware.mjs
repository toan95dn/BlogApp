import { userSchema } from "./schemas.mjs";
import ExpressError from "./utils/ExpressError.mjs";

const validateSignup = async (req, res, next) => {
  try {
    await userSchema.validate(req.body, { abortEarly: false }); //Success
    next();
  } catch (err) {
    const message = err.errors.join("-");
    next(new ExpressError(message, 404));
  }
};

export { validateSignup };
