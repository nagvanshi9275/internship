

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  facebookId: String,
  displayName: String,
  email: String
});

const User = mongoose.model('User', userSchema);

export default User;


















