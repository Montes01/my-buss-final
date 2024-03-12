// AlternativeRoutes.js

import React from 'react';
import './alternative.scss';

const AlternativeRoutes = () => {
  // Datos quemados para las rutas alternativas
  const alternativeRoutes = [
    {
      id: 1,
      name: 'Ruta - 16',
      description: 'Explora los hermosos viñedos y aprende sobre la elaboración del vino.',
      distance: '10 km',
      difficulty: 'Moderada',
    },
    {
      id: 2,
      name: 'Ruta - 29',
      description: 'Descubre los mejores vinos locales en esta experiencia de degustación única.',
      distance: '5 km',
      difficulty: 'Fácil',
    },
    {
      id: 3,
      name: 'Ruta - 4',
      description: 'Viaja a través del tiempo mientras exploras los lugares históricos relacionados con el vino.',
      distance: '15 km',
      difficulty: 'Difícil',
    },
    // Agrega más rutas según sea necesario
  ];

  return (
    <div className="alternative-routes-container">
      <h1>Rutas Alternativas <hr /></h1>
      <div className="alternative-routes-list">
        {alternativeRoutes.map(route => (
          <div key={route.id} className="alternative-route">
            <h2>{route.name}</h2>
            <p>{route.description}</p>
            <div className="route-details">
              <p>Distancia: {route.distance}</p>
              <p>Dificultad: {route.difficulty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlternativeRoutes;
