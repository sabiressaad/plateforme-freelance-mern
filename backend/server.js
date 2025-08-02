// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// LIGNE AJOUTÉE : Importer les routes que vous venez de créer
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connexion à MongoDB réussie !'))
  .catch((err) => console.error('❌ Erreur de connexion à MongoDB :', err));

// Route de test (vous pouvez la garder pour l'instant)
app.get('/api/test', (req, res) => {
  res.json({ message: 'Le backend fonctionne !' });
});

// LIGNE AJOUTÉE : Indiquer au serveur d'utiliser vos routes utilisateur
// Toutes les routes dans userRoutes seront préfixées par /api/users
app.use('/api/users', userRoutes);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});