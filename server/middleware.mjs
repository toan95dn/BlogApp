import { userSchema } from "./schemas.mjs";
import ExpressError from "./utils/ExpressError.mjs";

const validateSignup = (req, res, next) => {
  console.log(req.body);
  try {
    userSchema.validate(req.body, { abortEarly: false }); //Success
    console.log("No errors");
    next();
  } catch (err) {
    console.log("all errs", err);
    // const message = err.errors.join("-");
    throw new ExpressError("something went wrong", 404);
  }
};

export { validateSignup };
