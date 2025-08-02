const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Fonction pour générer un token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Le token expirera dans 30 jours
  });
};

// @desc    Inscrire un nouvel utilisateur
// @route   POST /api/users/register
const registerUser = async (req, res) => {
  const { name, email, password, isFreelancer } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
    }

    // Crypter le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Créer l'utilisateur dans la base de données
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      isFreelancer,
    });

    // Si l'utilisateur est créé, renvoyer ses infos et un token
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isFreelancer: user.isFreelancer,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Données invalides' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// @desc    Connecter un utilisateur
// @route   POST /api/users/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Chercher l'utilisateur par email
    const user = await User.findOne({ email });

    // Si l'utilisateur existe et que le mot de passe est correct
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isFreelancer: user.isFreelancer,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Email ou mot de passe invalide' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

module.exports = { registerUser, loginUser };