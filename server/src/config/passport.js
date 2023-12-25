const passport=  require("passport");
const GoogleStrategy= require("passport-google-oauth20").Strategy;
const FacebookStrategy= require("passport-facebook").Strategy
const userModel=require("../model/userModel")
// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env. CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
  // Implement logic to handle Google authentication
  // Use the profile information to find or create a user in your database
  User.findOrCreate({ googleId: profile.id }, (err, user) => {
    return done(err, user);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
