import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // <-- Réutiliser le même CSS !

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', { email, password });
      console.log('Connexion réussie:', res.data);
      alert('Connexion réussie !');
    } catch (err) {
      console.error(err.response.data.message);
      alert('Erreur: ' + err.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <button type="submit" className="form-button">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;