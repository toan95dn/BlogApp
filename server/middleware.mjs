import { userSchema } from "./schemas.mjs";
import ExpressError from "./utils/ExpressError.mjs";
import passport from "passport";

const validateSignup = (req, res, next) => {
  try {
    userSchema.validateSync(req.body, { abortEarly: false }); //Success
    next();
  } catch (err) {
    const message = err.errors.join("-");
    next(new ExpressError(message, 500));
  }
};

const validateSignin = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: false,
});

export { validateSignup, validateSignin };
