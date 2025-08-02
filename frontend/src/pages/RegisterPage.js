// frontend/src/pages/RegisterPage.js
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../components/Form.css'; // <-- Importez le CSS ici !


const RegisterPage = () => {
  return (
    <div>
      <h1>Créer un compte</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;