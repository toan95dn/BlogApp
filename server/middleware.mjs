import { userSchema } from "./schemas.mjs";
import ExpressError from "./utils/ExpressError.mjs";

const validateSignup = async (req, res, next) => {
  try {
    await userSchema.validateSync(req.body, { abortEarly: false }); //Success
    next();
  } catch (err) {
    const message = err.errors.join("-");
    next(new ExpressError(message, 500));
  }
};

export { validateSignup };
