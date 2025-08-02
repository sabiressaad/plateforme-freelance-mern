const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Chaque email doit être unique
  },
  password: {
    type: String,
    required: true,
  },
  isFreelancer: {
    type: Boolean,
    default: false,
  },
  // On ajoute d'autres champs plus tard (compétences, portfolio, etc.)
}, {
  timestamps: true, // Ajoute automatiquement les dates de création/modification
});

const User = mongoose.model('User', userSchema);

module.exports = User;