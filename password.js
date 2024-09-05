

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,       // Your Facebook App ID
    clientSecret: process.env.FACEBOOK_APP_SECRET, // Your Facebook App Secret
    callbackURL: "https://internship-vcym.onrender.com//auth/facebook/callback", // Facebook will redirect to this URL after authentication
    profileFields: ['id', 'displayName', 'email'] // Fields you want to retrieve from Facebook
  },
  function(accessToken, refreshToken, profile, done) {
    // Here you can use the profile info (mainly profile.id) to check if the user is registered in your db
    // If not, you can create a new user and save it in the database.
    return done(null, profile);
  }
));

// Serialize user information into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user information from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});







