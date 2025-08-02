import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // <-- Importer le CSS

// Données statiques pour la démo
const featuredFreelancers = [
  { id: 1, name: 'Amina El Fassi', specialty: 'Développeuse React' },
  { id: 2, name: 'Youssef Cherkaoui', specialty: 'Rédacteur Technique' },
  { id: 3, name: 'Fatima Zahra Bennani', specialty: 'Monteuse Vidéo' },
];

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <h1>Trouvez le talent parfait pour votre projet</h1>
        <p>Notre plateforme vous connecte avec les meilleurs freelances de la niche IA.</p>
        <div className="cta-buttons">
          <Link to="/projets">Voir les projets</Link>
          <Link to="/register">Devenir Freelance</Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">Freelances à la une</h2>
        <div className="cards-container">
          {featuredFreelancers.map(freelancer => (
            <div key={freelancer.id} className="card">
              <h3>{freelancer.name}</h3>
              <p>{freelancer.specialty}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;