const passport = require('passport');
const GoogleAuthCodeStrategy = require('passport-google-authcode').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const { User } = require('./models');




// Google Auth Code Strategy
passport.use(new GoogleAuthCodeStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'postmessage'
}, (accessToken, refreshToken, profile, done) => {
    try {
        done(null, profile);
    } catch (error) {
        done(error, false, error.message);
    }
}
));


// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    // jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    passReqToCallback: true
}, async (req, payload, done) => {
    try {
        console.log("payload:", payload.sub);
        // Find the user specified in token
        const user = await User.findById(payload.sub);

        // If user doesn't exists, handle it
        if (!user) {
            return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));