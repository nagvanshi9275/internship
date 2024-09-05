

import mongoose from 'mongoose';

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
const User = mongoose.model('User', userSchema);

export default User;







