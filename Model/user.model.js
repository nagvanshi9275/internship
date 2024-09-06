

import mongoose from 'mongoose';

<<<<<<< HEAD
const userSchema = new mongoose.Schema({
  facebookId: String,
  displayName: String,
  email: String
});

=======
// Define the schema for the User model
const userSchema = new mongoose.Schema({
  facebookId: {
    type: String,
    required: true,
    unique: true //
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure each email is unique
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create the User model using the schema
>>>>>>> 27795a404727fbc61810aee6f9f7696993881d23
const User = mongoose.model('User', userSchema);

export default User;







<<<<<<< HEAD











=======
>>>>>>> 27795a404727fbc61810aee6f9f7696993881d23
