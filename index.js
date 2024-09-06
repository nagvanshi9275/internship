

import express from 'express';
import cors from 'cors';
import Connect_db from './Database/data.js';
import 'dotenv/config';
import passport from 'passport';
import session from 'express-session';

import './passport.js'; // Import passport configuration

import './password.js'; // Import passport configuratio


const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key', // Set a session secret
  resave: false,
  saveUninitialized: true
}));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World! kya hai samjhe');
});

// Facebook authentication routes
app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/profile');
  }
);

// Profile route
app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.redirect('/');
  }
});

// Connect to the database
Connect_db().catch(err => {
  console.error("Database connection error: ", err);
});

// Example route
app.get('/fruit', (req, res) => {
  res.send(["apple", "grapes", "orbhi"]);
});

// Basic error handling for unknown routes
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running are at http://localhost:${port}`);
});















