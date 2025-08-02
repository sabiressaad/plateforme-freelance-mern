// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // On appelle le backend. Le proxy s'occupe de rediriger vers le port 5000.
    axios.get('/api/test')
      .then(response => {
        setBackendMessage(response.data.message);
      })
      .catch(error => {
        console.error('Erreur en contactant le backend :', error);
        setBackendMessage('Impossible de joindre le backend.');
      });
  }, []); // Le tableau vide assure que l'appel ne se fait qu'une seule fois.

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Message reçu du backend : <strong>{backendMessage || 'Chargement...'}</strong>
        </p>
      </header>
    </div>
  );
}

export default App;