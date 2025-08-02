import React from 'react';
import LoginForm from '../components/LoginForm';
import '../components/Form.css'; // <-- Importez le CSS ici !


const LoginPage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Se Connecter</h1>
      <LoginForm />
    </>
  );
};
export default LoginPage;