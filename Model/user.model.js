

import mongoose from 'mongoose';


//const userSchema = new mongoose.Schema({
  //facebookId: String,
  //displayName: String,
  //email: String
//});


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


const User = mongoose.model('User', userSchema);

export default User;




















