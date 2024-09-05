


import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from './Model/user.model.js'; // Import your User model

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,       // Your Facebook App ID
    clientSecret: process.env.FACEBOOK_APP_SECRET, // Your Facebook App Secret
    callbackURL: "https://internship-vcym.onrender.com/auth/facebook/callback", // Facebook will redirect to this URL after authentication
    profileFields: ['id', 'displayName', 'email'] // Fields you want to retrieve from Facebook
  },
  async function(accessToken, refreshToken, profile, done) {
    try {
      // Find or create user in the database
      let user = await User.findOne({ facebookId: profile.id });

      if (!user) {
        user = await new User({
          facebookId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value
        }).save();
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Serialize user information into the session
passport.serializeUser((user, done) => {
  done(null, user.id); // Store the user's ID in the session
});

// Deserialize user information from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport; // Use export default for ES Modules





