const express = require("express");
const passport = require("passport");

const googleRouter = express.Router();

const successLoginUrl = "http://localhost:3000/signinsuccess";
const errorLoginUrl = "http://localhost:3000/signin";

googleRouter.get(
  "/auth",
  passport.authenticate("google", { scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"] })
);

googleRouter.get(
  "/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
  }),
  (req, res) => {
    console.log("User: ", req.user);
    res.send("Thank you for signing in!");
  }
);

module.exports = {
    googleRouter
}
