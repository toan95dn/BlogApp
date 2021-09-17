import { userSchema } from "./schemas.mjs";
import ExpressError from "./utils/ExpressError.mjs";

const validateSignup = async (req, res, next) => {
  console.log(req.body);
  try {
    await userSchema.validate(req.body, { abortEarly: false }); //Success
    next();
  } catch (err) {
    // console.log("all errs", err);
    const message = err.errors.join("-");
    console.log("all errs", message);
    throw new ExpressError("something went wrong", 404);
  }
};

export { validateSignup };
