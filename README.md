# Plateforme de Freelancing MERN

Une application web full-stack construite avec la stack MERN (MongoDB, Express, React, Node.js). Ce projet vise à créer une place de marché spécialisée pour connecter des freelances avec des clients recherchant des compétences spécifiques.

## ✨ Fonctionnalités

- **Profils Utilisateurs :** Inscription et connexion distinctes pour les clients et les freelances.
- **Place de Marché :** Les clients peuvent poster des missions et les freelances peuvent y répondre.
- **Authentification Sécurisée :** Utilisation de JSON Web Tokens (JWT) pour la gestion des sessions.
- **Messagerie en Temps Réel (Prévu) :** Un chat intégré avec Socket.io pour une communication fluide.
- **Paiements Sécurisés (Prévu) :** Système de séquestre (escrow) avec l'API Stripe.
- **Système d'Évaluation (Prévu) :** Notation et commentaires mutuels pour bâtir une communauté de confiance.

## 💻 Stack Technique

- **Frontend :** React, React Router
- **Backend :** Node.js, Express.js
- **Base de données :** MongoDB avec Mongoose
- **Authentification :** JWT (JSON Web Tokens), bcryptjs
- **Communication en temps réel :** Socket.io (prévu)
- **Paiements :** Stripe API (prévu)

## 🚀 Démarrage Rapide

Suivez ces instructions pour lancer le projet en local.

### Prérequis

- Node.js (v16 ou supérieure)
- npm
- Un compte gratuit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1.  **Clonez le dépôt :**
    ```bash
    git clone [https://github.com/VOTRE_NOM_UTILISATEUR/plateforme-freelance-mern.git](https://github.com/VOTRE_NOM_UTILISATEUR/plateforme-freelance-mern.git)
    cd plateforme-freelance-mern
    ```

2.  **Installez les dépendances du Backend :**
    ```bash
    cd backend
    npm install
    ```

3.  **Installez les dépendances du Frontend :**
    ```bash
    cd ../frontend
    npm install
    ```

### Configuration

1.  Créez un fichier nommé `.env` à la racine du dossier `/backend`.
2.  Ajoutez-y les variables d'environnement suivantes :

    ```env
    PORT=5000
    MONGO_URI=VOTRE_URI_DE_CONNEXION_MONGODB_ATLAS
    JWT_SECRET=VOTRE_CLE_SECRETE_POUR_LES_TOKENS
    ```
    * Remplacez `VOTRE_URI_DE_CONNEXION_MONGODB_ATLAS` par la chaîne de connexion fournie par MongoDB Atlas.
    * Remplacez `VOTRE_CLE_SECRETE_POUR_LES_TOKENS` par une longue chaîne de caractères aléatoire.

### Lancer l'Application

Vous devez lancer le serveur backend et le serveur frontend dans deux terminaux séparés.

1.  **Lancer le Backend :** (depuis le dossier `/backend`)
    ```bash
    npm run dev
    ```
    Le serveur tournera sur `http://localhost:5000`.

2.  **Lancer le Frontend :** (depuis le dossier `/frontend`)
    ```bash
    npm start
    ```
    L'application sera accessible sur `http://localhost:3000`.
