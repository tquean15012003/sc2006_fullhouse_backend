const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User, RetirementInfo } = require('../models/index.js');
const { generateSixDigits } = require("../helpers/generateDigits.js");

const GOOGLE_CALLBACK_URL = "http://localhost:4000/api/v1/google/callback";

passport.use(
    new GoogleStrategy(
        {
            clientID: "446366515268-kj7m6s37jvkgpq6l0tuj527bek349942.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: GOOGLE_CALLBACK_URL,
            passReqToCallback: true,
        },
        async (req, accessToken, refreshToken, profile, cb) => {
            let user = await User.findOne({
                where: {
                    googleId: profile.id
                }
            }).catch((err) => {
                console.log("Error signing in", err);
                cb(err, null);
            });

            if (!user) {
                let userTakenEmail = await User.findOne({
                    where: {
                        email: profile.emails[0].value
                    }
                }).catch((err) => {
                    console.log("Error signing in", err);
                    cb(err, null);
                });
                if (userTakenEmail) {
                    user = userTakenEmail
                } else {
                    const defaultUser = {
                        email: profile.emails[0].value,
                        picture: profile.photos[0].value,
                        googleId: profile.id,
                        verificationCode: generateSixDigits(),
                        isVerified: "true"
                    };
                    user = await User.create(defaultUser)

                    await RetirementInfo.create({
                        userID: user.id,
                        name: "",
                        age: "",
                        degree: "",
                        salary: "",
                        carCat: "",
                        housePrice: "",
                        investments: "",
                        currentSaving: "",
                        noChild: "",
                    });
                }

            }

            if (user) return cb(null, user);
        }
    )
);

passport.serializeUser((user, cb) => {
    console.log("Serializing user:", user);
    cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
    const user = await User.findOne({ where: { id } }).catch((err) => {
        console.log("Error deserializing", err);
        cb(err, null);
    });

    console.log("DeSerialized user", user);

    if (user) cb(null, user);
});