// frontend/src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // <-- Importer le CSS


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isFreelancer: false,
  });

  const { name, email, password, isFreelancer } = formData;

  const onChange = (e) => {
    // Si c'est la checkbox, on gère la valeur 'checked', sinon 'value'
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, password, isFreelancer };
      // On envoie la requête à l'API que vous avez testée
      const res = await axios.post('/api/users/register', newUser);
      
      console.log('Utilisateur enregistré avec succès:', res.data);
      // Ici, on pourrait rediriger l'utilisateur ou sauvegarder son token
      alert('Inscription réussie !');

    } catch (err) {
      console.error(err.response.data.message);
      alert('Erreur lors de l\'inscription: ' + err.response.data.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nom complet</label>
        <input type="text" name="name" value={name} onChange={onChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={onChange} required />
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" name="password" value={password} onChange={onChange} required />
      </div>
      <div>
        <label>
          <input type="checkbox" name="isFreelancer" checked={isFreelancer} onChange={onChange} />
          Je suis un freelance
        </label>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default RegisterForm;