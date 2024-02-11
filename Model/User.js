// Import des packages
const mongoose = require("mongoose");

// Schéma utilisateur
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
});

// Association du schéma au model
const User = mongoose.model("user", userSchema);

// Export du model
module.exports = User;
